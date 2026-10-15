import { profil, daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");
const form = document.querySelector("#form-latihan");
const tema = document.querySelector("#tema");
const teksTema = document.querySelector(".teks-tema");

const namaProfil = document.querySelector("#nama-profil");
const nimProfil = document.querySelector("#nim-profil");
const peranProfil = document.querySelector("#peran-profil");
const jumlahProyek = document.querySelector("#jumlah-proyek");
const keahlianProfil = document.querySelector("#keahlian-profil");
const bioProfil = document.querySelector("#bio-profil");
const judulHalaman = document.querySelector("#judul-halaman");

function buatKartu(proyek) {
    const li = document.createElement("li");
    li.className = "kartu";

    const isi = document.createElement("div");
    isi.className = "kartu__isi";

    const judul = document.createElement("h3");
    judul.textContent = proyek.judul;

    const hari = document.createElement("p");
    hari.textContent = `Hari: ${proyek.hari}`;

    const durasi = document.createElement("p");
    durasi.textContent = `Durasi: ${proyek.durasi} menit`;

    const target = document.createElement("p");
    target.textContent = `Target: ${proyek.target}`;

    isi.append(judul, hari, durasi, target);

    const kaki = document.createElement("div");
    kaki.className = "kartu__kaki";

    const status = document.createElement("span");
    status.textContent = proyek.selesai ? "Selesai" : "Tercatat";

    const tahun = document.createElement("span");
    tahun.textContent = `${proyek.tahun}`;

    kaki.append(status, tahun);
    li.append(isi, kaki);

    return li;
}

function render(daftar) {
    wadah.textContent = "";

    if (daftar.length === 0) {
        kosong.hidden = false;
        return;
    }

    kosong.hidden = true;
    const fragmen = document.createDocumentFragment();
    daftar.forEach((proyek) => fragmen.append(buatKartu(proyek)));
    wadah.append(fragmen);
}

function periksaKolom(input, pesan) {
    const nilai = input.value.trim();
    const valid = nilai !== "";
    input.setAttribute("aria-invalid", String(!valid));
    pesan.hidden = valid;
    return valid;
}

function validasiForm() {
    const jenis = document.querySelector("#jenis-latihan");
    const tanggal = document.querySelector("#tanggal-latihan");
    const durasi = document.querySelector("#durasi-latihan");

    const validJenis = periksaKolom(jenis, document.querySelector("#error-jenis"));
    const validTanggal = periksaKolom(tanggal, document.querySelector("#error-tanggal"));

    const nilaiDurasi = Number(durasi.value);
    const validDurasi = Number.isFinite(nilaiDurasi) && nilaiDurasi >= 1 && nilaiDurasi <= 300;
    durasi.setAttribute("aria-invalid", String(!validDurasi));
    document.querySelector("#error-durasi").hidden = validDurasi;

    const sah = validJenis && validTanggal && validDurasi;
    form.querySelector("button[type='submit']").disabled = !sah;
    return { sah, jenis, tanggal, durasi };
}

form.addEventListener("input", validasiForm);
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const hasil = validasiForm();
    if (!hasil.sah) {
        const kolomPertamaBermasalah = [hasil.jenis, hasil.tanggal, hasil.durasi].find(
            (input) => input.getAttribute("aria-invalid") === "true"
        );
        kolomPertamaBermasalah?.focus();
        return;
    }
    alert("Latihan berhasil disimpan.");
    form.reset();
    validasiForm();
});

function perbaruiLabelTema() {
    const modeGelap = tema.checked;
    teksTema.textContent = modeGelap ? "Mode Terang" : "Mode Gelap";
    tema.setAttribute("aria-label", modeGelap ? "Aktifkan mode terang" : "Aktifkan mode gelap");
}

tema.addEventListener("change", perbaruiLabelTema);

// Galeri: swipe manual, tombol, keyboard, dan auto-slide setiap 15 detik.
const galeri = document.querySelector("#galeri");
const track = galeri.querySelector(".galeri-track");
const slides = Array.from(galeri.querySelectorAll(".slide"));
const dots = galeri.querySelector(".galeri-dots");
const tombolSebelumnya = document.querySelector("#galeri-sebelumnya");
const tombolBerikutnya = document.querySelector("#galeri-berikutnya");
let slideAktif = 0;
let timerGaleri;
let pointerMulai = null;

slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = index === 0 ? "dot aktif" : "dot";
    dot.setAttribute("aria-label", `Tampilkan foto ${index + 1}`);
    dot.addEventListener("click", () => tampilkanSlide(index, true));
    dots.append(dot);
});

function tampilkanSlide(index, resetTimer = false) {
    slideAktif = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${slideAktif * 100}%)`;
    slides.forEach((slide, i) => slide.classList.toggle("is-active", i === slideAktif));
    dots.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("aktif", i === slideAktif);
        dot.setAttribute("aria-current", i === slideAktif ? "true" : "false");
    });
    if (resetTimer) mulaiTimerGaleri();
}

function mulaiTimerGaleri() {
    clearInterval(timerGaleri);
    timerGaleri = setInterval(() => tampilkanSlide(slideAktif + 1), 15000);
}

tombolSebelumnya.addEventListener("click", () => tampilkanSlide(slideAktif - 1, true));
tombolBerikutnya.addEventListener("click", () => tampilkanSlide(slideAktif + 1, true));

galeri.addEventListener("pointerdown", (event) => {
    pointerMulai = event.clientX;
    galeri.setPointerCapture?.(event.pointerId);
});

galeri.addEventListener("pointerup", (event) => {
    if (pointerMulai === null) return;
    const jarak = event.clientX - pointerMulai;
    pointerMulai = null;
    if (Math.abs(jarak) < 50) return;
    tampilkanSlide(slideAktif + (jarak < 0 ? 1 : -1), true);
});

galeri.addEventListener("pointercancel", () => { pointerMulai = null; });
galeri.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") tampilkanSlide(slideAktif - 1, true);
    if (event.key === "ArrowRight") tampilkanSlide(slideAktif + 1, true);
});
galeri.addEventListener("mouseenter", () => clearInterval(timerGaleri));
galeri.addEventListener("mouseleave", mulaiTimerGaleri);

namaProfil.textContent = profil.nama;
nimProfil.textContent = profil.nim;
peranProfil.textContent = profil.programStudi;
jumlahProyek.textContent = daftarProyek.length;
keahlianProfil.textContent = profil.keahlian.join(" · ");
bioProfil.textContent = profil.bio;
judulHalaman.textContent = `MyTraning — ${profil.nama}`;

render(daftarProyek);
validasiForm();
perbaruiLabelTema();
tampilkanSlide(0);
mulaiTimerGaleri();

console.log("P9 DOM siap.");

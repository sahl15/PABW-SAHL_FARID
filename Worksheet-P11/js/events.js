// P11 — seluruh pemasangan pendengar peristiwa.
import { state, ubahTema, pilihSlide, aturDaftarLatihan, resetPilihan } from "./state.js";
import {
    elemenTema, elemenForm, elemenGaleri, tombolGaleriSebelumnya,
    tombolGaleriBerikutnya, siapkanGaleri, tombolGaleriTitik
} from "./dom.js";
import { ambilLatihan } from "./api.js";

export function pasangPendengar() {
    const tema = elemenTema();
    tema.addEventListener("change", () => ubahTema(tema.checked));

    document.querySelector("#atur-ulang").addEventListener("click", resetPilihan);

    const form = elemenForm();
    const jenis = form.querySelector("#jenis-latihan");
    const tanggal = form.querySelector("#tanggal-latihan");
    const durasi = form.querySelector("#durasi-latihan");
    const tombolSimpan = form.querySelector("button[type='submit']");

    function periksaKolom(input, pesan) {
        const valid = input.value.trim() !== "";
        input.setAttribute("aria-invalid", String(!valid));
        pesan.hidden = valid;
        return valid;
    }
    function validasiForm() {
        const validJenis = periksaKolom(jenis, document.querySelector("#error-jenis"));
        const validTanggal = periksaKolom(tanggal, document.querySelector("#error-tanggal"));
        const nilaiDurasi = Number(durasi.value);
        const validDurasi = Number.isFinite(nilaiDurasi) && nilaiDurasi >= 1 && nilaiDurasi <= 300;
        durasi.setAttribute("aria-invalid", String(!validDurasi));
        document.querySelector("#error-durasi").hidden = validDurasi;
        tombolSimpan.disabled = !(validJenis && validTanggal && validDurasi);
        return { sah: validJenis && validTanggal && validDurasi, kolom: [jenis, tanggal, durasi] };
    }
    form.addEventListener("input", validasiForm);
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const hasil = validasiForm();
        if (!hasil.sah) {
            hasil.kolom.find((input) => input.getAttribute("aria-invalid") === "true")?.focus();
            return;
        }
        alert("Latihan berhasil disimpan.");
        form.reset();
        validasiForm();
    });

    let timerGaleri;
    let pointerMulai = null;
    function pilihDanCatat(index) { pilihSlide(((index % 5) + 5) % 5); }
    siapkanGaleri(pilihDanCatat);
    tombolGaleriTitik().forEach((titik, index) => {
        titik.addEventListener("click", () => pilihDanCatat(index));
    });
    pilihDanCatat(state.slideAktif);
    tombolGaleriSebelumnya().addEventListener("click", () => pilihDanCatat(state.slideAktif - 1));
    tombolGaleriBerikutnya().addEventListener("click", () => pilihDanCatat(state.slideAktif + 1));
    const galeri = elemenGaleri();
    galeri.addEventListener("pointerdown", (event) => {
        pointerMulai = event.clientX;
        galeri.setPointerCapture?.(event.pointerId);
    });
    galeri.addEventListener("pointerup", (event) => {
        if (pointerMulai === null) return;
        const jarak = event.clientX - pointerMulai;
        pointerMulai = null;
        if (Math.abs(jarak) >= 50) pilihDanCatat(state.slideAktif + (jarak < 0 ? 1 : -1));
    });
    galeri.addEventListener("pointercancel", () => { pointerMulai = null; });
    galeri.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") pilihDanCatat(state.slideAktif - 1);
        if (event.key === "ArrowRight") pilihDanCatat(state.slideAktif + 1);
    });
    function mulaiTimer() {
        clearInterval(timerGaleri);
        timerGaleri = setInterval(() => pilihDanCatat(state.slideAktif + 1), 15000);
    }
    galeri.addEventListener("mouseenter", () => clearInterval(timerGaleri));
    galeri.addEventListener("mouseleave", mulaiTimer);
    mulaiTimer();

    // API P10 dipertahankan sebagai lapisan pengambilan data yang terpisah.
    ambilLatihan().then(aturDaftarLatihan).catch((galat) => {
        console.error("Tampilan gagal dimuat:", galat.message);
        const pesan = document.querySelector("#pesan-kosong");
        pesan.textContent = "Data latihan gagal dimuat. Periksa koneksi atau jalankan halaman lewat server lokal.";
        pesan.hidden = false;
    });
    validasiForm();
}

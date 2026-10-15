// P11 — seluruh akses DOM, render, dan pembaruan tampilan.
import { profil, formatKeahlian, buatPerkenalan } from "./data.js";

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");
const tema = document.querySelector("#tema");
const teksTema = document.querySelector(".teks-tema");
const namaProfil = document.querySelector("#nama-profil");
const nimProfil = document.querySelector("#nim-profil");
const peranProfil = document.querySelector("#peran-profil");
const jumlahProyek = document.querySelector("#jumlah-proyek");
const keahlianProfil = document.querySelector("#keahlian-profil");
const bioProfil = document.querySelector("#bio-profil");
const judulHalaman = document.querySelector("#judul-halaman");
const galeri = document.querySelector("#galeri");
const track = galeri.querySelector(".galeri-track");
const slides = Array.from(galeri.querySelectorAll(".slide"));
const dots = galeri.querySelector(".galeri-dots");

export function buatKartu(proyek) {
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
    tahun.textContent = String(proyek.tahun);
    kaki.append(status, tahun);
    li.append(isi, kaki);
    return li;
}

export function render(state) {
    wadah.textContent = "";
    const daftar = state.daftarLatihan;
    if (!Array.isArray(daftar) || daftar.length === 0) {
        kosong.hidden = false;
        return;
    }
    kosong.hidden = true;
    const fragmen = document.createDocumentFragment();
    daftar.forEach((proyek) => fragmen.append(buatKartu(proyek)));
    wadah.append(fragmen);
}

export function perbaruiProfil(state) {
    namaProfil.textContent = profil.nama;
    nimProfil.textContent = profil.nim;
    peranProfil.textContent = profil.programStudi;
    jumlahProyek.textContent = String(state.daftarLatihan.length);
    keahlianProfil.textContent = formatKeahlian(profil.keahlian);
    bioProfil.textContent = profil.bio;
    judulHalaman.textContent = `MyTraning — ${profil.nama}`;
    document.querySelector("#perkenalan-profil").textContent = buatPerkenalan(profil);
}

export function perbaruiLabelTema(state) {
    tema.checked = state.temaGelap;
    document.body.classList.toggle("tema-gelap", state.temaGelap);
    teksTema.textContent = state.temaGelap ? "Mode Terang" : "Mode Gelap";
    tema.setAttribute("aria-label", state.temaGelap ? "Aktifkan mode terang" : "Aktifkan mode gelap");
}

export function tampilkanSlide(index) {
    const slideAktif = ((index % slides.length) + slides.length) % slides.length;
    track.style.transform = `translateX(-${slideAktif * 100}%)`;
    slides.forEach((slide, i) => slide.classList.toggle("is-active", i === slideAktif));
    dots.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("aktif", i === slideAktif);
        dot.setAttribute("aria-current", i === slideAktif ? "true" : "false");
    });
}

export function siapkanGaleri(pilihSlide) {
    slides.forEach((_, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = index === 0 ? "dot aktif" : "dot";
        dot.setAttribute("aria-label", `Tampilkan foto ${index + 1}`);
        dots.append(dot);
    });
}

export function tombolGaleriTitik() { return Array.from(dots.querySelectorAll(".dot")); }
export function elemenTema() { return tema; }
export function elemenForm() { return document.querySelector("#form-latihan"); }
export function elemenGaleri() { return galeri; }
export function tombolGaleriSebelumnya() { return document.querySelector("#galeri-sebelumnya"); }
export function tombolGaleriBerikutnya() { return document.querySelector("#galeri-berikutnya"); }

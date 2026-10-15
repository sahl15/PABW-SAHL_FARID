// P11 — satu-satunya objek keadaan aplikasi dan pintu perubahan state.
import { daftarProyekBawaan } from "./data.js";
import { render, perbaruiProfil, perbaruiLabelTema, tampilkanSlide } from "./dom.js";
import { simpan, muat, aturUlang } from "./storage.js";

export const state = {
    daftarLatihan: [...daftarProyekBawaan],
    temaGelap: false,
    slideAktif: 0
};

export function terapkanSimpanan() {
    const isi = muat();
    if (isi) {
        state.temaGelap = typeof isi.temaGelap === "boolean" ? isi.temaGelap : false;
        state.slideAktif = Number.isInteger(isi.slideAktif) && isi.slideAktif >= 0 ? isi.slideAktif : 0;
    }
}

function perbaruiDanGambar() {
    simpan(state);
    render(state);
    perbaruiProfil(state);
    perbaruiLabelTema(state);
    tampilkanSlide(state.slideAktif);
}

export function aturDaftarLatihan(daftar) {
    state.daftarLatihan = Array.isArray(daftar) ? daftar : [...daftarProyekBawaan];
    perbaruiDanGambar();
}

export function ubahTema(nilai) {
    state.temaGelap = Boolean(nilai);
    perbaruiDanGambar();
}

export function pilihSlide(nilai) {
    state.slideAktif = nilai;
    simpan(state);
    tampilkanSlide(state.slideAktif);
}

export function resetPilihan() {
    aturUlang();
    state.temaGelap = false;
    state.slideAktif = 0;
    render(state);
    perbaruiProfil(state);
    perbaruiLabelTema(state);
    tampilkanSlide(state.slideAktif);
}

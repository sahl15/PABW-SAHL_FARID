// Penyimpanan lokal: hanya preferensi tampilan, bukan data sensitif.
const KUNCI = "pabw-p11";
const VERSI = 2;

export function simpan(state) {
    const isi = {
        versi: VERSI,
        temaGelap: state.temaGelap,
        slideAktif: state.slideAktif
    };
    try {
        localStorage.setItem(KUNCI, JSON.stringify(isi));
    } catch (galat) {
        console.warn("Preferensi tidak dapat disimpan:", galat.message);
    }
}

export function muat() {
    try {
        const teks = localStorage.getItem(KUNCI);
        if (teks === null) return null;
        const isi = JSON.parse(teks);
        if (!isi || isi.versi !== VERSI) {
            localStorage.removeItem(KUNCI);
            return null;
        }
        return isi;
    } catch {
        localStorage.removeItem(KUNCI);
        return null;
    }
}

export function aturUlang() {
    localStorage.removeItem(KUNCI);
}

// P11 — data mentah dan fungsi murni pemformat.
export const profil = {
    nama: "Sahl Farid",
    nim: "25523251",
    programStudi: "Informatika",
    peran: "Mahasiswa Informatika",
    keahlian: ["HTML", "CSS", "JavaScript"],
    bio: "Mencatat beberapa pilihan olahraga untuk menjaga latihan tetap aktif dan bervariasi."
};

export const daftarProyekBawaan = [
    { judul: "Lari", hari: "Senin", durasi: 30, target: "4 km", tahun: 2026, selesai: true },
    { judul: "Padel", hari: "Selasa", durasi: 60, target: "Teknik dan rally", tahun: 2026, selesai: true },
    { judul: "Renang", hari: "Rabu", durasi: 45, target: "20 lintasan", tahun: 2026, selesai: true },
    { judul: "Badminton", hari: "Kamis", durasi: 60, target: "Footwork dan rally", tahun: 2026, selesai: true },
    { judul: "Tenis Lapangan", hari: "Sabtu", durasi: 60, target: "Forehand, backhand, dan servis", tahun: 2026, selesai: true }
];

export function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

export function formatKeahlian(daftar) {
    return daftar.join(" · ");
}

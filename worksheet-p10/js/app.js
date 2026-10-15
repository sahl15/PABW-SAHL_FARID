// P9 — Data latihan untuk MyTraning.
// Data dipisahkan dari HTML agar daftar dan filter mudah dikelola JavaScript.

export const profil = {
    nama: "Sahl Farid",
    nim: "25523251",
    programStudi: "Informatika",
    peran: "Mahasiswa Informatika",
    keahlian: ["HTML", "CSS", "JavaScript"],
    bio: "Mencatat beberapa pilihan olahraga untuk menjaga latihan tetap aktif dan bervariasi."
};

export const daftarProyek = [
    { judul: "Lari", hari: "Senin", durasi: 30, target: "4 km", tahun: 2026, selesai: true },
    { judul: "Padel", hari: "Selasa", durasi: 60, target: "Teknik dan rally", tahun: 2026, selesai: true },
    { judul: "Renang", hari: "Rabu", durasi: 45, target: "20 lintasan", tahun: 2026, selesai: true },
    { judul: "Badminton", hari: "Kamis", durasi: 60, target: "Footwork dan rally", tahun: 2026, selesai: true },
    { judul: "Tenis Lapangan", hari: "Sabtu", durasi: 60, target: "Forehand, backhand, dan servis", tahun: 2026, selesai: true }
];

const jumlahProyek = daftarProyek.length;
let pilihanAktif = "semua";

function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

const kalimatPerkenalan = buatPerkenalan(profil);
const daftarKeahlian = formatKeahlian(profil.keahlian);
const bioProfil = profil.bio ?? "Belum ada deskripsi.";
const instagram = profil.kontak?.instagram ?? "Belum tersedia";

const judulProyek = daftarProyek.map((proyek) => proyek.judul);
const latihanSelesai = daftarProyek.filter((proyek) => proyek.selesai);
const latihanInterval = daftarProyek.find((proyek) => proyek.judul === "Padel");

console.log("Perkenalan:", kalimatPerkenalan);
console.log("Keahlian:", daftarKeahlian);
console.table(profil.keahlian);
console.table(daftarProyek);
console.table(latihanSelesai);
console.log("Hasil find:", latihanInterval);
console.table(judulProyek);
console.log("Jumlah latihan:", jumlahProyek);
console.log("Pilihan aktif:", pilihanAktif);

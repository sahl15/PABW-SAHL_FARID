// P8 — JavaScript Modern ES6+
// Data halaman dipisahkan dari HTML agar mudah diolah dengan JavaScript.

const profil = {
    nama: "Sahl Farid",
    nim: "25523251",
    programStudi: "Informatika",
    peran: "Mahasiswa Informatika",
    keahlian: ["HTML", "CSS", "JavaScript",],
    bio: "Membangun halaman web sederhana untuk mencatat dan memantau latihan lari.",
   
        
    
};

const daftarProyek = [
    { judul: "Lari ringan", hari: "Selasa", durasi: 30, target: "4 km", tahun: 2026, selesai: true },
    { judul: "Interval", hari: "Kamis", durasi: 25, target: "5 x 400 meter", tahun: 2026, selesai: true },
    { judul: "Lari jarak jauh", hari: "Minggu", durasi: 50, target: "7 km", tahun: 2026, selesai: false }
];

const jumlahProyek = daftarProyek.length;
let pilihanAktif = "semua";

// Fungsi murni 1: menyusun kalimat perkenalan dari data profil.
function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

// Fungsi murni 2: merapikan daftar keahlian menjadi satu baris.
const formatKeahlian = (daftar) => daftar.join(" · ");

const kalimatPerkenalan = buatPerkenalan(profil);
const daftarKeahlian = formatKeahlian(profil.keahlian);
const bioProfil = profil.bio ?? "Belum ada deskripsi.";
const instagram = profil.kontak?.instagram ?? "Belum tersedia";

// map mengubah setiap object proyek menjadi kartu HTML.
const kartuJadwal = daftarProyek.map((proyek) => `
    <div class="kartu">
        <div class="kartu__isi">
            <h3>${proyek.hari}</h3>
            <p><strong>Jenis:</strong> ${proyek.judul}</p>
            <p><strong>Durasi:</strong> ${proyek.durasi} menit</p>
            <p><strong>Target:</strong> ${proyek.target}</p>
        </div>
        <div class="kartu__kaki">
            <span>Target ${proyek.target}</span>
            <span>${proyek.durasi} menit</span>
        </div>
    </div>
`).join("");

// filter memilih latihan yang sudah selesai.
const latihanSelesai = daftarProyek.filter((proyek) => proyek.selesai);

// find mengambil satu latihan berdasarkan judul.
const latihanInterval = daftarProyek.find((proyek) => proyek.judul === "Interval");

// Tampilkan data ke halaman setelah elemen HTML tersedia.
document.querySelector("#jadwal-data").innerHTML = kartuJadwal;
document.querySelector("#nama-profil").textContent = profil.nama;
document.querySelector("#nim-profil").textContent = profil.nim;
document.querySelector("#peran-profil").textContent = profil.programStudi;
document.querySelector("#jumlah-proyek").textContent = jumlahProyek;
document.querySelector("#keahlian-profil").textContent = daftarKeahlian;
document.querySelector("#bio-profil").textContent = bioProfil;
document.querySelector("#kontak-profil").textContent = instagram;
document.querySelector("#judul-halaman").textContent = `MyTraning — ${profil.nama}`;

// Pemeriksaan data sesuai Lembar D.
console.log("Perkenalan:", kalimatPerkenalan);
console.log("Keahlian:", daftarKeahlian);
console.table(profil.keahlian);
console.table(daftarProyek);
console.table(latihanSelesai);
console.log("Hasil find:", latihanInterval);
console.table(daftarProyek.map((proyek) => proyek.judul));
console.log("Pilihan aktif:", pilihanAktif);

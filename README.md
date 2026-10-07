# PABW — Sahl Farid — 25523251

Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi Berbasis Web, satu folder untuk setiap pertemuan.






## Pertemuan 3 - Halaman Profil Saya

Topik halaman saya: Rencana Latihan Lari Saya.

- Judul halaman: Rencana Latihan Lari Saya
- Deskripsi: Catatan jadwal latihan dan target lari Sahl Farid.
- Tautan navigasi: Jadwal Latihan, Catat Latihan, Tentang Saya
- Dua bagian utama: Jadwal Latihan Mingguan, Catat Latihan Hari Ini
- Kolom tabel: Hari, Jenis Latihan, Durasi, Target
- Kolom form: Jenis latihan, Tanggal latihan, Durasi latihan (menit)
- Gambar:https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=640&h=360&q=80
### Catatan penggunaan AI

Saya menggunakan AI untuk membantu memahami instruksi tugas, menyusun struktur README.md, dan membantu merapikan atribut aksesibilitas HTML5 (seperti label, scope tabel, dan alt gambar) agar sesuai kriteria tugas. Isi topik, data jadwal latihan lari, serta pengerjaan akhir halaman profil saya sesuaikan dan kerjakan sendiri.






# PERTEMUAN 4 — Design token halaman profil

- Berkas gaya yang dibuat: tokens.css, base.css, layout.css, komponen.css, tema.css
- Warna utama: `#C71585` (medium violet red / magenta), dipilih sebagai penanda aksen yang mencolok dan enerjik untuk tombol, judul, serta elemen interaktif pada halaman rencana latihan lari.

### Token yang saya tetapkan

| Token | Nilai | Untuk apa |
|---|---|---|
| `--color-primary` | `#C71585` | Warna utama judul dan tombol |
| `--color-text` | `#2B2D2F` | Warna teks utama |
| `--color-bg` | `#E8EED9` | Latar belakang halaman |
| `--color-border` | `#C4D3A6` | Border tabel dan input |
| `--color-header-bg` | `#D3E0B5` | Latar header tabel |
| `--color-header-text` | `#3D4E1E` | Teks header tabel |
| `--color-card-bg` | `#F8FAF2` | Latar isi tabel |
| `--color-hover` | `#A0126C` | Warna tombol saat hover |
| `--color-image-border` | `#FFB6C1` | Border gambar |
| `--radius-sm` | `4px` | Radius tombol dan input |
| `--radius-md` | `6px` | Radius gambar |
| `--space-1` | `8px` | Jarak kecil |
| `--space-2` | `10px` | Padding tabel |
| `--space-3` | `16px` | Jarak navigasi/padding tombol |
| `--space-4` | `20px` | Padding halaman |

### Kriteria selesai

Mengubah `--color-primary` pada satu baris di `tokens.css` akan mengubah warna utama yang digunakan pada judul, header, dan tombol secara otomatis di seluruh halaman.

### Catatan penggunaan AI
Saya menggunakan bantuan AI untuk membantu menyusun struktur arsitektur CSS (tokens, base, layout, komponen, tema) serta memverifikasi keterbacaan teks dan aksesibilitas kontras elemen form.





# PERTEMUAN 5 — Layout Modern: Flexbox dan Grid

Proyek ini merupakan lanjutan langsung dari proyek Pertemuan 4.

Berkas:
- profil.html
- token.css
- base.css
- layout.css
- komponen.css
- tema.css

Perubahan P5:
- Kerangka halaman memakai CSS Grid: `auto 1fr auto`.
- Area isi memakai dua kolom `16rem minmax(0, 1fr)`.
- Navbar memakai Flexbox dan `gap`.
- Galeri jadwal memakai `repeat(auto-fit, minmax(12rem, 1fr))` tanpa media query.
- Kartu memakai Flexbox.
- Penempatan memakai named grid areas.
- `min-width: 0` dan `overflow-wrap: anywhere` mencegah isi panjang mendorong kolom.
- Tema gelap dari Pertemuan 4 tetap dipertahankan.

Uji pada lebar 360 px dan 1280 px menggunakan DevTools.






# PERTEMUAN 6

## MyTraning — Responsif Mobile-First

P6 merupakan lanjutan dari proyek P5. Halaman **MyTraning — Catatan Latihan** dibuat responsif agar nyaman digunakan pada ponsel, tablet, dan desktop.

### Tujuan
- Menerapkan konsep **mobile-first**.
- Menggunakan `min-width` untuk breakpoint.
- Menyesuaikan layout berdasarkan ukuran layar.
- Mencegah overflow pada gambar, input, dan teks.
- Mempertahankan mode terang dan mode gelap.

### Struktur P6
```text
worksheet-p6/
├── profil.html
├── token.css
├── base.css
├── layout.css
├── komponen.css
├── tema.css
├── responsif.css
└── Worksheet_P6_Selesai.docx

### Perubahan dan perbaikan dari sebelumnya 

mengubah gambar sebelumnya menjadi gambarnya dokter tirta yang sedang berlalri, dan memperbaiki mode malam dan mode terang sebeluymnya yang tidak berfungsi






#  Pertemuan 8
Pada Pertemuan 8, saya mengembangkan halaman profil dengan menggunakan JavaScript Modern ES6+, struktur data, dan array methods.

## Tujuan
- Menggunakan `const` dan `let`
- Menggunakan object dan array
- Membuat fungsi murni
- Menggunakan template literal
- Menggunakan `map`, `filter`, dan `find`
- Membaca dan menangani error melalui Console

## Data Profil
Data halaman disimpan di JavaScript menggunakan variabel dan object, bukan ditulis langsung di HTML.

## Fungsi
Saya membuat minimal dua fungsi murni untuk mengolah data profil dan daftar keahlian.

## Array Methods
Array methods yang digunakan:
- `map()` untuk mengubah data
- `filter()` untuk menyaring data
- `find()` untuk mencari data yang sesuai

## Debugging
Saya menggunakan `console.log()` dan `console.table()` untuk memeriksa data serta membaca error pada Console.

## Penggunaan AI
AI digunakan sebagai bantuan dalam memahami materi, menyusun kode, dan membantu mengecek kesalahan. Saya tetap memahami dan memeriksa kode yang digunakan dalam pekerjaan ini.

## Kesimpulan
Pada Pertemuan 8 saya belajar mengelola data halaman menggunakan JavaScript sehingga data dapat dipisahkan dari struktur HTML dan diolah menggunakan fungsi serta array methods.



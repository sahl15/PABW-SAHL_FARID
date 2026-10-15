# MyTraning — Worksheet P11

## Struktur modul P11
- `js/data.js`: data profil, daftar latihan bawaan, dan fungsi pemformat murni.
- `js/state.js`: satu objek `state`, penerapan simpanan, dan fungsi pengubah keadaan.
- `js/dom.js`: pemilih DOM dan fungsi render/pembaruan tampilan.
- `js/events.js`: pemasangan pendengar peristiwa untuk tema, form, galeri, reset, dan pemanggilan API.
- `js/app.js`: perakit yang mengimpor modul dan memulai aplikasi.
- `js/storage.js`: modul tambahan untuk localStorage, JSON, pemeriksaan versi skema, dan reset.
- `js/api.js` + `data/latihan.json`: lapisan pengambilan data yang dipertahankan dari pekerjaan sebelumnya.

## Penyimpanan
Yang disimpan hanya preferensi tampilan: `temaGelap` dan `slideAktif`. Data tersebut diserialisasi menggunakan `JSON.stringify`, dibaca dengan `JSON.parse`, diberi versi skema 2, dan dibersihkan bila rusak atau versinya tidak cocok. Token, kata sandi, dan data pribadi tidak disimpan.

## Deklarasi penggunaan AI
AI digunakan untuk membantu mengisi dan merapikan jawaban worksheet, memeriksa pembagian tanggung jawab modul, serta menyarankan perubahan kode agar pendengar peristiwa dipasang di `events.js`. Mahasiswa tetap bertanggung jawab memeriksa seluruh kode, menjalankan halaman di server lokal, menguji kasus localStorage, dan memastikan isi sesuai pekerjaan yang benar-benar dilakukan.

## Pemeriksaan yang masih perlu dilakukan
- Buka `profil.html` melalui server lokal, bukan dengan membuka file langsung.
- Periksa Console untuk galat impor dan galat runtime.
- Uji perubahan tema dan slide, tutup/buka tab, serta tombol `Atur Ulang Preferensi`.
- Uji di Console: `localStorage.setItem("pabw-p11", "bukan-json")`, lalu muat ulang; ulangi dengan `"{}"`.
- Jalankan `node -v` dan `npm -v` bila Node.js LTS sudah terpasang. Worksheet menandai versi sebagai belum diperiksa karena tidak bisa dipastikan dari berkas proyek.
- Commit perubahan dan push ke repositori GitHub milik sendiri.

Catatan: halaman ini memakai modul JavaScript ES dan `fetch`; jalankan lewat server lokal agar pemuatan `data/latihan.json` berfungsi.

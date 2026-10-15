// Lapisan data P10: alamat sumber ditulis satu kali di sini.
const ALAMAT = "./data/latihan.json";

export async function ambilLatihan() {
    try {
        const respons = await fetch(ALAMAT);
        console.log("Status:", respons.status, "ok:", respons.ok);

        if (!respons.ok) {
            throw new Error("Status " + respons.status);
        }

        const data = await respons.json();
        if (!Array.isArray(data)) {
            throw new Error("Format data tidak sesuai.");
        }

        // Contoh objek menjadi teks JSON, lalu teks dibaca kembali menjadi nilai.
        const teksJSON = JSON.stringify(data);
        const daftarLatihan = JSON.parse(teksJSON);
        return daftarLatihan;
    } catch (galat) {
        console.error("Gagal memuat data latihan:", galat.message);
        throw galat;
    }
}

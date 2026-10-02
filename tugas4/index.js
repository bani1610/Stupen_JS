// Class Pelanggan
class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }

    // Method untuk mencatat transaksi penyewaan
    sewaKendaraan(kendaraan) {
        this.kendaraanDisewa = kendaraan;
        console.log(
            `${this.nama} berhasil menyewa kendaraan ${kendaraan}`
        );
    }

    // Method untuk menampilkan data pelanggan
    tampilkanData() {
        console.log(`Nama           : ${this.nama}`);
        console.log(`Nomor Telepon  : ${this.nomorTelepon}`);
        console.log(`Kendaraan      : ${this.kendaraanDisewa}`);
        console.log("-----------------------------");
    }
}


// Membuat object pelanggan
const pelanggan1 = new Pelanggan(
    "Budi",
    "081234567890"
);

const pelanggan2 = new Pelanggan(
    "Andi",
    "082345678901"
);

const pelanggan3 = new Pelanggan(
    "Siti",
    "083456789012"
);


// Mencatat transaksi penyewaan kendaraan
pelanggan1.sewaKendaraan("Toyota Avanza");
pelanggan2.sewaKendaraan("Honda Brio");
pelanggan3.sewaKendaraan("Mitsubishi Xpander");


// Menyimpan semua pelanggan ke dalam array
const daftarPelanggan = [
    pelanggan1,
    pelanggan2,
    pelanggan3
];


// Menampilkan daftar pelanggan yang sedang menyewa
console.log("\n=== DAFTAR PELANGGAN YANG MENYEWA ===");

daftarPelanggan.forEach((pelanggan) => {
    pelanggan.tampilkanData();
});
// Array produk toko
let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];


// Fungsi untuk menambahkan produk
function tambahProduk(nama, harga, stok) {

    // Membuat ID baru
    let idBaru = produkToko.length + 1;

    let produkBaru = {
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok
    };

    produkToko.push(produkBaru);

    console.log("Produk berhasil ditambahkan!");
}


// Fungsi untuk menghapus produk berdasarkan ID
function hapusProduk(id) {

    let index = produkToko.findIndex(function(produk) {
        return produk.id === id;
    });

    if (index !== -1) {
        produkToko.splice(index, 1);
        console.log("Produk berhasil dihapus!");
    } else {
        console.log("Produk dengan ID tersebut tidak ditemukan.");
    }
}


// Fungsi untuk menampilkan daftar produk
function tampilkanProduk() {

    console.log("=== DAFTAR PRODUK ===");

    produkToko.forEach(function(produk) {
        console.log(
            "ID: " + produk.id +
            " | Nama: " + produk.nama +
            " | Harga: Rp" + produk.harga.toLocaleString("id-ID") +
            " | Stok: " + produk.stok
        );
    });
}


// Menampilkan produk awal
tampilkanProduk();


// Menambahkan produk baru
tambahProduk("Monitor", 1500000, 8);


// Menampilkan produk setelah ditambahkan
tampilkanProduk();


// Menghapus produk dengan ID 2
hapusProduk(2);


// Menampilkan produk setelah dihapus
tampilkanProduk();
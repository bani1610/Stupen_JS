// Data Produk (minimal 5)
let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Headphone", harga: 750000 },
  { id: 4, nama: "Keyboard", harga: 450000 },
  { id: 5, nama: "Mouse", harga: 250000 }
];

// Menambahkan Produk dengan Spread Operator
function tambahProduk(id, nama, harga) {
  produkList = [...produkList, { id, nama, harga }];
}

// Menghapus Produk dengan Rest Parameter
function hapusProduk(...ids) {
  produkList = produkList.filter(produk => !ids.includes(produk.id));
}

// Menampilkan Produk dengan Destructuring
function tampilkanProduk() {
  console.log("=== Daftar Produk ===");
  produkList.forEach(({ id, nama, harga }) => {
    console.log(`${id}. ${nama} - Rp${harga.toLocaleString("id-ID")}`);
  });

  // tampil juga di halaman web
  const daftar = document.getElementById("daftarProduk");
  if (daftar) {
    daftar.innerHTML = produkList
      .map(({ id, nama, harga }) => `<li>${id}. ${nama} - Rp${harga.toLocaleString("id-ID")}</li>`)
      .join("");
  }
}

// Event Handler (nama bebas)
const eventHandler = {
  tambah() {
    const nama = document.getElementById("inputNama").value;
    const harga = Number(document.getElementById("inputHarga").value);
    const idBaru = produkList.length ? Math.max(...produkList.map(p => p.id)) + 1 : 1;
    tambahProduk(idBaru, nama, harga);
    tampilkanProduk();
  },
  hapus() {
    const id = Number(document.getElementById("inputId").value);
    hapusProduk(id);
    tampilkanProduk();
  },
  tampil() {
    tampilkanProduk();
  }
};

// Event Listener
document.getElementById("btnTambah").addEventListener("click", eventHandler.tambah);
document.getElementById("btnHapus").addEventListener("click", eventHandler.hapus);
document.getElementById("btnTampil").addEventListener("click", eventHandler.tampil);

tampilkanProduk();
tambahProduk(6, "Tablet", 7000000);
tampilkanProduk();
hapusProduk(2);
tampilkanProduk();
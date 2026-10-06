// controller.mjs
import users from './data.mjs';

// Melihat data (ditampilkan menggunakan map)
const index = () => {
  console.log('=== Daftar Users ===');
  const hasil = users.map(
    (user, i) =>
      `${i + 1}. ${user.nama} | ${user.umur} tahun | ${user.alamat} | ${user.email}`
  );
  hasil.forEach((baris) => console.log(baris));
  console.log(`Total: ${users.length} data\n`);
};

// Menambah data (push)
const store = (user) => {
  users.push(user);
  console.log(`Data "${user.nama}" berhasil ditambahkan.`);
};

// Menghapus data (data terakhir, atau berdasarkan index jika diberikan)
const destroy = (idx = users.length - 1) => {
  if (idx < 0 || idx >= users.length) {
    console.log('Data tidak ditemukan.');
    return;
  }
  const [dihapus] = users.splice(idx, 1);
  console.log(`Data "${dihapus.nama}" berhasil dihapus.`);
};

export { index, store, destroy };

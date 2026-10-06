// main.mjs
import { index, store, destroy } from './controller.mjs';

const main = () => {
  // tambah dua data

  index();    // lihat data awal`
  const user1 = { nama: 'doro', umur: 29, alamat: 'depok', email: 'doro@example.com' };
  const user2 = { nama: 'yono', umur: 26, alamat: 'bekasi', email: 'yono@example.com' };

  store(user1);
  store(user2);

  index();    // lihat data setelah ditambah
  destroy();  // hapus data terakhir
  index();    // lihat data setelah dihapus
};

main();

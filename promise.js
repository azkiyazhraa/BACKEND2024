/**
 * Membuat fungsi download
 * @returns {object} Promise
 */
// const download = () => {
//   /**
//    * Promise dibuat menggunakan class Promise.
//    * Promise menerima callback function/executor.
//    * Executor menerima 2 params: resolve dan reject.
//    * resolve dipanggil jika proses berhasil.
//    * reject dipanggil jika proses gagal.
//    */
//   return new Promise((resolve, reject) => {
//     const status = true;

//     setTimeout(() => {
//       if (status) {
//         resolve("Download Selesai");
//       } else {
//         reject("Download Gagal");
//       }
//     }, 5000);
//   });
// };

// /**
//  * .then menangkap hasil resolve
//  * .catch menangkap hasil reject
//  */
// download()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const berenang = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("berenang selesai");
    }, 6000);
  });
};

const bersepeda = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("bersepeda selesai");
    }, 2000);
  });
};

const berlari = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("berlari selesai");
    }, 2000);
  });
};

const triathlon = async () => {
  console.log(await berenang());
  console.log(await bersepeda());
  console.log(await berlari());
}

triathlon();
// Membuat class CarFull sebagai parent class
class CarFull {
    constructor(merek, tahunPembayaranPajak, mesin, harga) {
      // Properti yang dimiliki oleh setiap objek CarFull
      this.merek = merek; // Merek mobil
      this.tahunPembayaranPajak = tahunPembayaranPajak; // Tahun pembayaran pajak mobil
      this.mesin = mesin; // Kapasitas mesin mobil dalam cc
      this.harga = harga; // Harga mobil dalam rupiah
    }
  
    // Method untuk menghitung pajak mobil
    getPajak() {
      return this.harga * 0.025; // Pajak dihitung sebagai 2,5% dari harga mobil
    }
  }
  
  // Membuat class SuratKendaraan sebagai subclass (turunan) dari CarFull
  class SuratKendaraan extends CarFull {
    constructor(merek, tahunPembayaranPajak, mesin, harga) {
      // Memanggil constructor dari class CarFull menggunakan super()
      super(merek, tahunPembayaranPajak, mesin, harga);
    }
  }
  
  // Membuat objek dari class SuratKendaraan
  const myMobil = new SuratKendaraan("Toyota", 2016, 1500, 300000000);
  
  // Memanggil method getPajak() untuk menghitung pajak dari objek myMobil
  console.log(myMobil.getPajak()); // Output: 7500000
  
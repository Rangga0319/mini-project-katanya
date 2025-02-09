function beliMobil(gaji) {
    // Membuat objek mobil default yang dimiliki Agus
    let objectMobil = {
        Merek: "Toyota",
        Nama: "Rush",
        Mesin: 1500,
        Harga: 200000000,
        Tahun: 2023
    };
    
    // Jika gaji Agus mencapai 30 juta hingga kurang dari 50 juta
    if (gaji === 30000000) {
        // Agus membeli Toyota Ayla
        objectMobil = {
            Merek: "Toyota",
            Nama: "Ayla",
            Mesin: 1200,
            Harga: 150000000,
            Tahun: 2027
        };
    } else if (gaji === 50000000) { // Jika gaji Agus mencapai 50 juta
        // Agus membeli Toyota Fortuner
        objectMobil = {
            Merek: "Toyota",
            Nama: "Fortuner",
            Mesin: 2000,
            Harga: 500000000,
            Tahun: 2027
        };
    }
    
    // Menampilkan hasil mobil yang dimiliki atau dibeli Agus
    console.log(objectMobil);
}

const handPhone = {
    // Objek yang berisi data berbagai handphone dengan spesifikasinya
    a: {
      Processor: "Ex 2100",
      Type: "S21 Ultra",
      Variant: { RAM: 12, Internal: 256 },
      Tahun: 2021
    },
    b: {
      Processor: "SD 8 Gen 1",
      Type: "S22 Ultra",
      Variant: { RAM: 12, Internal: 256 },
      Tahun: 2022
    },
    c: {
      Processor: "SD 8 Gen 2 for Galaxy",
      Type: "S23 plus",
      Variant: { RAM: 8, Internal: 256 }, // RAM = 8GB
      Tahun: 2023
    },
    d: {
      Processor: "SD 8 Gen 2 for Galaxy",
      Type: "S23 Ultra",
      Variant: { RAM: 12, Internal: 256 },
      Tahun: 2023
    },
    e: {
      Processor: "SD 8 Gen 2 for Galaxy",
      Type: "S23 Lite",
      Variant: { RAM: 8, Internal: 128 }, // RAM = 8GB
      Tahun: 2023
    }
};

function getProcessorWithRAM8(handPhone) {
    const processors = []; 
    // Array kosong untuk menyimpan processor yang memiliki RAM 8GB

    for (const key in handPhone) { 
        // Cek setiap handphone satu per satu
        
        if (handPhone.hasOwnProperty(key)) { 
            // Memastikan properti benar-benar milik objek
        
            const phone = handPhone[key]; 
            // Mengambil data handphone berdasarkan key

            if (phone.Variant.RAM === 8) { 
                // Periksa apakah RAM handphone adalah 8GB
                
                processors.push(phone.Processor); 
                // Jika iya, tambahkan processor ke dalam array
            }
        }
    }
    return processors; 
    // Mengembalikan daftar processor dengan RAM 8GB
}

const processorsWithRAM8 = getProcessorWithRAM8(handPhone); 
// Memanggil fungsi dan menyimpan hasilnya ke dalam variabel

console.log("List Processor dengan RAM 8:", processorsWithRAM8); 
// Menampilkan hasil di console

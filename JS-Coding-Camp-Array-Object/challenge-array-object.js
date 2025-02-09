const handPhone = {
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
      Variant: { RAM: 8, Internal: 256 },
      Tahun: 2023
    },
    d: {
      Processor: "SD 8 Gen 2 for Galaxy",
      Type: "S23 Ultra",
      Variant: { RAM: 12, Internal: 256 },
      Tahun: 2023
    },
    // Tambahkan data handphone baru dengan RAM 8
    e: {
      Processor: "SD 8 Gen 2 for Galaxy",
      Type: "S23 Lite",
      Variant: { RAM: 8, Internal: 128 },
      Tahun: 2023
    }
  };
  
  function getProcessorWithRAM8(handPhone) {
    const processors = []; 
    // Array untuk menyimpan processor dengan RAM 8
    
    for (const key in handPhone) { 
      // Iterasi melalui properti objek handPhone
    
      if (handPhone.hasOwnProperty(key)) { 
        // Pastikan properti dimiliki oleh objek
    
        const phone = handPhone[key]; 
        // Ambil data handphone dari properti
    
        if (phone.Variant.RAM === 8) { 
          // Periksa apakah RAM handphone adalah 8
    
          processors.push(phone.Processor); 
          // Tambahkan processor ke array
    
        }
      }
    }
    return processors; 
    // Kembalikan array berisi processor dengan RAM 8
  }
  
  const processorsWithRAM8 = getProcessorWithRAM8(handPhone); 
  // Panggil fungsi
  
  console.log("List Processor dengan RAM 8:", processorsWithRAM8); 
  // Tampilkan hasil
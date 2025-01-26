import random
# import fungsinya memanggil,dan yang di panggil adalah library 
# library yang digunakan bernama random atau acak

kata_sambutan = "BELAJAR PYTHON"
# berikut adalah varibel yang memiliki nilai string yaitu "BELJAR PYTHON"

posisi_semangka = random.randint(1, 4)
# random.randint yaitu yang digunakan dari library ini adalah randint
# atau mengacak integer(bilangan bulat/number/angka)
# 1, 4 di atas menjelaskan bahwa program ini akan mengacak jawaban yang benar
# yaitu dari angka 1 sampai 4 entah dimana jawaban yang benarnya

print("***********************")
# perintah berikut akan menampilkan ****************

print(f"** {kata_sambutan} **")
# fungsi (f itu berfungsi untuk mengabungkan string
# dengan variabel yang di buat yang terletak di dalam string 

print("***********************")

nama_user = input("hallo nama kamu siapa ? ")
# variabel berikut menggunakan perintah input yaitu di gunakan 
# agar pengguna diminta untuk memasukan namanya
# CATATAN : semua perintah input akan di baca sebagai string

print(f''' hallo {nama_user}, coba tebak
      mana bakul yang berisi semangka 
      (_) (_) (_) (_) ''')
# berikut akan menampilkan string di atas beserta varibel yang berisi
# apa yang di input oleh pengguna di atas pengguna di minta memasukan nama 
# maka yang tampil nama pengguna
# menulis string umunya menggunakan tanda kutip "" tetapi dapat juga
# menggunakan tanda petik '''sebanyak 3 kali guna membuat string dapat di buat
# lebih bersih dan rapih jika kita menulis berbaris ke bawah 

pilihan_user = int(input("bakul nomor 1/2/3/4 jawabanmu.. "))
# berikut adalah variabel yang menggunakan input meminta pengguna 
# untuk memasukan angka, karena setiap input di baca string oleh sistem
# maka kita harus menulis int(input agar yang di input akan di baca integer
# oleh sistem karena int adalah singkatan dari integer

print(f"kalau pilihan kamu nomor.. {pilihan_user} ")
# menampilkan string serta angka berapa yang di input oleh user 

if pilihan_user == posisi_semangka:
    print(f'''Hebat! pilihan kamu benar,
          semangkanya ada di bakul nomor {pilihan_user}''')
# if itu di baca jika, berarti ini tertulis jika angka yang di masukan pengguna
# sama dengan, sama dengan untuk membandingkan dua variabel 
# di lambangkan dengan == bukan = 
# maka tampilkan string di atas serta nomor pilihan pengguna 

else:
    print("upsss salah coba lagi yuk")
# else di baca jika tidak maka yang di atas akan tampil jika pilihan pengguna
# bukan jawaban yang benar
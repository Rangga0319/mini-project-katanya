import random

kata_sambutan = "BELAJAR PYTHON"

posisi_semangka = random.randint(1, 4)

print("***********************")
print(f"** {kata_sambutan} **")
print("***********************")

nama_user = input("hallo nama kamu siapa ? ")

print(f''' hallo {nama_user}, coba tebak
      mana bakul yang berisi semangka 
      (_) (_) (_) (_) ''')

pilihan_user = int(input("bakul nomor 1/2/3/4 jawabanmu.. "))

print(f"kalau pilihan kamu nomor.. {pilihan_user} ")

if pilihan_user == posisi_semangka:
    print(f'''Hebat! pilihan kamu benar,
          semangkanya ada di bakul nomor {pilihan_user}''')

else:
    print("upsss salah coba lagi yuk")

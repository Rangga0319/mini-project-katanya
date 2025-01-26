import random

def acak_kata(sandi):
    huruf_list = list(sandi)
    
    random.shuffle(huruf_list)
    
    kata_acak = ''.join(huruf_list)
    return kata_acak
def acak_kata(sandi):

 def minta_kata():
    while True:
        sandi = input("Masukkan kata (minimal 10 huruf): ")
        if len(sandi) >= 10:
            return sandi
        else:
            print("Kata yang dimasukkan kurang dari 10 huruf. Coba lagi.")

sandi = minta_kata()
kata_acak = acak_kata(sandi)
print(f"Kata sandi untukmu: {kata_acak}")

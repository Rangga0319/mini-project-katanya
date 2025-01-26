// program ini akan menghitung luas lingkaran

#include <iostream>

using namespace std;

void luas_lingkaran(double pi, int jari1, int jari2){
double luas = pi * jari1 * jari2;
cout << "jadi luas lingkarannya adalah = " << luas << " cm²" << " jika jari-jarinya adalah " << jari1 << " cm" << endl;
}

int main(){

  double pi = 3.14;
  int jari1, jari2;

  cout << "masukan jari-jari pertama :" << endl;
  cin >> jari1;

  // karena rumus luas lingkaran adalah ( L = pi x r(jari-jari pangkat 2 )
  // untuk mempersingkat ( luas = pi x jari-jari x jari-jari ( jari pertama wajin sama dengan jari kedua ))

    cout << "masukan jari-jari kedua (angka yang harus sama dengan jari pertama) :" << endl;
    cin >> jari2;

  luas_lingkaran(pi, jari1, jari2);
  return 0;
  }



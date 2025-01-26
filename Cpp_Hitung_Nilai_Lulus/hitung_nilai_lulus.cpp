#include <iostream>

using namespace std;
int main (){

    string nama;
    cout << "masukan nama anda : " << endl;
    cin >> nama;

    int kelas;
    cout << "masukan kelas anda ( berupa angka saja, contoh : 71,81,91 dst )" << endl;
    cin >> kelas;
    cout << "halo " << nama << " kelas " << kelas << endl;

int nilai;
    cout << "masukan nilai anda : ";
    cin >> nilai;
    if (nilai >= 80) {
        cout << "selamat anda lulus :)";
    }
    else {
        cout << "maaf anda belum lulus";
    }
return 0;
}
// ------------------- COKLU IF KULLANMAK ----------------------

/*

Bir kullanicidan adini ve tc sini isteyecegiz

Ad : bos gecilemez
TCKN : 11 karakterden olussun

*/

let ad = prompt("Isminizi girniz : ");
let tckn = prompt("Tckn giriniz : ");

kontrolEt2(ad, tckn);

function kontrolEt() {
    if (ad != "") {
        if (tckn.length == 11) {
            console.log("Isim ve tckn sorunsuz girildi");
        } else {
            console.log("Lutfen Tcnizi 11 karakter olarak girin");
        }
    } else {
        console.log("Lütfen isim alaaninize bos birakmayin");
    }
}

function kontrolEt2(ad ,tckn) {
    if(ad == "") {
        console.log("Lutfen isminizi giriniz");
        return;
    }
    if(tckn.length != 11) {
        console.log("Tckn'niz 11 karakter olmali");
        return;
    }

    console.log("Devam edebilirsiniz");
}

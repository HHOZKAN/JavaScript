let urun1 = {
    isim: "ACER",
    ketegori: "Teknoloji",
    fiyat: 6000
}

let urun2 = {
    isim: "ACER 2",
    ketegori: "Teknoloji",
    fiyat: 15000
}

let urun3 = {
    isim: "ACER 3",
    ketegori: "Teknoloji",
    fiyat: 12000
}

let urun4 = {
    isim: "LENOVO 1",
    ketegori: "Teknoloji",
    fiyat: 12000
}

let urun5 = {
    isim: "LENOVO 2",
    ketegori: "Teknoloji",
    fiyat: 14000
}

let urun6 = {
    isim: "LENOVO 3",
    ketegori: "Teknoloji",
    fiyat: 16000
}

let urunler = [urun1, urun2, urun3, urun4, urun5, urun6];
let filtreliUrunler = [];
let kullaniciUrunIsmi = prompt("Bir ürün ismi giriniz : ");

filtreliUrunleriDoldur(urunler);
filtreliUrunleriYazdir(filtreliUrunler);

function filtreliUrunleriDoldur(urunler) {

    urunler.forEach(function (urun) {
        if (urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase, 0)) {
            filtreliUrunler.push(urun);
        }
    });

}

function filtreliUrunleriYazdir(urunler) {
    urunler.forEach(function (urun) {
        console.log("----------------------------------------------------------");
        console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori);
        console.log("----------------------------------------------------------");
    });
}
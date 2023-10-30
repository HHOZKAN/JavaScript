// // -------------------------------- BEDEN KITLE ENDEKSI

// let kilo = Number(prompt("Kilonuzu giriniz : "));
// let boy = Number(prompt("Boyunuzu girniniz : "));

// let kiloEndeksi = kilo / (boy * boy);

// if (kiloEndeksi < 18.5) {
//     console.log("Kilo Endeksiniz ideal kilonun altinda");

// } else if (kiloEndeksi > 18.5 && kiloEndeksi < 24.9) {
//     console.log(" Kilo Endeksiniz ideal kiloda");
// } else if (kiloEndeksi >= 25 && kiloEndeksi <= 29.9) 
// {
//     console.log("Ideal kilonun ustunde");
// }else if (kiloEndeksi >= 30 && kiloEndeksi < 40) {
//     console.log("Ideal kilonun cok ustunde");
// }else if (kiloEndeksi >= 40 ) {
//     console.log("morbid obez");
// }

//  BENZIN ISTASYONU

/*
    1- Dizel 22.75
    2- Benzin 20.50
    3- Lpg 15.40
    


    Gelen musteriden alacagimiz bilgiler;
    1- Yakit Tipi
    2- Yuklenecek yakit litresi
*/

let dizel = 22.75, benzin = 20.50, lpg = 15.40;
const yeniSatir = "\r\n"

const yakitMetni = "1-Dizel" + yeniSatir
    + "2-Benzin" + yeniSatir
    + "3-Lpg" + yeniSatir +
    "Yakit turunuzu seciniz";

let yakitTipi = prompt(yakitMetni);
let kacLitre = Number(prompt("Kac litre almak istiyorsunuz ? "))
let bakiye = Number(prompt("Bakiyeniz ? : "))

if (yakitTipi === "1" || yakitTipi === "2" || yakitTipi === "3") {

    let odenecektutar = dizel * kacLitre;

    if (odenecektutar <= bakiye) {
        bakiye -= odenecektutar;
        alert("Bakiyeniz yeterli islem tamamlandi" + yeniSatir
            + "Kalan Bakiye : " + (bakiye - odenecektutar));
    } else {
        alert("Bakiyeniz yeterli degil" + yeniSatir
            + "Ödenecek tutar : " + odenecektutar + yeniSatir
            + "Bakiye : " + bakiye
            + "Eksik tutar :  " + (bakiye));
    }


 else if (yakitTipi == "2") {
        let odenecektutar = benzin * kacLitre;
        if (odenecektutar < bakiye) {
            bakiye -= odenecektutar;

            alert("Bakiyeniz yeterli islem tamamlandi" + yeniSatir
                + "Kalan Bakiye : " + (bakiye - odenecektutar));

        } else {
            alert("Bakiyeniz yeterli degil" + yeniSatir
                + "Ödenecek tutar : " + odenecektutar + yeniSatir
                + "Bakiye : " + bakiye
                + "Eksik tutar :  " + (bakiye));
        }
    }

    else if (yakitTipi == "3") {
        let odenecektutar = dizel * kacLitre;
        if (odenecektutar <= bakiye) {
            bakiye -= odenecektutar;
            alert("Bakiyeniz yeterli islem tamamlandi" + yeniSatir
                + "Kalan Bakiye : " + (bakiye - odenecektutar));
        } else {
            alert("Bakiyeniz yeterli degil" + yeniSatir
                + "Ödenecek tutar : " + odenecektutar + yeniSatir
                + "Bakiye : " + bakiye
                + "Eksik tutar :  " + (bakiye));
        }
    }
}
else {
    console.log("Gecerli bir yakit tipi seciniz");
}

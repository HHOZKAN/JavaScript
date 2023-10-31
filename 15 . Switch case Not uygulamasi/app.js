/*

1- Bakiye görüntüleme
2 - Para cekme
3- Para Yatirma
4- Cikis

*/

let yeniSatir = "\r\n"
let bakiye = 1000;

let metin = "1- Bakiue görüntüleme" + yeniSatir
    + "2- Para cekme" + yeniSatir
    + "3- Para Yatirma" + yeniSatir
    + "4- Cikis" + yeniSatir
    + "Lutfen bir deger seciniz";

// alert(metin);

let secim = prompt(metin);

switch (secim) {
    case "1":
        alert("Bakiyeniz :" + bakiye);
        break;

    case "2":
        let cekilecekTutar = Number(prompt("Cekmek istediginiz miktari giriniz : "));
        if(cekilecekTutar<bakiye) {
            bakiye -= cekilecekTutar;
            alert("Cektiginiz miktar :" + cekilecekTutar + yeniSatir + "Kalan Bakiyeniz : " + bakiye);
        } else {
            alert("Bakiyeniz yeterli degil" + yeniSatir +
            "Bakiyeniz : " + bakiye + " " + "Cekmek istediginiz tutar : " + cekilecekTutar);
        }
        break;

        case "3" : 
        let yatirilacakMiktar = Number(prompt("Yatirilacak tutari giriniz : "));
        bakiye += yatirilacakMiktar;
        if(yatirilacakMiktar>0) {
            alert("Yatirdiginiz miktar : " + yatirilacakMiktar + yeniSatir + 
            "Mevcut bakiyeniz : " + bakiye)
        }
        break;

        case "4" : 
        alert("Sistemden cikis yapilmistir")
        break;

        default : 
        alert("Lütfen bir secenek seciniz")
}

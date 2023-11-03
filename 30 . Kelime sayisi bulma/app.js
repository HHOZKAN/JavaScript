// KELIME SAYISI BULMA

let metin = "Su anda Fransanin Saint Etienne sehrinde sacma sapan bir sekilde kodlama yapiyorum";

let harf = prompt("Bir harf seciniz");

let sonuc = bul(harf);
alert("Harf sayisi : " + sonuc);

function bul(harf) {
    let toplam = 0;

    for(let i=0; i<metin.length ; i++) {
        if(metin.charAt(i)===harf) {
            toplam = toplam + 1;
        }

    }
    return toplam;
}
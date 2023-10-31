// ASAL SAYI BULMA UYGULAMASI

/*

15 = 2, 3 ,4 ,5 ,6 ,7

*/

let sayi = Number(prompt("Lutfen bir sayi giriniz : "));
let sonuc = true;

for(let i=2; i<= Math.floor(sayi/2); i++) {
    if(sayi%i==0) {
        sonuc = false;
        break;
    }

}

if(sonuc) {
    alert(sayi + " asaldir");
} else {
   alert( sayi + " asal degildir");
}
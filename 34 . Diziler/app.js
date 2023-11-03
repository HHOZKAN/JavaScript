// --------------------- DIZILER (ARRAYS) --------------------



// let sayilar = [0,1,2,3,4,5,"Haci Hasan",7,8,9, "Ozkan"];

// console.log(sayilar[6], [10]);

// sayilar[10] ="Memo";

// console.log(sayilar[10]);


// let isimler = ["Haci", "Hasan", "Ozkan", "Messi"];

// console.log(isimler[isimler.length-4]);


// let karisikdizi = [1, "Enes", true, null, undefined];

// console.log(karisikdizi);


// FOREACH DÖNGÜSÜ

let isimler = ["Enes" , "Yakup", "Bilal", "Kubra", "Aysenut", "Adem"];

// for(let i = 0; i<isimler.length; i++) {
//     console.log(isimler[i]);
// }

// isimler.forEach(function(isim) {
//    console.log(isim); 
// });

let sayac = 0;

while(sayac<isimler.length) {
    console.log(isimler[sayac]);
    sayac++;
}

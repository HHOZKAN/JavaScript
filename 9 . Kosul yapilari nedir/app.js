// ----------------- KOSUL YAPILARI NEDIR ? -------------------

/*

if(kosul) {
     kodlar
}

else {
     kodlar
}

*/

// let not = 45;

// if(not>50) {
//      console.log("Notunuz :" + not);
// }

// else {
//      console.log("Beceriksiz, notunuz " + not);
// }

// let yas = Number(prompt('Yasinizi giriniz : '));
// console.log(typeof yas);
// let para = prompt ('Bankanizdaki para : ')

// if(yas >= 18 && para >= 3000) {
// console.log("Tebrikler");
// }
// else {
//      "Maalesef"
// }

// ------------------------- DERS ORTALAMASI BULMA ---------------------------

// vize1 %30, vize2 %30, vize3 %40

let vize1 = Number(prompt("Vize 1 notunuz : "));
let vize2 = Number(prompt("Vize 2 notunuz : "));


let final = Number(prompt("Final notunuzu girin : "));

let ortalama = vize1*0.3 + vize2*0.3 + final*0.4;

if(ortalama >= 60) {
     alert("Tebrikler dersten gectiniz notunuz :" + ortalama);
     console.log("Tebrikler dersten gectiniz");
}
else {
     alert("Kaldiniz, gecmis olsun... notunuz :" + ortalama)
     console.log("Kaldiniz, gecmis olsun...");
}

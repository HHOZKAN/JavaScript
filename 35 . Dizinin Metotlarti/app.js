// --------------------- DIZILER (ARRAYS) METOTLARI --------------------

/*

    push : dizinin sonuna eleman ekler, ayrica dizinin uzunlugunu döner
    unshift : dizinin basina eleman ekler, eleman sayisini geriye dôner
    pop : dizinin sonundan eleman siler, eleman sayisini return eder
    shift : dizinin basindan eleman siler, eleman sayisini return eder

    splice(index, index) : eleman eklemek ve silmek icin kullanilir

    toString :diziyi sringe cevririr
    join : diziyi stringe cevirir farki ise araya eleman ekleyebiliriz

    concat : dizileri birlestirmek icin kullanilir
    slice(dilimlemek) : diziyi istenilen yerden bölüp yeni bir dizi olusturur.
    length : dizinin uzunlugunu verir
    reverse : dizinin elemanlarini ters cevirir
    split(bölmek) : belirli bir ifadeyi gôre bolup diziye cevirmek.
    indexOf : elemanin index numarasini verir.
    includes : verilen elemani iceriyor mu ona bakar.

*/


let arabalar = ["bmw", "toyata", "renault", "merceddes", "porshe"];
// let arabalar2 = ["Hyundai", "Tofas", "Dogan"]


// ! PUSH METOT
// function push(){
//     // ? elindeki diziye value u ekliyor;
// }
// console.log(arabalar.length);

// let uzunluk = arabalar.push("Opel");

// console.log(uzunluk)

// ! UNSHIFT METOT
// arabalar.unshift("Hyundai");
// console.log(arabalar);

// ! POP METOT

// arabalar.pop();
// console.log(arabalar);

// ! SHIFT METOT

// let silinenAraba = arabalar.shift(arabalar);
// console.log(arabalar);
// console.log(silinenAraba);

// ! SPLICE METOT
// console.log(arabalar);
// arabalar.splice(2,0,"hyundai");
// console.log(arabalar);

// ! TOSTRING METOT

// console.log(arabalar);
// let stringArabalar = arabalar.toString();
// console.log(stringArabalar);

// ! JOIN METOT

// let stringArabalr = arabalar.join("");
// console.log(stringArabalr);

// ! CONCAT METOT (iki diziyi birlestirmek icin kullanilir)

// let birlesmisDizi = arabalar1.concat(arabalar2);
// console.log(birlesmisDizi);

// ! SLICE METOT (bir diziyi ayirmak ve yeni bir dizi döndürüyor)

// console.log(arabalar);
// let sliceArabalar = arabalar.slice(2);
// console.log(sliceArabalar);

//! LENGTH (dizinin uzunlugunu gosterir)

// console.log(arabalar.length);

// ! REVERSE (ayni dizinin ters cevirir)

// console.log(arabalar);
// let reverseArabalar = arabalar.reverse();
// console.log(reverseArabalar);

// ! SPLIT METOT 

// let hersey = "Hasan,Ozkan,Haci,Turc,25ans, :'(";

// let herseyArray = hersey.split(",");
// console.log(herseyArray);

// ! INDEX OF ()
// let araba = prompt("Bir araba markasi seciniz : ")
// let index = arabalar.indexOf(araba);
// if(index == 0) {
//     console.log("Eleman var");
// }else {
//     console.log("Eleman yok");
// }

// ! INCLUDES METHOD (boolean olarak geri donuyor eleman varsa veya yoksa)

// let sonuc = arabalar.includes("porshe");
// console.log(sonuc);
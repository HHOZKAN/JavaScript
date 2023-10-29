// ! Var Let Const

//  Degisken nedir ?

/*

var/let/cont 

degiskenismi = digeskenDegeri;

*/
/*
 ! var : function scope -- ram bellkete cok fazla yer kapliyor.
 ! let scope : block scope ozelligine sahiptir.
 ! const ayni let gibi bir block scope idir.
*/

// Const ve Let arasindaki fark ?

// Bir örnek yapalim :

// const a = 5;
// a = 15;

// ! Yukardaki islemde yaptigimiz 
// ! degiskende degisim yapma imkanimiz yok, kelimenin anlami gibi const a degeri degistirilemez.

// let b = 15;
// b= 20; 
// console.log(b);

// ! Let örneginde ise ne zaman istersek o zaman degistirme imkanimiz var.

function method1() {
  var selam =  "Selam Millet";
  if(true) {
    const b = 10;

  }

}

method1();

// Baska bir örnek daha yapalim const ile bir sekilde degistirme imkanimiz var.

const user = {
  username : "hasan",
  password :"123"
}


// bu objenin icini degistirme imkanimiz var :
// Direkmen tablonun icindeki bilgileri degistirirsek o zaman bit const'un bazi bilgilerini degistirme imkanimiz oluyor.

user.username = "Haci Hasan"

console.log(user);





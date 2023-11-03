// Mukemmel Sayi uygulamasi

// / 6   -    28   - 496

/*



*/

let sayi = Number(prompt("Sayi giriniz : "));

isPerfectNumber(sayi);

function isPerfectNumber(number) {
    let toplam = 0;

    for (let i=2; i<=number/2; i++) {
        if(number % i == 0) {
            toplam+=i;
        }
    }
    toplam+=1+number;

    if(toplam == 2*number){
        console.log("Mukemmel sayidir");
    } else {
        console.log("Mukemmel sayi degildir...")
    }
}

let a = 6%4;
console.log(a);

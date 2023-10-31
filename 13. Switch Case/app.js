
let sayi = prompt("Lütfen 1 ile 5 arasinda bir sayi giriniz");

switch(sayi) // "1" "2" "3" "4" "5" 
{
    case "1" : 
    console.log("Girilen sayi 1'dir");
    break;

    case "2" :
        console.log("Girilen sayi 2'dir ");
        break;

    case "3" :
        console.log("Girilen sayi 3'dir ");
        break;

    case "4" :
        console.log("Girilen sayi 4'dir ");
        break;

    case "5" :
        console.log("Girilen sayi 5'dir ");
        break;

        default :
        console.log("Girilen sayi 1 ile 5 arasinda olmalidir");
        break;
        
}
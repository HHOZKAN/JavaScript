// Entrainement developpement alogrithmie et fonctions

// Liste de livres a rechercher
// Il faut entrer dans la barre de recherche l'un des livres parmi la lsite suivante afin qu'il donne la rangé.


let book1 = { titre: "1984", ecrivain: "George Orwell", prix: 15, range: "1.5.RAN" };
let book2 = { titre: "NE TIREZ PAS SUR L'OISEAU MOQUEUR", ecrivain: "Harper Lee", prix: 25, range: "2.1.RAN" };
let book3 = { titre: "LE MEILLEUR DES MONDES", ecrivain: "Aldous Huxley", prix: 30, range: "3.3.RAN" };
let book4 = { titre: "LA VOLEUSE DE LIVRES", ecrivain: "Markus Zusak", prix: 40, range: "4.2.RAN" };
let book5 = { titre: "ORGUEIL ET PRÉJUGÉS ", ecrivain: "Jane Austen", prix: 50, range: "5.3.RAN" };

let livres = [book1, book2, book3, book4, book5];

let range11 = { cod: "1.1.RAN", show: false }
let range12 = { cod: "1.2.RAN", show: false }
let range13 = { cod: "1.3.RAN", show: false }
let range14 = { cod: "1.4.RAN", show: false }
let range15 = { cod: "1.5.RAN", show: false }

let range21 = { cod: "2.1.RAN", show: false }
let range22 = { cod: "2.2.RAN", show: false }
let range23 = { cod: "2.3.RAN", show: false }
let range24 = { cod: "2.4.RAN", show: false }
let range25 = { cod: "2.5.RAN", show: false }

let range31 = { cod: "3.1.RAN", show: false }
let range32 = { cod: "3.2.RAN", show: false }
let range33 = { cod: "3.3.RAN", show: false }
let range34 = { cod: "3.4.RAN", show: false }
let range35 = { cod: "3.5.RAN", show: false }

let range41 = { cod: "4.1.RAN", show: false }
let range42 = { cod: "4.2.RAN", show: false }
let range43 = { cod: "4.3.RAN", show: false }
let range44 = { cod: "4.4.RAN", show: false }
let range45 = { cod: "4.5.RAN", show: false }


let range51 = { cod: "5.1.RAN", show: false }
let range52 = { cod: "5.2.RAN", show: false }
let range53 = { cod: "5.3.RAN", show: false }
let range54 = { cod: "5.4.RAN", show: false }
let range55 = { cod: "5.5.RAN", show: false }


let range = [
    [range51, range52, range53, range54, range55],
    [range41, range42, range43, range44, range45],
    [range31, range32, range33, range34, range35],
    [range21, range22, range23, range24, range25],
    [range11, range12, range13, range14, range15]
];


// Crée des rangées dans le console log en parcourant mon tableau range
function createRange() {
    console.clear();
    let ligne = ""
    for (let i = 0; i < range.length; i++) {
        for (let j = 0; j < 5; j++) {
            ligne += "|" + (range[i][j].show ? range[i][j].cod : "---") + "";

        }
        console.log(ligne);
        console.log("--------------------")
        ligne = "";
    }
}

function findCod(bookName) {
    let codeRange = null;
    livres.forEach(function (livre) {
        if (livre.titre.toUpperCase().includes(bookName.toUpperCase(), 0)) {
           codeRange=livre.range;
        }
    });
    return codeRange;
}

function showInRange(codeRange) {
    for (let i = 0; i<range.length; i++) {
        for (let j = 0; j < 5; j++) {
            if (range[i][j].cod == codeRange) {
                range[i][j].show = true;
                break;
            }
        }
    }
}



createRange();


let bookName = prompt("Veuillez entrer le nom du livre que vous recherchez : ")
let codeRange = findCod(bookName);

if (codeRange != null) {
    showInRange(codeRange);
    createRange();
} else {
    alert("Le livre recherché n'est pas en stock")
}

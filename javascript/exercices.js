// CHALLENGE JAVASCRIPT 7 Nov 2020 


// EXERCICE #1

// const premiereValeur = 4;
// const deuxiemeValeur = 5;
// const valeurAddition = premiereValeur + deuxiemeValeur;
// console.log(valeurAddition);


// EXERCICE #2 

// const team = 'avengers';
// console.log(team.toUpperCase());


// EXERCICE #3 & #4

// const team = 'avengers';
// console.log(team[0])
// console.log(team.substring(1));


// EXERCICE #5

// const firstName = 'Tony';
// const lastName = 'Stark';
// console.log(firstName + ' ' + lastName);


// EXERCICE #6

// const team = 'aveNgers';
// console.log(team[0].toUpperCase() + team.substring(1).toLowerCase());


// EXERCICE #7

// const villes = ["Marseille", "Perpignan", "Lyon", "Strasbourg", "Nantes"];
// console.log(villes[3]);
// villes.splice(1, 0, "Toulon");
// villes.splice(2, 1);
// console.log(villes[3]);


// EXERCICE #8

// const array1 = [2, 4, 8]
// array1.forEach(number => {
//     console.log(number ** 2);
// })


// EXERCICE #9

// const promo = [12, 13, 17, 3, 14, 18];
// let somme = 0;

// for(i = 0; i<promo.length; i++) {
//     somme += promo[i];
// }
// console.log(`La moyenne de la classe est ${somme / 6}`)

// EXERCICE #10

// let age = 33;

// if (age >= 10) {
//     console.log("Je peux voter !")
// } else {
//     console.log("Je ne peux pas voter...")
// }


// EXERCICE #11

// let today = new Date();
// console.log("Date d'aujourd'hui : " + today.toString());

// if (today.getHours() >= 5 && today.getHours() <=17) {
//     console.log("Bonjour");
// } else {
//     console.log("Bonsoir")
// }


// ===== FONCTIONS =====

// EXERCICE #12

// let numero1 = 3;
// let numero2 = 4;

// const add = (num1, num2) => {
//     let somme = num1 + num2;
//     console.log(`La somme de ces deux nombres est égale à ${somme}`)
// }

// add(numero1, numero2);


// EXERCICE #13

// const square = (number) => {
//     i = number ** 2;
//     console.log(`Le carré de ${number} est égal à ${i}`)
// }
// square(8);


// EXERCICE #14

// const beatles = ["paul", "john", "ringo", "george"];
// const mapTest = beatles.map(x => x.toUpperCase());

// console.log(beatles);
// console.log(mapTest);


// EXERCICE #15

// const tab = [-2, 3, 4];

// const soustrait = (tableau) => {
//     let somme = 0;
//     for (i = 1; i < tableau.length ; i++) {
//         somme -= tableau[i-1];
//     }
//     console.log(somme);
// }

// soustrait(tab);


// EXERCICE #16

// const array1 = [-2, 4, -5, 3, 6];

// const addPositiveNumber = tableau => {
//     let somme = 0;
//     tableau.forEach(element => {
//         if (element > 0) {
//             somme += element;
//         }
//     });
//     console.log(somme)
// }

// addPositiveNumber(array1);


// EXERCICE #17

// const rayon = 5;
// const perimetreCercle = (r) => {
//     const perimetre = 2 * Math.PI * (r) ;
//     console.log(perimetre)
// }

// perimetreCercle(rayon);


// EXERCICE #18

// let mot = 'SimPloN';

// const capitalize = (word) => {
//     word = word[0].toUpperCase() + word.substring(1).toLowerCase();
//     console.log(word);
// }

// capitalize(mot);


// EXERCICE #19

// const nombre = 20;
// const numberAnalysis = (number) => {
//     if(number % 2 == 0) {
//         console.log('C\'est un chiffre pair');
//     } else {
//         console.log ('C\'est un chiffre impair')
//     }
// }

// numberAnalysis(nombre);


// EXERCICE #20

// const phrase = 'Javascript is fun';

// const reverseWord = (chaîne) => {
//     let newChain = chaîne.split(' ');
//     let reversedChain = newChain.reverse().join(' ');
//     console.log(reversedChain);
// };

// reverseWord(phrase);


// EXERCICE #21

// const nombres = ["3", "5", "6", "2"];

// const addition = (array) => {
//     let somme = 0;
//     for (i = 0; i < array.length; i++) {
//         somme += parseInt(array[i]);
//     }
//     console.log(`Le résultat de l'addition des nombres de ce tableau est égal à ${somme}`)
// }

// addition(nombres);

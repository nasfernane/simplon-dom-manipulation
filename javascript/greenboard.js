function exerciceOne() {
    document.getElementById("output").innerHTML = `const premiereValeur = 4;<br/>
    const deuxiemeValeur = 5;<br/>
    // on déclare les deux constantes <br/>
    const valeurAddition = premiereValeur + deuxiemeValeur;<br/>
    //on déclare une troisième constante qui additionne la valeur des deux premières, avant de l'afficher <br/>
    console.log(valeurAddition);`
}

function exerciceTwo() {
    document.getElementById("output").innerHTML = `
    const team = 'avengers';<br/>
    // on intialise la constante<br/>
    console.log(team.toUpperCase());<br/>
    // on affiche dans la valeur de la constante en majuscules dans la console `
}

function exerciceThree() {
    document.getElementById("output").innerHTML = `const team = 'avengers';<br/>
    console.log(team[0])`
}


function exerciceFour() {
    document.getElementById("output").innerHTML = `const team = 'avengers';<br/>
    console.log(team.substring(1));`
}


function exerciceFive() {
    document.getElementById("output").innerHTML = `const firstName = 'Tony';<br/>
    const lastName = 'Stark';<br/>
    console.log(firstName + ' ' + lastName);`
}


function exercice6() {
    document.getElementById("output").innerHTML = `const team = 'aveNgers';
    console.log(team[0].toUpperCase() + team.substring(1).toLowerCase());`
}


function exercice7() {
    document.getElementById("output").innerHTML = `
    const villes = ["Marseille", "Perpignan", "Lyon", "Strasbourg", "Nantes"];<br/>
    // on affiche l'index 3 donc quatrième valeur du tableau<br/>
    console.log(villes[3]);<br/>
    villes.splice(1, 0, "Toulon");<br/>
    villes.splice(2, 1);<br/>
    console.log(villes[3]);`
}


function exercice8() {
    document.getElementById("output").innerHTML = `
    const array1 = [2, 4, 8]<br/>
    array1.forEach(number => {<br/>
    console.log(number ** 2);<br/>
    })`
}


function exercice9() {
    document.getElementById("output").innerHTML = 
    `const promo = [12, 13, 17, 3, 14, 18];<br/>
    let somme = 0;<br/>
    for(i = 0; i<promo.length; i++) {<br/>
    somme += promo[i];<br/>
    }<br/>
    console.log("La moyenne de la classe est " + (somme / 6))
    `
}


function exercice10() {
    document.getElementById("output").innerHTML = `
    let age = 33;<br/>
    if (age >= 10) {<br/>
    console.log("Je peux voter !")<br/>
    } else {<br/>
    console.log("Je ne peux pas voter...")
    }`
}


function exercice11() {
    document.getElementById("output").innerHTML = `
    let today = new Date();<br/>
    console.log("Date d'aujourd'hui : " + today.toString());<br/>
    
    if (today.getHours() >= 5 && today.getHours() <=17) {<br/>
    console.log("Bonjour");<br/>
    } else {<br/>
    console.log("Bonsoir")<br/>
    }`
}


function exercice12() {
    document.getElementById("output").innerHTML = `
    let numero1 = 3;<br/>
    let numero2 = 4;<br/>
    
    const add = (num1, num2) => {<br/>
    let somme = num1 + num2;<br/>
    console.log("La somme de ces deux nombres est égale à " + somme")
    // }`
}


function exercice13() {
    document.getElementById("output").innerHTML = `
    const square = (number) => {<br/>
    i = number ** 2;<br/>
    console.log("Le carré de " + number + " est égal à " + i")<br/>
    }<br/>
    square(8);`
}


function exercice14() {
    document.getElementById("output").innerHTML = `
    const beatles = ["paul", "john", "ringo", "george"];<br/>
    const mapTest = beatles.map(x => x.toUpperCase());<br/>
    
    console.log(beatles);<br/>
    console.log(mapTest);`
}


function exercice15() {
    document.getElementById("output").innerHTML = `
    const tab = [-2, 3, 4];<br/>

    const soustrait = (tableau) => {<br/>
    let somme = 0;<br/>
    for (i = 1; i < tableau.length ; i++) {<br/>
        somme -= tableau[i-1];<br/>
    }<br/>
    console.log(somme);<br/>
    }<br/>
    soustrait(tab);`
}


function exercice16() {
    document.getElementById("output").innerHTML = `
    const array1 = [-2, 4, -5, 3, 6];<br/>

    const addPositiveNumber = tableau => {<br/>
    let somme = 0;<br/>
    tableau.forEach(element => {<br/>
    if (element > 0) {<br/>
    somme += element;<br/>
    }<br/>
    });<br/>
    console.log(somme)<br/>
    }<br/>
    addPositiveNumber(array1);`
}


function exercice17() {
    document.getElementById("output").innerHTML = `
    let rayon = 5;<br/>
    let perimetreCercle = (r) => {<br/>
    let perimetre = 2 * Math.PI * (r);<br/>
    console.log(perimetre)<br/>
    }<br/>
    perimetreCercle(rayon);`
}

function exercice18() {
    document.getElementById("output").innerHTML = `
    let mot = 'SimPloN';<br/>

    const capitalize = (word) => {<br/>
    word = word[0].toUpperCase() + word.substring(1).toLowerCase();<br/>
    console.log(word);<br/>
    }
    
    capitalize(mot);`
}

function exercice19() {
    document.getElementById("output").innerHTML = `
    const nombre = 20;<br/>
    const numberAnalysis = (number) => {<br/>
    if(number % 2 == 0) {<br/>
    console.log('C\'est un chiffre pair');<br/>
    } else {<br/>
    console.log ('C\'est un chiffre impair')<br/>
    }<br/>
    }<br/>
    
    numberAnalysis(nombre);`
}

function exercice20() {
    document.getElementById("output").innerHTML = `
    const phrase = 'Javascript is fun';<br/>

    const reverseWord = (chaîne) => {<br/>
    let newChain = chaîne.split(' ');<br/>
    let reversedChain = newChain.reverse().join(' ');<br/>
    console.log(reversedChain);<br/>
    };<br/>

    reverseWord(phrase);`
}

function exercice21() {
    document.getElementById("output").innerHTML = `
    const nombres = ["3", "5", "6", "2"];<br/>

    const addition = (array) => {<br/>
    let somme = 0;<br/>
    for (i = 0; i < array.length; i++) {<br/>
    somme += parseInt(array[i]);<br/>
    }<br/>
    console.log("Le résultat de l'addition des nombres de ce tableau est égal à " + somme)<br/>
    }<br/>

    addition(nombres);`
}


  
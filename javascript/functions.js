
// EXERCICE #17
function perimeter() {
    // on stocke la valeur du rayon placée dans l'input
    let inputVal = document.getElementById("valeurRayon").value;
    // on vérifie que la valeur est un nombre
    if(!isNaN(inputVal)) {
        // on applique la formule de calcul du périmètre 2(PI)R
        let perimeterResult = 2 * Math.PI * inputVal;
        // on affiche le résultat
        document.getElementById("perimeter").innerHTML = `Résultat : ${perimeterResult}`;
    } else {
        // si la valeur n'est pas un nombre, on encourage l'utilisateur à changer sa valeur
        document.getElementById("perimeter").innerHTML = `Tu devrais essayer avec un nombre, juste pour voir...`;
    }
}



// EXERCICE #18
function capitalize() {
    // on stocke la chaîne de caractères initiale placée dans l'input
    let inputVal = document.getElementById("messyWord").value;
    // on vérifie que la valeur n'est pas un nombre
    if(isNaN(inputVal)) {
        // on affiche la chaîne de caractères en mettant sa première lettre en majuscules à laquelle on concatène les caractères suivants en minuscules
        let betterShapedWord = inputVal[0].toUpperCase() + inputVal.substring(1).toLowerCase();
        document.getElementById("newWord").innerHTML = betterShapedWord;
    } else {
        // si la valeur est un nombre, on encourage l'utilisateur à utiliser une chaîne de caractères
        document.getElementById("newWord").innerHTML = `Tu devrais essayer avec un mot, juste pour voir...`;
    }
}




// EXERCICE #19 
function numberAnalysis() {
    // on stocke la valeur rentrée dans l'input
    let inputVal = document.getElementById("numberAnalysisInput").value;
    // on transforme cette valeur en nombre flottant dans une autre valeur
    let parsedVal = parseFloat(inputVal, 10);
    console.log(parsedVal);
    // on vérifie que la valeur est un nombre, entier, et qu'il est pair en renvoyant le résultat de son modulo par 2
    if(!isNaN(parsedVal) && Number.isInteger(parsedVal) && parsedVal % 2 == 0) {
    // si c'est un nombre entier pair, on affiche l'analyse dans le paragraphe en dessous avec l'id #analysedNumber
     document.getElementById("analysedNumber").innerHTML = `C'est un nombre pair`
     // sinon, on vérifie si la valeur est un nombre entier impair
    } else if(!isNaN(parsedVal) && parsedVal % 2 > 0 && Number.isInteger(parsedVal)){
        document.getElementById("analysedNumber").innerHTML = `C'est un nombre impair`
        // sinon, on vérifie si la valeur est un nombre décimal 
    } else if(!isNaN(parsedVal) && !Number.isInteger(parsedVal)) {
        document.getElementById("analysedNumber").innerHTML = `Le nombre utilisé doit être entier`
    }

}

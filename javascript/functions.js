function perimeter() {
    let inputVal = document.getElementById("valeurRayon").value;
    if(!isNaN(inputVal)) {
        let perimeterResult = 2 * Math.PI * inputVal;
        document.getElementById("perimeter").innerHTML = `Résultat : ${perimeterResult}`;
    } else {
        document.getElementById("perimeter").innerHTML = `Tu devrais essayer avec un nombre, juste pour voir...`;
    }
}



function capitalize() {
    let inputVal = document.getElementById("messyWord").value;
    if(isNaN(inputVal)) {
        let betterShapedWord = inputVal[0].toUpperCase() + inputVal.substring(1).toLowerCase();
        document.getElementById("newWord").innerHTML = betterShapedWord;
    } else {
        document.getElementById("newWord").innerHTML = `Tu devrais essayer avec un mot, juste pour voir...`;
    }
}


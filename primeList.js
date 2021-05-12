let submit = document.getElementById('submitPrimeList');
document.getElementById('primeListInput').value = null;

let isPrime = function(valeur) {
    let estPremier = true;
    valeur = Number(valeur);
    if (valeur === 1){
        estPremier = false;
    }else if(valeur !== 2){
        for (let i = 2; i <= Math.sqrt(valeur); i++) {
            if (valeur % i === 0) {
                estPremier = false
            }
        }
    }
    return estPremier;
}

submit.addEventListener('click',function (){
    let reponse = document.getElementById('primeListAnswer');
    let valeur = Number(document.getElementById('primeListInput').value);
    let strValue = "";
    for(let i = 2; i <= valeur; i++){
        if(isPrime(i) === true){
            strValue += i + " ";

        }
    }
    reponse.innerHTML = "<p class=\"answer\" id=\"answerp\">Réponse:<br><br>" + strValue + "</p>"
});
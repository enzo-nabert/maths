let submit = document.getElementById('submitPrime');
document.getElementById('primeInput').value = null;

let isPrime = function(valeur) {
    let estPremier = true;
    valeur = Number(valeur);
    if (valeur === 1){
        estPremier = false;
    }else if(valeur !== 2){
        for (let i = 2; i <= Math.sqrt(valeur); i++) {
            if (valeur % i === 0) {
                estPremier = false;
            }
        }
    }
    return estPremier;
}
let getDiviseurs = function(number){
    let liste = [1,number];
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            liste.push(i);

            if (number / i !== i) {
                liste.push(number / i);
            }
        }
    }
    liste.sort(equals);
    return liste;
}

let equals = function (a,b){
    if (a < b){
        return -1;
    }else if (a > b){
        return 1;
    }else{
        return 0;
    }
}

let afficherDiviseurs = function (liste){
    let diviseurp = document.getElementById("diviseurs");
    diviseurp.innerHTML = "Diviseurs:<br><br>";
    for (let i = 0; i < liste.length; i++) {
        diviseurp.innerHTML += liste[i] + " ";
    }
}
submit.addEventListener('click',function (){
    let reponse;
    let number = document.getElementById('primeInput').value;
    if (isNaN(number)){
        window.location.href = "Prime.html";
        alert( number + " n'est pas un nombre");
    }else{
        if (document.getElementById('yesNo')) {
            reponse = document.getElementById('yesNo');
        } else if (document.getElementById('yes')) {
            reponse = document.getElementById('yes');
        } else if (document.getElementById('no')) {
            reponse = document.getElementById('no');
        }
    }
    if (number < 0){
        window.location.href = "Prime.html";
        alert("Nombres négatifs pas encore disponibles");
    }else if(number === "404"){
        window.location.href = "404.html";
    }
    else if (number === "0") {
        reponse.innerHTML = "NON";
        reponse.id = "no";
    }else if(number === "1"){
        reponse.innerHTML = "NON";
        reponse.id = "no";
        afficherDiviseurs([1])
    }else if (isPrime(number)){
        reponse.innerHTML = "OUI";
        reponse.id="yes";
        afficherDiviseurs([1,number]);
    }else{
        let liste = getDiviseurs(number);
        reponse.innerHTML = "NON";
        reponse.id="no";
        afficherDiviseurs(liste);
    }
});

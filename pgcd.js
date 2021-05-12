let submit = document.getElementById('submitPgcd');
document.getElementById('pgcdInput1').value = null;
document.getElementById('pgcdInput2').value = null;

let getPGCD = function (nb1,nb2) {
    let pgcd;
    let inf;
    if (nb1 <= nb2){
        inf = nb1;
    }else{
        inf = nb2;
    }
    for(let i = 2; i<= inf; i++){
        if (nb1%i === 0 && nb2%i === 0){
            pgcd = i;
        }
    }
    return pgcd;
}

submit.addEventListener('click',function () {
    let nb1,nb2,pgcd,strPgcd;
    let reponse = document.getElementById('answerPgcd');
    nb1 = Number(document.getElementById('pgcdInput1').value);
    nb2 = Number(document.getElementById('pgcdInput2').value);
    pgcd = getPGCD(nb1,nb2);
    if(pgcd){
        strPgcd = pgcd;
    }else{
        strPgcd = "Nombres premiers entre eux";
    }
    reponse.innerHTML = "<p class=\"answer\" id=\"answerPgcd\">Réponse: " + strPgcd + "</p>"
})
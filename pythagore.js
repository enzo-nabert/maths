let submit = document.getElementById('submitPythagore');
let iBase = document.getElementById("IBase");
let iHauteur = document.getElementById("IHauteur");
let iHypothenuse = document.getElementById("IHypothenuse");
let answer = document.getElementById("answerPythagore");
iBase.value = "";
iHauteur.value = "";
iHypothenuse.value = "";
answer.innerHTML = "Réponse:<br><br>";

let calculer = function (valeur1,valeur2,mode){
    switch (mode){
        case 1: return Math.sqrt(Math.pow(valeur1,2) + Math.pow(valeur2,2));
        case 2: return Math.sqrt(Math.pow(valeur1,2) - Math.pow(valeur2,2));
    }
}

let verify = function (b,ha,hy){
    let produit = Math.pow(b,2) + Math.pow(ha,2)
    let sqHyp = Math.pow(hy,2);
    return produit === sqHyp;
}

let error = function (){
    answer.innerHTML += "Manque de valeur !";
}

submit.addEventListener("click",function (){
    let base = iBase.value;
    let hauteur = iHauteur.value;
    let hypothenuse = iHypothenuse.value;
    let reponse;

    if (base !== ""){
        console.log("base !null");
        if (hauteur !== ""){
            console.log("hauteur !null");
            if (hypothenuse !== ""){
                console.log("hyp !null");
                console.log("verify");
                if (verify(base,hauteur,hypothenuse)){
                    reponse = "Triangle Rectangle";
                    if (base === hauteur){
                        reponse += " Isocèle";
                    }

                }else{
                    reponse = "Triangle non Rectangle -> ";
                    if (base === hauteur && base === hypothenuse && hauteur === hypothenuse){
                        reponse += "Triangle Équilatéral";
                    }else if (base === hauteur || base === hypothenuse || hauteur === hypothenuse){
                        reponse += "Triangle Isocèle";
                    }

                }
            }else{
                console.log("calcul hyp");
                let hy = calculer(base,hauteur,1);
                reponse = "Hypothénuse : " + hy;
            }
        }else if (hypothenuse !== ""){
            console.log("calcul hauteur");
            let ha = calculer(hypothenuse,base,2);
            reponse = "Hauteur : " + ha;
        }else{
            console.log("error");
            error();
        }
    }else if (hauteur !== "" && hypothenuse !== ""){
        console.log("calcul base");
        let ba = calculer(hypothenuse,hauteur,2);
        reponse = "Base : " + ba;
    }else{
        console.log("error");
        error();
    }
    iBase.value = "";
    iHauteur.value = "";
    iHypothenuse.value = "";
    answer.innerHTML = "Réponse:<br><br>";
    answer.innerHTML += reponse;
});
let message = document.getElementById('message');
let formulaire = document.getElementById('champ');
let btn_envoyer = document.getElementById('btn_put');
let btn_restart = document.getElementById('btn_restart');
let form = document.getElementById('form');

// pour générer aléatoirement un nombre entre 1 et 100
const nbr_secret = Math.floor(Math.random()*100) + 1; 
let nbr_tenetative = 0;

btn_envoyer.onclick = function () {
    var p = document.createElement("p"); 

    // vérifie si les nombres saisi sont des entiers comprisent entre 1 et 100
    if(formulaire.value > 100 || formulaire.value < 0 ){
        p.innerText = "Veuillez saisir un nombre entier entre 1 et 100";
        message.appendChild(p);
        p.style.color = "gray";
        formulaire.value = "";
        form.style.display = "none";
        btn_restart.style.display = "flex";
        return;
    }
    
    // verifier si le champs est vide 
    if(formulaire.value != ""){

        if(formulaire.value > nbr_secret){
            p.innerText = 'Le nombre est plus petit que ' + formulaire.value + '.';
            message.appendChild(p);
            p.style.color = "gray";
            formulaire.value = "";
            nbr_tenetative += 1;
        }
        else if (formulaire.value < nbr_secret) {
            p.innerText = 'Le nombre est plus grand que ' + formulaire.value + '.';
             message.appendChild(p);
            p.style.color = "gray";
            formulaire.value = "";
            nbr_tenetative += 1;
        } else {
            p.innerText = 'Félicitation le nombre est ' + formulaire.value + '!';
             message.appendChild(p);
            p.style.color = "green";
            form.style.display = "none";
            btn_restart.style.display = "flex";
        }

        if(nbr_tenetative === 5){
            p.innerText = 'Game over,il fallait trouver '+ nbr_secret + '!';
            message.appendChild(p);
            p.style.color = "red";
            form.style.display = "none";
            btn_restart.style.display = "flex";
        }
    }else{
       p.innerText = "Le champ est vide!"
       message.appendChild(p);
       p.style.color = "red";
       form.style.display = "none";
       btn_restart.style.display = "flex";
    }
}
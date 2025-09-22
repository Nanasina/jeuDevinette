let message = document.getElementById('message');
let formulaire = document.getElementById('champ');
let btn_envoyer = document.getElementById('btn_put');

// pour générer aléatoirement un nombre entre 1 et 100
const nbr_secret = Math.floor(Math.random()*100) + 1; 
let nbr_tenetative = 0;

btn_envoyer.onclick = function () {
    var p = document.createElement("p"); 
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
            nbr_tenetative += 1;
        }

        if(nbr_tenetative === 5){
            p.innerText = "Game over!"
            message.appendChild(p);
            p.style.color = "red";
        }
    }else{
       p.innerText = "Le champ est vide!"
       message.appendChild(p);
       p.style.color = "red";
    }
}
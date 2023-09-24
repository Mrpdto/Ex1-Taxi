"use strict";

// On fait le tableau des musiques
let musique = ["Anissa-Wejdene","Imagine-John Lennon","Bohemian Rhapsody-Queen","Billie Jean-Michael Jackson","Like a Rolling Stone-Bob Dylan"]


//On fait une classe pour rentrer notre prénom, une santée mentale
//On ajoute un compteur de feux rouge, de changements et on rentre musiqueChoisie pour que la variable musique soit pris en compte dans la classe
class Personnage{
    constructor(prenom,santeMentale,musiqeChoisie){
        this.prenom = prenom
        this.santeMentale = santeMentale
        this.musiqeChoisie = musiqeChoisie
        this.feuxRouges = 30;
        this.changements = 0;
        
        
    }

    radio(){
        let musiqeNombre = Math.floor(Math.random() * 5) + 1; //On prend un chiffre aléatoire entre 1 et 5 pour avoir une musique aléatoire parmis les 5 mises dans le tableau musique
        
        switch (musiqeNombre){  
            case 1:
                this.musiqeChoisie = musique[0];
                break;
            case 2:
                this.musiqeChoisie = musique[1];
                break;
            case 3:
                this.musiqeChoisie = musique[2];
                break;
            case 4:
                this.musiqeChoisie = musique[3];
                break;
            case 5:
                this.musiqeChoisie = musique[4];
                break;
        }

        if (this.musiqeChoisie == "Anissa-Wejdene"){ //Si la musique prise aléatoirement est anissa de wejdene on enlève un point de santé, un feu et on ajoute un changement
            this.santeMentale--;
            this.changements++;
            this.feuxRouges--;
        }
        else {
            this.feuxRouges--; //Ici on enlève qu'un point au compteur du feu rouge
        }
    }
}

let trajet = new Personnage("Martin",10); //On crée une varable trajet avec notre classe en ajoutant un prénom et une santé mentale

while (trajet.santeMentale > 0 && trajet.feuxRouges > 0 ){  //Tant que la santée mentale est supérieur à 0 et qu'il reste des feu avant l'arrivé on reproduit le code radio
    let actu = trajet.radio();
    console.log("La musique jouee est:", trajet.musiqeChoisie,"et le nombre de feu restant est de", trajet.feuxRouges); // on affiche dans la console
}

if (trajet.santeMentale <=0){ //Si la santée mentale tombe à 0 on affiche explosion
    console.log("explosion")
}
else { //Sinon on affiche les statistiques finales car si la ligne si dessous est lue c'est que le compteur de feu rouge est égale à 0
    console.log(trajet.prenom,"est bien arrivé avec", trajet.changements,"Changements de taxi et",trajet.santeMentale, "de vie");
}


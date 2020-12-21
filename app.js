let Personne = function (nom, prenom,job,lieudeJob) {

    this.nom = nom;
    this.prenom = prenom;
    this.job = job;
    this.city = lieudeJob;

    this.getPersonne = function () {
        return "la personne est " + this.nom + " " + this.prenom + " et est un "  + this.job + " travaille en " + this.city;
    }

    this.setChange = function (newNom, newPrenom) {
        this.nom = newNom;
        this.prenom = newPrenom;
    }

}

// création des 2 persos
let chan = new Personne('Chan', 'Jacky','acteur,réalisateur, chanteur', 'Chine');
let paul = new Personne('Bocuse', 'Paul','cuisinier', 'France');

document.getElementById('propriete1').innerHTML = chan.nom;
document.getElementById('propriete2').innerHTML = chan.prenom;
document.getElementById('propriete3').innerHTML = chan.job;

document.getElementById('propPerso2').innerHTML = paul.nom;
document.getElementById('deux').innerHTML = paul.prenom;
document.getElementById('trois').innerHTML = paul.job;

document.getElementById('method1').innerHTML = chan.getPersonne();
chan.setChange("John", "Doe");
document.getElementById('method2').innerHTML = chan.getPersonne();

document.getElementById('method').innerHTML = paul.getPersonne();
paul.setChange("Père", "Noël");
document.getElementById('methode').innerHTML = paul.getPersonne();




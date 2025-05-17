// header.js
document.addEventListener("DOMContentLoaded", function() {
    fetch("../includes/header.html") // Charge le fichier footer
        .then(response => response.text()) // Convertit en texte
        .then(data => {
            document.getElementById("header-container").innerHTML = data; // Injecte le contenu dans la div cible
        })
        .catch(error => console.error("Erreur lors du chargement du header :", error));
});

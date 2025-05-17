document.addEventListener("DOMContentLoaded", function() {
    fetch("../includes/footer.html") // Charge le fichier footer
        .then(response => response.text()) // Convertit en texte
        .then(data => {
            document.getElementById("footer-container").innerHTML = data; // Injecte le contenu dans la div cible
        })
        .catch(error => console.error("Erreur lors du chargement du footer :", error));
});

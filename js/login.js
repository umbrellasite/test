document.addEventListener('DOMContentLoaded', () => {
// Fenêtre modal 
    const seConnecter = document.getElementById('seConnecter');
    const fond = document.getElementById('fond');
  
    const liste = document.getElementById('liste');
    const lista = document.getElementById('lista');
    const modalConnexion = document.getElementById('modalConnexion');
    const modalInscription = document.getElementById('modalInscription');
    const connexion = document.getElementById('connexion');
    const inscription = document.getElementById('inscription');
 

    seConnecter.addEventListener('click', () => {
        fond.classList.toggle('affiche');
        modalConnexion.classList.toggle('affiche');
    });
    inscription.addEventListener('click', () => {
        modalConnexion.classList.toggle('affiche');
        modalInscription.classList.toggle('affiche');
    });
    connexion.addEventListener('click', () => { 
        modalConnexion.classList.toggle('affiche');
        modalInscription.classList.toggle('affiche');
    });


    window.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            fond.classList.toggle('affiche');
        }
    });
    liste.addEventListener('change', () => {
        changeImage();
    });
    lista.addEventListener('change', () => {
        changeImage();
    });


// Fonction pour changer background
    const changeImage = () => {
        const choix1 = liste.value;
        if (choix1 === "Etudiant") {    
            modalConnexion.style.backgroundImage = "url('../img/formation/hero.gif')"
        } else {
            modalConnexion.style.backgroundImage = "url('../img/formation/aPropos.gif')" 
        }
        const choix2 = lista.value;
        if (choix2 === "Etudiant") {
            modalInscription.style.backgroundImage = "url('../img/formation/hero.gif')"
        } else {
            modalInscription.style.backgroundImage = "url('../img/formation/aPropos.gif')" 
        }
    };
});
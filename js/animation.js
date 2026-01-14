// On attend que le DOM soit bien chargé
document.addEventListener('DOMContentLoaded', () => {
// Menu burger
    const burger = document.getElementById('burger');
    const navLinks = document.querySelector('.header-boutton'); 

// Ajouter filtre dans formation
    const ajout = document.getElementById('ajout');
    const ajouter = document.getElementById('ajouter');
    const listeFiltres = document.getElementById('listeFiltres');
    const filtre = document.getElementById('ajoutFiltre');

    const oks = document.getElementById('oks');
    // Menu burger
    burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        navLinks.classList.toggle('active');
    });
    
// Ajouter filtre dans formation
    ajout.addEventListener('click', () => {
        ajouter.classList.toggle('active');
    });
    
// Fonction pour valider action
    const validerAction = () => {
        const texte = filtre.value;
        if (texte === "") {
            alert('Veuillez saisir un mot clé!');
        } else {
            const nouveauFiltre = document.createElement("span");
            nouveauFiltre.textContent = texte;
            nouveauFiltre.classList.add("filtre");
            const dernier = listeFiltres.lastElementChild;            
            listeFiltres.insertBefore(nouveauFiltre, dernier);
            filtre.value = "";
            ajouter.classList.toggle('active');
        }
    };

    oks.addEventListener('click', () => {
        validerAction();
    });
    window.addEventListener('keydown', (e) => {
        if (e.key === "Enter") {
            validerAction();
        }
    });
    
    
    
    
});
//Bouger le slogan-------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const sloganElement = document.querySelector('#histoire h3');
    const originalText = sloganElement.textContent;
    const words = originalText.split(' ');
    let index = 0;

    function showWords() {
        if (index < words.length) {
            sloganElement.innerHTML += (index === 0 ? '' : ' ') + `<span style="opacity:0; transition: opacity 0.5s ease;">${words[index]}</span>`;
            setTimeout(() => {
                const spans = sloganElement.querySelectorAll('span');
                spans[index].style.opacity = 1;
                index++;
                setTimeout(showWords, 333); 
            }, 50);
        } else {
            animateSlogan();
        }
    }

    function animateSlogan() {
        sloganElement.style.transition = 'transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
        sloganElement.style.transform = 'translateX(100px)';
        setTimeout(() => {
            sloganElement.style.transform = 'translateX(-100px)';
            setTimeout(() => {
                sloganElement.style.transform = 'translateX(0px)';
                setTimeout(resetSlogan, 800);
            }, 800);
        }, 800);
    }

    function resetSlogan() {
        sloganElement.innerHTML = '';
        index = 0;
        setTimeout(showWords, 500); 
    }

    sloganElement.textContent = '';
    showWords();
});
//Empecher la copie-------------------------------------------------------------------------------------
document.addEventListener("copy", function () {
    console.warn("⚠️ Le plagiat est interdit. Merci de respecter les droits d’auteur.");
});
//Verifier la pop-up-------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 

        let errors = false;

        const nom = form.querySelector('input[name="nom"]');
        const email = form.querySelector('input[type="email"]');
        const prenom = form.querySelector('input[name="prenom"]')

        if (nom && nom.value.trim() === "") {
            console.error("❌ Erreur : Le champ 'Nom' ne peut pas être vide.");
            errors = true;
        }

        if (prenom && prenom.value.trim() === "") {
            console.error("❌ Erreur : Le champ 'Prenom' ne peut pas être vide.");
            errors = true;
        }

        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            console.error("❌ Erreur : L'adresse email n’est pas valide.");
            errors = true;
        }

        if (!errors) {
            console.log("Données valides. Prêt à soumettre le formulaire.");
            form.submit();
        }
    });
});
//Menu entre les pages-------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const navDropdown = document.getElementById('js-navigation');
  const navMenu = document.getElementById('nav-menu');

  const menuData = [
    { text: 'Accueil', href: 'index.html' },
    { text: 'Produits', href: 'index.html#presentation-produits' },
    { text: 'Contact', href: 'index.html#formulaire' },
    { text: 'À propos', href: 'A propos/A proposfr.html' }
  ];

  menuData.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = item.text;
    a.href = item.href;
    li.appendChild(a);
    navMenu.appendChild(li);
  });

  navDropdown.addEventListener('mouseenter', () => {
    navMenu.style.display = 'block';
  });

  navDropdown.addEventListener('mouseleave', () => {
    navMenu.style.display = 'none';
  });
});
//Chrono et horloge------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const horloge = document.getElementById('horloge');
    const chrono = document.getElementById('chrono');

    function updateHorloge() {
        const now = new Date();
        const heures = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const secondes = String(now.getSeconds()).padStart(2, '0');
        horloge.textContent = `Heure: ${heures}:${minutes}:${secondes}`;
    }

    updateHorloge();
    setInterval(updateHorloge, 1000);

    let secondesPassees = 0;
    function updateChrono() {
        secondesPassees++;
        chrono.textContent = `Temps passé : ${secondesPassees}s`;
    }
    setInterval(updateChrono, 1000);
});
//Loader entre les pages-------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');//recupere le loader
  document.querySelectorAll('a').forEach(link => {//met en place le loader pour chaque lien
    link.addEventListener('click', function(event) {
      event.preventDefault();//bloque la redirection
      loader.style.display = 'flex';//lors d'un click il apparait
      setTimeout(() => {
        loader.style.display = 'none';
        window.location.href = this.href;//redirige vers la page a la fin des 2 secondes
      }, 2000);
    });
  });
});

//Bas de la page-------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const campusData = {
        "ISEN Brest": {
            adresse: "20 rue Cuirassé Bretagne, 29228 Brest",
            telephone: "+33 02 98 03 84 00"
        },
        "ISEN Caen": {
            adresse: "8 avenue Croix Guérin, 14000 Caen",
            telephone: "+33 02 30 31 03 20"
        },
        "ISEN Nantes": {
            adresse: "35 avenue du Champ de Manœuvre, 44470 Nantes",
            telephone: "+33 02 30 13 05 60"
        },
        "ISEN Rennes": {
            adresse: "2 rue Robert d'Arbrissel, 35000 Rennes",
            telephone: "+33 02 30 13 02 50"
        }
    };

    const footer = document.querySelector("#infos-complementaires");
    if (!footer) return;

    const campusContainer = document.createElement("div");
    campusContainer.innerHTML = `<h3>Coordonnées de nos campus</h3>`;
    
    for (const [ville, info] of Object.entries(campusData)) {
        const bloc = document.createElement("div");
        bloc.innerHTML = `
            <p><strong>${ville}</strong><br>
            Adresse : ${info.adresse}<br>
            Téléphone : <span class="campus-tel" data-tel="${info.telephone}" style="cursor: pointer; user-select: all;">${info.telephone}</span>
            </p>`;
        campusContainer.appendChild(bloc);
    }

    footer.appendChild(campusContainer);

    // Gestion du copier-coller sur n'importe quel numéro
    document.addEventListener("copy", (e) => {
        const selection = window.getSelection().toString();
        const telSpans = document.querySelectorAll(".campus-tel");

        telSpans.forEach(span => {
            const tel = span.dataset.tel;
            if (selection.includes(tel)) {
                setTimeout(() => {
                    const confirmation = prompt(`📞 Si vous voulez appeler ce numéro : ${tel}, entrez-le de nouveau ci-dessous puis validez :`);
                    if (confirmation === tel) {
                        console.log(`Vous appelez ce numéro : ${tel}`);
                        const ringtone = document.getElementById("ringtone");
                        if (ringtone) {
                            ringtone.currentTime = 0;
                            ringtone.play();
                            setTimeout(() => ringtone.pause(), 5000);
                        }
                    } else {
                        alert("❌ Numéro incorrect.");
                    }
                }, 100);
            }
        });
    });
});












//ATTENTION : certaines parties du java sont récuperées sur des forums 
//ou sur la doc (notamment les fonction et leur fonctionnement), de plus, pour
//régler certaines erreur Copilot fut utilisé.

//Bouger le slogan-------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const sloganElement = document.querySelector('#histoire h3');
    const originalText = sloganElement.textContent;
    const words = originalText.split(' ');//selectionne le texte et le decoupe par mots
    let index = 0;
    sloganElement.textContent = '';//fait disparaitre le texte de base
    showWords();

    function showWords() {
        if (index < words.length) {
            sloganElement.innerHTML += (index === 0 ? '' : ' ') + `<span style="opacity:0; transition: opacity 0.5s ease;">${words[index]}</span>`;//ajoute un mot dans la span et le rend visible petit a petit
            setTimeout(() => {
                const spans = sloganElement.querySelectorAll('span');
                spans[index].style.opacity = 1;//selectionne le premier mot et le rend visible avant de passer au prochain
                index++;
                setTimeout(showWords, 333);//att quelques secondes avant d'enchainer 
            }, 50);
        } else {
            animateSlogan();//lance l'animation du slogan
        }
    }

    function animateSlogan() {//animation de ressort avant de disparaitre
        sloganElement.style.transition = 'transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55)';//declare l'animation ressort
        sloganElement.style.transform = 'translateX(100px)';
        setTimeout(() => {
            sloganElement.style.transform = 'translateX(-100px)';
            setTimeout(() => {
                sloganElement.style.transform = 'translateX(0px)';//fait des gauches/droites en rebondissants
                setTimeout(resetSlogan, 800);
            }, 800);
        }, 800);
    }

    function resetSlogan() {//permet de faire disparaitre le slogan et de le faire reaparaitre
        sloganElement.innerHTML = '';
        index = 0;
        setTimeout(showWords, 500); 
    }
});
//Empecher la copie-------------------------------------------------------------------------------------
document.addEventListener("copy", function () {//verifie la copie
    console.warn("Le plagiat est interdit. Merci de respecter les droits d’auteur.");
});
//Verifier la pop-up-------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault(); //empeche l'envoie du formulaire tant que la variable est fausse

        let errors = false;

        const nom = form.querySelector('input[name="nom"]');
        const email = form.querySelector('input[type="email"]');
        const prenom = form.querySelector('input[name="prenom"]')//recupere les champs à verifier

        if (nom && nom.value.trim() === "") {//empeche ce champs d'etre vide
            console.error("❌ Erreur : Le champ 'Nom' ne peut pas être vide.");
            errors = true;
        }

        if (prenom && prenom.value.trim() === "") {//empeche ce champs d'etre vide
            console.error("❌ Erreur : Le champ 'Prenom' ne peut pas être vide.");
            errors = true;
        }

        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {//bout de code copié donc pas tout compris mais je suppose que ca verifie tout les critères d'une adresse mail valide
            console.error("❌ Erreur : L'adresse email n’est pas valide.");
            errors = true;
        }

        if (!errors) {
            console.log("Données valides. Prêt à soumettre le formulaire.");
            form.submit();//si pas d'erreurs envoie le formulaire
        }
    });
});
//Menu entre les pages-------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const navDropdown = document.getElementById('js-navigation');
  const navMenu = document.getElementById('nav-menu');

  const menuData = [
    { text: 'Home', href: 'Pageuk.html' },
    { text: 'Products', href: 'Pageuk.html#presentation-produits' },
    { text: 'Contacts', href: 'Pageuk.html#formulaire' },
    { text: 'About us', href: 'A propos/A proposuk.html' }//crée les liens vers les pages
  ];

  menuData.forEach(item => {
    const li = document.createElement('li');//creer liste   
    const a = document.createElement('a');//creer liens
    a.textContent = item.text;
    a.href = item.href;
    li.appendChild(a);
    navMenu.appendChild(li);//crée une liste avec les liens clickables a l'intérieur
  });

  navDropdown.addEventListener('mouseenter', () => {
    navMenu.style.display = 'block';//apparait quand al souris passe dessus
  });

  navDropdown.addEventListener('mouseleave', () => {
    navMenu.style.display = 'none';//disparait quand la souris part
  });
});
//Chrono et horloge------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const horloge = document.getElementById('horloge');
    const chrono = document.getElementById('chrono');//recupere les deux divs

    function updateHorloge() {
        const now = new Date();
        const heures = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const secondes = String(now.getSeconds()).padStart(2, '0');//recupere l'heure/minute et secondes en temps reel
        horloge.textContent = `Hour: ${heures}:${minutes}:${secondes}`;//affiche l'heure
    }

    updateHorloge();
    setInterval(updateHorloge, 1000);//update le chrono toute les secondes

    let secondesPassees = 0;
    function updateChrono() {
        secondesPassees++;//incremente un compteur  qui augmente toutes les secondes
        chrono.textContent = `Past Time : ${secondesPassees}s`;//affiche les secondes
    }
    setInterval(updateChrono, 1000);//update l'horloge toute les secondes
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
            Location: "20 rue Cuirassé Bretagne, 29228 Brest",
            phone: "+33 02 98 03 84 00"
        },
        "ISEN Caen": {
            Location: "8 avenue Croix Guérin, 14000 Caen",
            phone: "+33 02 30 31 03 20"
        },
        "ISEN Nantes": {
            Location: "35 avenue du Champ de Manœuvre, 44470 Nantes",
            phone: "+33 02 30 13 05 60"
        },
        "ISEN Rennes": {
            Location: "2 rue Robert d'Arbrissel, 35000 Rennes",
            phone: "+33 02 30 13 02 50"
        }
    };//création du texte a ajouter sur la page

    const footer = document.querySelector("#infos-complementaires");
    if (!footer) return;

    const campusContainer = document.createElement("div");
    campusContainer.innerHTML = `<h3>Contact details for our campuses</h3>`;//creer une nouvelle div avec un titre
    
    for (const [ville, info] of Object.entries(campusData)) {//parcours tous les objets de ville pour récuperer les infos 
        const bloc = document.createElement("div");
        bloc.innerHTML = `
            <p><strong>${ville}</strong><br>
            Adresse : ${info.adresse}<br>
            Téléphone : <span class="campus-tel" data-tel="${info.telephone}" style="cursor: pointer; user-select: all;">${info.telephone}</span>
            </p>`;
        campusContainer.appendChild(bloc);//ajoute le nouveau blocs contenant les infos a la div crée avant
    }

    footer.appendChild(campusContainer);

// copier-coller sur n'importe quel numéro
    document.addEventListener("copy", (e) => {//detecte la copie
        const selection = window.getSelection().toString();//recupere le texte selectionné
        const telSpans = document.querySelectorAll(".campus-tel");//recupère tous les numeros

        telSpans.forEach(span => {
            const tel = span.dataset.tel;
            if (selection.includes(tel)) {//verifie si le texte copié correspond a un numero connu
                setTimeout(() => {
                    const confirmation = prompt(`If you want call this number: ${tel}, Enter it again et and valid :`);
                    if (confirmation === tel) {//reverifie le tel avec celui copié
                        console.log(`You call this number: ${tel}`);
                        const ringtone = document.getElementById("sonnerie");
                        if (ringtone) {//met une sonnerie pendant sec (et du rock evidemment)
                            ringtone.currentTime = 0;
                            ringtone.play();
                            setTimeout(() => ringtone.pause(), 5000);
                        }
                    } else {//sinon on annule 
                        alert("Wrong number.");
                    }
                }, 100);
            }
        });
    });
});












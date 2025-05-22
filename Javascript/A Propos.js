//Cartes de Grattage-------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {//attend que la page soit chargée
    const canvases = document.querySelectorAll(".scratch-canvas");//selectionne la class canvas

    canvases.forEach(canvas => {
        const ctx = canvas.getContext("2d");//recupere le dessin de l'image pour dessiner dessus

        ctx.fillStyle = "#88c0d0";
        ctx.fillRect(0, 0, canvas.width, canvas.height);//applique le carré bleu dessus

        canvas.addEventListener("mousemove", function (e) {//quand la souris bouge
            const rect = canvas.getBoundingClientRect();//recupere du canva la taille par rapport a la fenetre
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;//recupere les coordonnées de la souris par rapport au canva

            ctx.globalCompositeOperation = "destination-out";//pour effacer une zone
            ctx.beginPath();
            ctx.arc(x, y, 20, 0, Math.PI * 2);//retire le cache bleu de la taille d'un cercle 
            ctx.fill();
        });
    });
});
//Ajouter des membres-------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {//attend que la page soit chargée
    const editBtn = document.getElementById("edition-btn");
    let isEditing = false;//met le mode en désactivé au cas ou

    function enableEditing() {
        let addBtn = document.getElementById("add-member-btn");//crée le bouton pour ajouter un  membre
        if (!addBtn) {
            addBtn = document.createElement("button");
            addBtn.id = "add-member-btn";
            addBtn.textContent = "Ajouter un membre";
            addBtn.style.margin = "20px";
            document.querySelector(".fondateurs-container").after(addBtn);//met le bouton après les cartes

            addBtn.addEventListener("click", () => {//permet de selectionnner une image
                const fileInput = document.createElement("input");
                fileInput.type = "file";
                fileInput.accept = "image/*";
                fileInput.click();
            
                fileInput.addEventListener("change", () => {
                    const file = fileInput.files[0];
                    const reader = new FileReader();
                    reader.readAsDataURL(file);//charge l'image la converti en url
                    reader.onload = function (e) {
                        const container = document.querySelector(".fondateurs-container");//creationde la nouvele carte avec tous les champs nécessaire
                        const newCard = document.createElement("div");
                        newCard.classList.add("fondateur");
            
                        newCard.innerHTML = `
                            <img src="${e.target.result}" alt="Nouvelle photo" class="fondateur-img">
                            <h3 contenteditable="true">Nom</h3>
                            <p contenteditable="true">Description</p>
                            <button class="delete-btn" style="margin-top:10px;background:red;color:white;">Supprimer</button>
                        `;
                        container.appendChild(newCard);
            
                        newCard.querySelector(".delete-btn").addEventListener("click", () => {//supprime la nouvelle si click sur le bouton
                            newCard.remove();
                        });
                    };
                });
            }); 
        }
        isEditing = true;
    }

    function disableEditing() {//pour quitter le mode admin
        // Supprimer bouton 
        const addBtn = document.getElementById("add-member-btn");
        if (addBtn) addBtn.remove();
        document.querySelectorAll(".delete-btn").forEach(btn => btn.remove());
        isEditing = false;
    }

    editBtn.addEventListener("click", function () {//activer le mode admin avec les mots de passe
        if (!isEditing) {
            const login = prompt("Entrez le nom du profil administrateur :");//ouvre des prompts pour taper le nom et le mdp
            if (login !== "test") {
                alert("Nom de profil incorrect.");
                return;
            }
            const pwd = prompt("Entrez le mot de passe :");
            if (pwd !== "test") {
                alert("Mot de passe incorrect.");
                return;
            }
            enableEditing();
        } else {
            const confirmExit = confirm("Voulez-vous quitter le mode admin ?");//confirmation avant de quitter
            if (confirmExit) {
                disableEditing();
            }
        }
    });
});
//Empecher la copie-------------------------------------------------------------------------------------
document.addEventListener("copy", function () {//detecte la copie d'un element
    console.warn("Le plagiat est interdit. Merci de respecter les droits d’auteur.");
});
//Loader-------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {//attend que la page soit chargée
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

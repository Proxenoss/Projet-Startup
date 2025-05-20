//Cartes de Grattage-------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const canvases = document.querySelectorAll(".scratch-canvas");

    canvases.forEach(canvas => {
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = "#88c0d0";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        canvas.addEventListener("mousemove", function (e) {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            ctx.globalCompositeOperation = "destination-out";
            ctx.beginPath();
            ctx.arc(x, y, 20, 0, Math.PI * 2);
            ctx.fill();
        });
    });
});
//Ajouter des membres-------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const editBtn = document.getElementById("edition-btn");
    let isEditing = false;

    function enableEditing() {
        editBtn.classList.add("editing");

        const names = document.querySelectorAll(".fondateur h3");
        names.forEach(name => {
            name.contentEditable = true;
            name.style.borderBottom = "1px dashed #000";
        });

        let addBtn = document.getElementById("add-member-btn");
        if (!addBtn) {
            addBtn = document.createElement("button");
            addBtn.id = "add-member-btn";
            addBtn.textContent = "Ajouter un membre";
            addBtn.style.margin = "20px";
            document.querySelector(".fondateurs-container").after(addBtn);

            addBtn.addEventListener("click", () => {
                const fileInput = document.createElement("input");
                fileInput.type = "file";
                fileInput.accept = "image/*";
                fileInput.click();
            
                fileInput.addEventListener("change", () => {
                    const file = fileInput.files[0];
                    if (!file) return;
            
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        const container = document.querySelector(".fondateurs-container");
                        const newCard = document.createElement("div");
                        newCard.classList.add("fondateur");
            
                        newCard.innerHTML = `
                            <img src="${e.target.result}" alt="Nouvelle photo" class="fondateur-img">
                            <h3 contenteditable="true">Votre Nom</h3>
                            <p contenteditable="true">Votre description personnalisée ici.</p>
                            <button class="delete-btn" style="margin-top:10px;background:red;color:white;">🗑️ Supprimer</button>
                        `;
            
                        container.appendChild(newCard);
            
                        newCard.querySelector(".delete-btn").addEventListener("click", () => {
                            newCard.remove();
                        });
                    };
            
                    reader.readAsDataURL(file);
                });
            });
            
        }

        document.querySelectorAll(".fondateur").forEach(card => {
            if (!card.querySelector(".delete-btn")) {
                const delBtn = document.createElement("button");
                delBtn.textContent = "🗑️ Supprimer";
                delBtn.className = "delete-btn";
                delBtn.style.marginTop = "10px";
                delBtn.style.background = "red";
                delBtn.style.color = "white";
                card.appendChild(delBtn);

                delBtn.addEventListener("click", () => {
                    card.remove();
                });
            }
        });

        isEditing = true;
    }

    function disableEditing() {
        editBtn.classList.remove("editing");

        const names = document.querySelectorAll(".fondateur h3");
        names.forEach(name => {
            name.contentEditable = false;
            name.style.borderBottom = "none";
        });

        // Supprimer bouton "Ajouter un membre"
        const addBtn = document.getElementById("add-member-btn");
        if (addBtn) addBtn.remove();

        // Supprimer les boutons de suppression
        document.querySelectorAll(".delete-btn").forEach(btn => btn.remove());

        isEditing = false;
    }

    editBtn.addEventListener("click", function () {
        if (!isEditing) {
            const login = prompt("Entrez le nom du profil administrateur :");
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
            const confirmExit = confirm("Voulez-vous quitter le mode édition ?");
            if (confirmExit) {
                disableEditing();
            }
        }
    });
});
//Empecher la copie-------------------------------------------------------------------------------------
document.addEventListener("copy", function () {
    console.warn("Le plagiat est interdit. Merci de respecter les droits d’auteur.");
});
//Loader-------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.style.display = 'none';
  }, 1333);
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      loader.style.display = 'flex';

      setTimeout(() => {
        loader.style.display = 'none';
        window.location.href = this.href;
      }, 2000);
    });
  });
});
//ATTENTION : certaines parties du java sont récuperées sur des forums 
//ou sur la doc (notamment les fonction et leur fonctionnement), de plus, pour
//régler certaines erreur Copilot fut utilisé.

//Empecher la copie-------------------------------------------------------------------------------------
document.addEventListener("copy", function () {
    console.warn("Le plagiat est interdit. Merci de faire attention lors de copie d'informations venant d'un site internet.");
});
//Fleche en haut-------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("fleche");//recupere l'element fleche

  window.addEventListener("scroll", function () {//lors du scroll declenche la fonction si on depasse 300px
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = "block";//la fleche apparait ou pas
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"// en haut lors du click de manière fluide
    });
  });
});
//Loader-------------------------------------------------------------------------------------
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




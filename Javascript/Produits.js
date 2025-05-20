//Empecher la copie-------------------------------------------------------------------------------------
document.addEventListener("copy", function () {
    console.warn("Le plagiat est interdit. Merci de respecter les droits d’auteur.");
});
//Fleche en haut-------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
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




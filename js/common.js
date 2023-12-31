//* Fonction générique qui crée un élément et ses attributs éventuels dans son parent
/**
 * @param {String} elementType
 * @param {Element} elementParent
 * @param {Array} attributes
 * @param {String} textContent
 */
const createElement = (elementType, elementParent, attributes = [], textContent = "") => {
  let element = document.createElement(elementType);
  for (let attribute of attributes) {
    element.setAttribute(attribute.name, attribute.value);
  }
  elementParent.appendChild(element);

  element.innerHTML = textContent;
  return element;
};

//* Permet de rendre fonctionnelle la flèche "up"
// Quand on clique sur le bouton (cf onclick html), on remonte au "top" défini ci-dessous :
const goToTop = () => {
  let top;

  if (window.innerWidth >= 1201) {
    // Format desktop : > 1200px
    top = 0;
  } else if (window.innerWidth < 1200 && window.innerWidth > 601) {
    // Format tablette : < 1200
    top = 0;
  } else if (window.innerWidth < 600) {
    top = 0;
  }

  window.scrollTo({
    top: top,
    left: 0,
    behavior: "smooth",
  });
};

//* Ouvre les menus accordéons
// Permet de sélectionner et cacher tous éléments à masquer dans l'accordéon
let subcategories = document.querySelectorAll(".accordion-category__subcategory");
for (let subcategory of subcategories) {
  subcategory.style.display = "none";
}

//Permet de sélectionner tous les boutons ayant la class unfold
//pour afficher/masquer leurs enfants
let unfolds = document.getElementsByClassName("unfold");

// Pour chaque bouton "unfold" :
// on ajoute un event listener au clic qui va masquer/afficher le contenu de l'accordéon
for (let unfold of unfolds) {
  unfold.addEventListener("click", function () {
    let panel = this.nextElementSibling;
    let chevron = this.firstChild.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      chevron.classList.add("fa-chevron-left");
      chevron.classList.remove("fa-chevron-down");
    } else {
      panel.style.display = "block";
      chevron.classList.add("fa-chevron-down");
      chevron.classList.remove("fa-chevron-left");
    }
  });
  // Si la taille de la fenêtre varie entre 1201 et 1500 px les boutons sont décalés pour ne pas couvrir le texte
  if (window.innerWidth >= 1201 && window.innerWidth <= 1500) {
    unfold.style.right = "450px";
  } else {
    unfold.style.right = "510px";
  }
}

// createFooter();

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

//* Footer commun à toutes les pages
let footer = document.querySelector("footer");
const createFooter = () => {
  createElement(
    "p",
    footer,
    [{ name: "id", value: "footer-copyright" }],
    `
  <span class="copyright-text"><span class="copyright">©</span>Copyright</span>
  <span class="copyright-logo">©</span> TinyNerak pour Zephyr Project - Tous droits réservés
  `
  );
};

// Permet de sélectionner et cacher tous éléments à masquer dans l'accordéon
let subcategories = document.querySelectorAll(".accordion-category__subcategory");
for (let subcategory of subcategories) {
  subcategory.style.display = "none";
}

//Permet de sélectionner tous les boutons ayant la class unfold
//pour afficher/masquer leurs enfants
let unfolds = document.getElementsByClassName("unfold");

// Pour chaque bouton, on ajoute un event listener au clic
// Cet event listener va masquer/afficher le contenu de l'accordéon
for (let unfold of unfolds) {
  unfold.addEventListener("click", function () {
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      this.firstChild.classList.add("fa-chevron-left");
      this.firstChild.classList.remove("fa-chevron-down");
    } else {
      panel.style.display = "block";
      this.firstChild.classList.add("fa-chevron-down");
      this.firstChild.classList.remove("fa-chevron-left");
    }
  });
}

createFooter();

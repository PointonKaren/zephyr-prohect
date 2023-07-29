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

createFooter();

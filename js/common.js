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

//* Nav commune à toutes les pages
let header = document.querySelector("header");
const createNav = () => {
  createElement(
    "nav",
    header,
    [],
    `
      <a href="../index.html">Accueil</a>
      <a href="../html/infos.html">Infos</a>
      <a href="../html/reglement.html">Règlement</a>
        <ul>
          <li><a href="../html/reglement.html#general">Général</a></li>
          <li><a href="../html/reglement.html#legal">Légal</a></li>
          <li><a href="../html/reglement.html#illegal">Illégal</a></li>
        </ul>
      <a href="../html/support.html">Support</a>
      <a href="../html/top-serveur.html">Top Serveur</a>
    </ul>
  `
  );
};

//* Footer commun à toutes les pages
let footer = document.querySelector("footer");
const createFooter = () => {
  createElement(
    "p",
    footer,
    [{ name: "class", value: "footer-copyright" }],
    `
  <span class="copyright-text"><span class="copyright">©</span>Copyright</span>
  <span class="copyright-logo">©</span> - Zephyr Project - Tous droits réservés
  `
  );
};
createNav();
createFooter();

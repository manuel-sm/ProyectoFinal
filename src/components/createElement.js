/**
 * Crea un element HTML con propiedades y contenido listo para renderizar en el dom
 * @param {string} typeElement tipo de elemento HTML
 * @param {Object} props Objeto con las propiedades del elemento
 * @param {string} content Contenido del elemento
 * 
 * @returns {HTMLElement} elemento con atributos y contenido
 */
function createElement(typeElement, props = {}, content='') {

  const element = document.createElement(typeElement);
  for (const prop in props) {
    element.setAttribute(prop, props[prop]);
  }
  element.textContent = content;
  return element;
}

export {createElement};
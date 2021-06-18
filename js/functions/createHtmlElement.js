export default function createHtmlElement(type, attributes) {
  const element = document.createElement(type);
  const attributesKey = Object.keys(attributes);
  attributesKey.forEach((attribute) => {
    element[attribute] = attributes[attribute];
  });
  return element;
}

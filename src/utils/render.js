import createElement from "./createElement";

const renderElement = ({ tagName, attrs, children}) => {

    // Create the element
    const elem = document.createElement(tagName);

    // Add atributes
    for (const [attr, val] of Object.entries(attrs)) { // Object.entries returns array of objects key/value pairs
        elem.setAttribute(attr, val);
    }

    // Render children
    children.forEach(child => {
        // Recursevly render all children
        elem.appendChild(render(child));
    })

    return elem;

}

export default render = (node) => {
    // If node is a string we can assume that it is textnode
    if (typeof node === 'string') {
        return document.createTextNode(node);
    }
    // Else it is a child element
    return renderElement(node);

}
export default (tagName, { attrs = {}, children = [] } = {}) => {

    const vElem = Object.create(null); // Creates a plain object that doesn't inherit from Object

    Object.assign(vElem, {
        tagName,
        attrs,
        children
    })

    return vElem; // Return the DOM node as a object
}
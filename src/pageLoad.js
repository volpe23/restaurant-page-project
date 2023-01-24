import { createFront } from './frontPage'



const navbar = () => {
    const nav = document.createElement('nav');
    nav.classList.add('navbar');
    const ul = createUl()
    nav.append(ul);

    return nav;
}

const createUl = () => {
    const navLinks = ['Home', 'Menu', 'Contacts'];
    const ul = document.createElement('ul');

    navLinks.forEach((link, i)=> {
        const li = document.createElement('li');

        const anchor = document.createElement('a');
        anchor.textContent = link;
        anchor.setAttribute('id', `${link.toLowerCase()}`);

        const slash = document.createElement('span');
        if (i !== navLinks.length - 1) {
            slash.classList.add('slash');
            slash.textContent = '/';
        }

        li.append(anchor, slash);

        ul.appendChild(li)
    })
    return ul;
}

export default function loadPage() {
    const contentDiv = document.getElementById('content');
    const pageContent = createFront();
    const nav = navbar();
    contentDiv.append(pageContent, nav);
    
}
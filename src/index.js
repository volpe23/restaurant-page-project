import './styles/style.scss';
// import { navbar } from './pageLoad';
import { createMenu } from './menu';
import { createFront } from './frontPage';
import { createContacts } from './contact'



function navLink(name, f) {
    const li = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.textContent = `${name}`;
    anchor.setAttribute('id', `${name.toLowerCase()}`);

    anchor.addEventListener('click', () => switchTab(f));
    li.append(anchor)

    return li
}

function switchTab(cb) {
    pageContent.innerHTML = '';
    const newContent = cb;
    pageContent.append(newContent);
}

const navbar = () => {
    const nav = document.createElement('nav');
    nav.classList.add('navbar');

    const ul = document.createElement('ul');

    const homeTab = navLink('Home', createFront());
    const menuTab = navLink('Menu', createMenu());
    const contactsTab = navLink('Contacts', createContacts());
    ul.append(homeTab, menuTab, contactsTab);
    nav.append(ul);

    return nav;
}
const contentDiv = document.getElementById('content');
const pageContent = document.createElement('main');

const nav = navbar()
contentDiv.append(nav, pageContent);






// loadPage();


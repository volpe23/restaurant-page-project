import { createFront } from './frontPage'
import { createMenu } from './menu';

// class NavLink {

//     constructor(name, eventFunc) {
//         this.name = name;
//     }

//     addEventListener(func) {
//         this.anchor = 
//         this.item.addEventListener('click', () => func); 
//     }
// }



// const createUl = () => {
//     const navLinks = ['Home', 'Menu', 'Contacts'];
//     const ul = document.createElement('ul');

//     navLinks.forEach((link, i)=> {
//         const li = document.createElement('li');

//         const anchor = document.createElement('a');
//         anchor.textContent = link;
//         anchor.setAttribute('id', `${link.toLowerCase()}`);

//         anchor.addEventListener('click', () => {
//             contentDiv.innerHTML = '';
//             switch (link) {
//                 case 'Home':
//                     contentDiv.append(createFront());
//                     break;
//                 case 'Menu':
//                     contentDiv.append(createMenu());
//                     break;  
//         }});

//         const slash = document.createElement('span');
//         if (i !== navLinks.length - 1) {
//             slash.classList.add('slash');
//             slash.textContent = '/';
//         }

//         li.append(anchor, slash);

//         ul.appendChild(li)
//     })
//     return ul;
// }

// export default function loadPage() {
    
//     const body = document.querySelector('body');
//     const pageContent = createFront();
//     const nav = navbar();
//     // body.prepend(nav);
//     contentDiv.append(pageContent);
    
// }
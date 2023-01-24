import './styles/menuStyle.scss';

class MenuItem {
    constructor(title, description, price) {
        this.title = title;
        this.description = description;
        this.price = price;
    }
    
    createItem() {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        const title = document.createElement('h2');
        title.classList.add('menu-title');
        title.textContent = this.title;

        const description = document.createElement('p');
        description.classList.add('description');
        description.textContent = this.description;

        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = `$ ${this.price}`;

        menuItem.append(title, description, price);

        return menuItem;
    }
}

const item1 = new MenuItem('Potato Pancakes', 'with apple sauce a side', '5.45');
const item2 = new MenuItem('Stuffed Mushrooms', 'with vegetables and prosutto', '1.25');
const item3 = new MenuItem('Italian fennel', 'with English watercress & hazelnuts', '7.50');
const item4 = new MenuItem('Spagetti Carbonara', 'with black turffles and guancale', '8.00');

const items = [item1, item2, item3, item4]
const createMenu = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    items.forEach(item => {
        const dish = item.createItem();
        menu.append(dish);
    })
    return menu;
}

export {
    createMenu
}
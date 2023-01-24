const createFront = () => {
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('main-container')
    // Welcome to
    const welcome = document.createElement('p');
    welcome.textContent = 'Welcome to';
    welcome.classList.add('welcome');
    // Title
    const title = document.createElement('h1');
    title.classList.add('title')
    title.textContent = 'Hello world';


    titleDiv.append(welcome, title);
    return titleDiv;
}

export { createFront }
const createFront = () => {
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('main-container')
    // Welcome to
    const welcome = document.createElement('h5');
    welcome.textContent = 'Welcome to';
    welcome.classList.add('welcome');
    // Title
    const title = document.createElement('h1');
    title.classList.add('title')
    title.textContent = 'Cacio e Pepe';

    const subtitle = document.createElement('p');
    subtitle.classList.add('subtitle');
    subtitle.textContent = 'Finest place for Italian food by the seaside';

    titleDiv.append(welcome, title, subtitle);
    return titleDiv;
}

export { createFront }
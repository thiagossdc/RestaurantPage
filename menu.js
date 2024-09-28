const menu = () => {
    const content = document.createElement('div');
    content.innerHTML = `
        <h1>Menu</h1>
        <ul>
            <li>Pasta</li>
            <li>Steak</li>
            <li>Salad</li>
        </ul>
    `;
    return content;
};

export default menu;

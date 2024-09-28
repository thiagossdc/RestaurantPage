const home = () => {
    const content = document.createElement('div');
    content.innerHTML = `
        <h1>Welcome to Our Restaurant</h1>
        <img src="path/to/image.jpg" alt="Restaurant" />
        <p>Come enjoy the finest cuisine with us!</p>
    `;
    return content;
};

export default home;

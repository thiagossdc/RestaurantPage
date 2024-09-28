const contact = () => {
    const content = document.createElement('div');
    content.innerHTML = `
        <h1>Contact Us</h1>
        <p>Email: contact@restaurant.com</p>
        <p>Phone: (123) 456-7890</p>
    `;
    return content;
};

export default contact;

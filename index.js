import home from './modules/home.js';
import menu from './modules/menu.js';
import contact from './modules/contact.js';

const content = document.getElementById('content');

const loadPage = (page) => {
    content.innerHTML = ''; // Clear existing content
    content.appendChild(page());
};

document.getElementById('homeBtn').addEventListener('click', () => loadPage(home));
document.getElementById('menuBtn').addEventListener('click', () => loadPage(menu));
document.getElementById('contactBtn').addEventListener('click', () => loadPage(contact));

// Load the homepage by default
loadPage(home);

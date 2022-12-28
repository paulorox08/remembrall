import './style.css';

const content = document.querySelector('.content');

function header() {
    const header = document.createElement('div');
    header.className = "header";

    content.appendChild(header);

}
header();

function sidebar() {
    const sidebar = document.createElement('div');
    sidebar.className = "sidebar";

    content.appendChild(sidebar);
}

sidebar();
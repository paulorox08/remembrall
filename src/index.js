import './style.css';

const content = document.querySelector('.content');

function header() {
    const header = document.createElement('div');
    header.className = "header";

    content.appendChild(header);

}

header();
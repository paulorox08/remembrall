const content = document.querySelector('.content');

function sidebar() {
    const sidebar = document.createElement('div');
    sidebar.className = "sidebar";

    content.appendChild(sidebar);
}
sidebar();

export {sidebar};
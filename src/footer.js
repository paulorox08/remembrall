const content = document.querySelector('.content');

function footer() {
    const footer = document.createElement('div');
    footer.className = "footer";

    content.appendChild(footer);
}
footer();

export {footer};
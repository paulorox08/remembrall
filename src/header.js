const content = document.querySelector('.content');

function header() {
    const header = document.createElement('div');
    header.className = "header";

    content.appendChild(header);

    const title = document.createElement('div');
    title.className = "title";

    title.innerText = "Remembrall";

    header.appendChild(title);

}
header();

export {header};
const content = document.querySelector('.content');

function header() {
    const header = document.createElement('div');
    header.className = "header";
    content.appendChild(header);

    const title = document.createElement('div');
    title.className = "title";
    title.innerText = "remembrall";
    header.appendChild(title);

    const headerButtons = document.createElement('div');
    headerButtons.className = "headerButtons";
    header.appendChild(headerButtons);

    const user = document.createElement('div');
    user.className = "user";
    headerButtons.appendChild(user);

    const theme = document.createElement('div');
    theme.className = "theme";
    headerButtons.appendChild(theme);

}
header();


export {header};
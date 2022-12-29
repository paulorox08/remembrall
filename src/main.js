const content = document.querySelector('.content');

function main() {
    const main = document.createElement('div');
    main.className = "main";

    content.appendChild(main);
}
main();

export {main};
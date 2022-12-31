const content = document.querySelector('.content');

function sidebar() {
    const sidebar = document.createElement('div');
    sidebar.className = "sidebar";
    content.appendChild(sidebar);

    const today = document.createElement('div');
    sidebar.appendChild(today);

    const todayIcon = document.createElement('span');
    todayIcon.className = "material-symbols-outlined";
    todayIcon.innerText = "today";
    today.appendChild(todayIcon);

    const todayText = document.createElement('div');
    todayText.className = "todayText";
    todayText.innerText = "Today";
    today.appendChild(todayText);

    const upcoming = document.createElement('div');
    sidebar.appendChild(upcoming);

    const upcomingIcon = document.createElement('span');
    upcomingIcon.className = "material-symbols-outlined";
    upcomingIcon.innerText = "upcoming";
    upcoming.appendChild(upcomingIcon);

    const upcomingText = document.createElement('div');
    upcomingText.className = "upcomingText";
    upcomingText.innerText = "Upcoming";
    upcoming.appendChild(upcomingText);

    const projects = document.createElement('div');
    projects.className = "projects";
    sidebar.appendChild(projects);

    const projectsIcon = document.createElement('span');
    projectsIcon.className = "material-symbols-outlined";
    projectsIcon.innerText = "build";
    projects.appendChild(projectsIcon);

    const projectsText = document.createElement('div');
    projectsText.className = "projectsText";
    projectsText.innerText = "Projects";
    projects.appendChild(projectsText);

    const random = document.createElement('div');
    random.className = "random";
    random.innerText = "TESTING";
    sidebar.appendChild(random);

    var i;

    for (i = 0; i < projects.length; i ++) {
        projects[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const random = document.querySelector('.random');
            if (random.style.display == "block")  {
                random.style.display = "none";
            } else {
                random.style.display = "block";
            }
        });
    }
}
sidebar();

export {sidebar};
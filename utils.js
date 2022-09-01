function createNavItem(text, url) {
    var container = document.createElement("li");
    container.classList.add("header__list-item");

    var link = document.createElement("a");
    link.classList.add("header__link");
    link.href = url;
    link.innerHTML = text;

    container.appendChild(link);

    return container;
}

window.addEventListener('DOMContentLoaded', (event) => {
    var leftnav = document.getElementsByClassName("header__list--socials")[0];
    leftnav.classList.remove("header__list--socials");
    leftnav.appendChild(createNavItem("Twitch", "https://twitch.thebluebuckets.org/"));
    leftnav.appendChild(createNavItem("Org", "https://sc.thebluebuckets.org/"));
    leftnav.appendChild(createNavItem("Discord", "https://discord.thebluebuckets.org/"));
});

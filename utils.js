function createNavItem(e,t){var a=document.createElement("li");a.classList.add("header__list-item");var d=document.createElement("a");return d.classList.add("header__link"),d.href=t,d.innerHTML=e,a.appendChild(d),a}function isLoaded(){var e;console.log("ran"),"complete"===document.readyState||"loaded"===document.readyState?(console.log("bigran"),(e=document.getElementsByClassName("header__list--socials")[0]).classList.remove("header__list--socials"),e.appendChild(createNavItem("Twitch","https://twitch.thebluebuckets.org/")),e.appendChild(createNavItem("Org","https://sc.thebluebuckets.org/")),e.appendChild(createNavItem("Discord","https://discord.thebluebuckets.org/"))):setTimeout(isLoaded,5)}isLoaded();

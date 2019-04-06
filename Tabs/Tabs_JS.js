(function(window) {

  let mql = window.matchMedia("(min-width: 745px)");

  function removeActive(currentComponent) {
    let tabLinks = currentComponent.querySelectorAll("label .tab");
    let tabContentItem = currentComponent.querySelectorAll(".tabContent .accordion__item");

    for (let x=0; x<tabLinks.length; x++) {
      let href = tabLinks[x].getAttribute("href");
      let link = retrieveID(href);
      let content = document.getElementById(link);

      tabLinks[x].parentElement.classList.remove("active");

      tabContentItem[x].style.display = "none";
      tabContentItem[x].style.opacity = "0";
      content.style.display = "none";
      content.style.opacity = "0";
    }
  }

  function retrieveID(href) {
    let link = href.slice(1);

    return link;
  }

  function showTabContent(mql) {
    let tabComponents = document.querySelectorAll(".tabComponent");

    for (let i=0; i<tabComponents.length; i++) {
      let tabLinks = tabComponents[i].querySelectorAll("label .tab");
      let tabContentItem = tabComponents[i].querySelectorAll(".tabContent .accordion__item");

      for (let x=0; x<tabLinks.length; x++) {
        let href = tabLinks[x].getAttribute("href");
        let link = retrieveID(href);
        let content = document.getElementById(link);

        if (content.parentElement.parentElement.classList.contains("accordion__item") && tabLinks[x].parentElement.classList.contains("active")) {
          //content.parentElement.style.opacity = "1";
          content.parentElement.parentElement.style.display = "block";
          content.parentElement.parentElement.style.opacity = "1";
        }
        if (mql.matches) {
          tabLinks[x].addEventListener("click", function(event) {

            removeActive(tabComponents[i]);
            event.preventDefault();

            tabLinks[x].parentElement.classList.add("active");

            if (tabLinks[x].parentElement.classList.contains("active")) {
              tabContentItem[x].style.display = "block";
              tabContentItem[x].style.opacity = "1";
            }
            content.style.display = "block";
            content.style.opacity = "1";
          });
        } else {
          if (content.parentElement.style.opacity === "1" && !(tabContentItem[x].querySelector(".accordion__title").classList.contains("active"))) {
            tabContentItem[x].querySelector(".accordion__title").classList.add("active");
          }
          tabContentItem[x].style.opacity = "1";
          tabContentItem[x].style.display = "block";
        }
      }
    }
  }

  showTabContent(mql);
  mql.addListener(showTabContent);
})(window);

"use strict";
(function(window) {

  function clearActiveSubs() {
    let subDropdowns = document.querySelectorAll(".navigationBar__item.dropdown .navigationBar__item.dropdown");

    for (let i=0; i<subDropdowns.length; i++) {
      subDropdowns[i].classList.remove("active");
    }
  }

  //CODE FOR HOVER event


  // CODE FOR CLICK EVENT
  function showSubmenu() {
    if (window.matchMedia("(max-width: 600px)").matches) {
      let submenu = document.querySelector(".navigationBar__item.dropdown > .navigationBar__submenu");
      let dropdowns = document.querySelectorAll(".navigationBar__directory__menu .navigationBar__item.dropdown > a");
      let navBar = document.querySelector(".navigationBar__container");

      for (let i=0; i<dropdowns.length; i++) {
        dropdowns[i].addEventListener("click", function() {
          let item = dropdowns[i].parentElement;

          if (submenu.opacity !== 0) {
            item.classList.toggle("active");
          }
        });
      }
    }
  }

  function showSubSubmenus() {
    let subDropdownLinks = document.querySelectorAll(".navigationBar__item.dropdown .navigationBar__item.dropdown > a");
    //let subSubmenus = document.querySelectorAll(".navigationBar__item.dropdown > .navigationBar__item.dropdown > .navigationBar__submenu");

    for (let i=0; i<subDropdownLinks.length; i++) {
      let parent = subDropdownLinks[i].parentElement;

      if (!parent.classList.contains("active")) {
        subDropdownLinks[i].addEventListener("click", function() {
          clearActiveSubs();
          parent.classList.add("active");
        });
      } else {
        subDropdownLinks[i].addEventListener("click", function() {
          parent.classList.toggle("active");
        });
      }
    }
  }

/*  function hideSubSubmenus() {
    let subDropdownLinks = document.querySelectorAll(".navigationBar__item.dropdown .navigationBar__item.dropdown > a");

    for (let i=0; i<subDropdownLinks.length; i++) {
      let parent = subDropdownLinks[i].parentElement;

      if (parent.classList.contains("active")) {
        subDropdownLinks[i].addEventListener("click", function() {
          parent.classList.remove("active");
        });
      }
    }
  }
*/
  function showSubMobile() {
    let expander = document.querySelector(".navigationBar__directory .navigationBar__expander .fa-ellipsis-h");
    let navMobile = document.querySelector(".navigationBar__menu--mobile");

    expander.addEventListener("click", function(event) {
      if (!navMobile.classList.contains("active")) {
        navMobile.classList.add("active");
      } else {
        navMobile.classList.remove("active");
      }
    });

  }
  showSubmenu();
  showSubMobile();

})(window);

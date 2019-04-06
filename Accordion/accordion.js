(function(window) {

  function openPanel() {
    let accordions =  document.querySelectorAll(".accordion");
    let images = document.querySelectorAll(".accordion__title  + .accordion__panel .accordion__panel-item img")


    for (let x=0; x<accordions.length; x++) {
    let titles =  accordions[x].querySelectorAll(".accordion__item .accordion__title");

      for (let i=0; i<titles.length; i++) {
        let arrow = titles[i].querySelector(".arrow.left");

        titles[i].addEventListener("click", function() {
          let panel = titles[i].nextElementSibling;

          titles[i].classList.toggle("active");

          if (panel.style.opacity === "1") {
            panel.style.opacity = "0";
            arrow.style.transform = "rotate(135deg)";
          } else if (titles[i].classList.contains("active")) {
              panel.style.opacity = "1";
              //images[i].style.height = "100%";
              arrow.style.transform = "rotate(45deg)";
          } else {
            if (arrow.parentElement.classList.contains(".icon__wrapper--circle")) {
              console.log(arrow.parentElement);
              arrow.style.position = "relative";
              arrow.style.top = "-0.15rem";
              arrow.style.left = "-0.15rem";
            }
          }
        });
      }
    }
  }

  openPanel();

})(window);

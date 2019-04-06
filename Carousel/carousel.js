"use strict";

//CODE IS FOR PORTFOLIO -- CAROUSEL COMPONENT FUNCTIONALITY NOT WORKING

(function(window) {

  function removeActive(controls) {
    for (let x=0; x<controls.length; x++) {
      controls[x].classList.remove("active");
    }
  }

  function carouselLooping(carousel) {
    let carouselControls = carousel.querySelector(".carousel__controls");
    let carouselItems = carousel.querySelector(".carousel__items");
    let controls = carouselControls.querySelectorAll(".carousel__control");


    for (let d=0; d<controls.length; d++) {
      carouselItems.style.transform = "translateX(0%)";
      controls[d].addEventListener("click", function() {
        if (this.classList.contains("carousel__control--next")) {
          console.log("thisISNext");
          if (carouselItems.style.transform === "translateX(0%)") {
            carouselItems.style.transform = "translateX(-100%)";
          } else if (carouselItems.style.transform === "translateX(-100%)") {
            carouselItems.style.transform = "translateX(-200%)";
          } else if (carouselItems.style.transform === "translateX(-200%)") {
            carouselItems.style.transform = "translateX(0%)";
          }
          console.log("next");
          console.log(carouselItems.style.transform);
        } else if (this.classList.contains("carousel__control--previous")) {
          if (carouselItems.style.transform === "translateX(0%)") {
            carouselItems.style.transform = "translateX(-200%)";
          } else if (carouselItems.style.transform === "translateX(-100%)") {
            carouselItems.style.transform = "translateX(0%)";
          } else if (carouselItems.style.transform === "translateX(-200%)") {
            carouselItems.style.transform = "translateX(-100%)";
          }
           console.log("prev");
        }
      });
    }
  }

  function navigationBottom(carousel) {
    let bottomControls = carousel.querySelectorAll(".carousel__navigation--bottom label");
    let carouselItems = carousel.querySelector(".carousel__items");

    for (let i=0; i<bottomControls.length; i++) {
      bottomControls[i].addEventListener("click", function() {
        if (!bottomControls[i].classList.contains("active")) {
          removeActive(bottomControls);
          bottomControls[i].classList.add("active");
        }

        if (bottomControls[i].classList.contains("first")) {
          carouselItems.style.transform = "translateX(0%)"
        } else if (bottomControls[i].classList.contains("second")) {
          carouselItems.style.transform = "translateX(-100%)"
        } else if (bottomControls[i].classList.contains("third")) {
          carouselItems.style.transform = "translateX(-200%)"
        }
      });

      if (bottomControls[i].classList.contains("active")) {
        bottomControls[i].style.transform = "scale3d(1.25, 1.25, 1.25)"
        bottomControls[i].style.opacity = "1";
      }
    }
  }

  function carouselControls() {
    let carousels = document.querySelectorAll(".carousel");

    for (let i=0; i<carousels.length; i++) {
      let carousel = carousels[i];
      carouselLooping(carousel);
      navigationBottom(carousel);
      console.log(carousel);
    }
  }

  carouselControls();

})(window);

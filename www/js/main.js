/* ========= JS File ==========
    Template Name: Fifty - Creative Portfolio Template
    Author: Mustafa729
    Version: 1.0
    Copyright 2019
========== JS File ========== 

JS FILE INDEX
=============

1- //  Auto Type Setup
2- // Go Down Button
3- // Go To Section 
4- // Portfolio Slider
5- // PARTICLES ONE TRIGGER
*/
$(document).ready(function() {
  "use strict";

  //  Auto Type Setup

  $(".hero-section .typed").typed({
    strings: ["Mobile Apps.", "iOS Apps.", "Desktop Apps.", "Web Apps."],
    loop: true,
    startDelay: 1000,
    backDelay: 2000
  });

  // Go Down Button
  $(".go-down").on("click", function() {
    $("html, body").animate(
      {
        scrollTop: $(".about").offset().top
      },
      1000
    );
  });

  // Go To Section
  $(".menu-item-box .menu-item").on("click", function(e) {
    e.preventDefault();

    $(".menu-item-box").removeClass("active");

    $(this)
      .parent(".menu-item-box")
      .addClass("active");

    $("html, body").animate(
      {
        scrollTop: $($(this).data("link")).offset().top
      },
      1000
    );
  });

  // Go Down Button
  $(".explore").on("click", function(e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).data("link")).offset().top + 80
      },
      1000
    );
  });

  // Portfolio Slider
  if ($(".projects-slider").length) {
    $(".projects-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 2,
      dots: true,
      centerMode: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1
          }
        }
      ]
    });

    //// PARTICLES ONE TRIGGER
    if ($("#particles-js-one")[0]) {
      particlesJS("particles-js-one", {
        particles: {
          number: {
            value: 170,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#fff"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.6,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.5,
              sync: false
            }
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: false,
            distance: 500,
            color: "#ffffff",
            opacity: 0.4,
            width: 2
          },
          move: {
            enable: true,
            speed: 6,
            direction: "bottom",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "bubble"
            },
            onclick: {
              enable: true,
              mode: "repulse"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 0.5
              }
            },
            bubble: {
              distance: 400,
              size: 4,
              duration: 0.3,
              opacity: 1,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      });
    }

    //// PARTICLES TWO TRIGGER
    if ($("#particles-js-two")[0]) {
      particlesJS("particles-js-two", {
        particles: {
          number: {
            value: 70,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#FFF"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#FFF"
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#FFF",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            onclick: {
              enable: false,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      });
    }
  }

  $("#playerModal")
    .on("shown.bs.modal", function(e) {
      $("#playerModal iframe").attr("src", $(e.relatedTarget).data("src"));
    })
    .on("hide.bs.modal", function(e) {
      $("#playerModal iframe").attr("src", "");
    });
});

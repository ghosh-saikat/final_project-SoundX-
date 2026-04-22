// let hamburger = document.getElementById("hamburger");
// let mobile_menu = document.getElementById("mobile_menu");

// hamburger.addEventListener("click", function () {
//   mobile_menu.classList.toggle("hidden");
// });

//Hamburger-toggler
$(document).ready(function () {
  $("#hamburger").click(() => {
    $("#mobile_menu").toggle();
  });
});

// Banner-carousel
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,

  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});

//latest swiper
var latestSwiper = new Swiper(".latestSwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//shop-now swiper
var shopnow_swiper = new Swiper(".shopnow_swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  effect: "fade",
  speed: "2000",
  fadeEffect: { crossFade: true },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// $(document).ready(function () {
//   $("#blue").click(() => {
//     $("#blue_hdph").show();
//     $("#shopNow").show();
//   });
// });
//review-swiper
var reviewSwiper = new Swiper(".reviewSwiper", {
  slidesPerView: 1,

  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

//Login validation

$(function () {
  const mailregex = /^(?=.*[a-z])(?=.*[0-9])(?=.*[@]).{6,}$/;

  $("#email").on("keyup", mailChecker);

  function mailChecker() {
    let data = $("#email").val();
    console.log("Mail", data);

    if (data.length < 1) {
      $("#emailerror").html("Required field");
      isMailerror = true;
    } else if (!mailregex.test(data)) {
      $("#emailerror").html("Email mismatch");
      isMailerror = true;
    } else {
      $("#emailerror").html("valid");
      isMailerror = false;
    }
  }
});

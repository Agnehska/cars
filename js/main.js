$(document).ready((function(e){e(".offers__item").click((function(){e(".modal__offer").addClass("show")})),e(".modal__close").click((function(){e(".modal__offer").removeClass("show")})),e(document).keydown((function(o){27===o.keyCode&&(o.stopPropagation(),e(".popup-fade").fadeOut())})),e(".popup-fade").click((function(o){0==e(o.target).closest(".popup").length&&e(this).fadeOut()}));var o=e("#button__up");e(window).scroll((function(){e(window).scrollTop()>300?o.addClass("show"):o.removeClass("show")})),o.on("click",(function(o){o.preventDefault(),e("html, body").animate({scrollTop:"0px"},500)})),e(".slider__slick").slick({infinite:!0,slidesToShow:4,slidesToScroll:4,arrows:!0,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1390,settings:{infinite:!0,slidesToShow:3,slidesToScroll:3,arrows:!0,autoplay:!0,autoplaySpeed:2e3}},{breakpoint:992,settings:{infinite:!0,slidesToShow:2,slidesToScroll:2,arrows:!0,autoplay:!0,autoplaySpeed:2e3}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1,centerMode:!0,centerPadding:"40px",autoplay:!0,autoplaySpeed:2e3,variableWidth:!0,dots:!0}}]}),e(".slider__trust").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,arrows:!0,autoplaySpeed:2e3,centerMode:!0,centerPadding:"100px",variableWidth:!0,responsive:[{breakpoint:1390,settings:{infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!0,autoplaySpeed:2e3,centerMode:!0,centerPadding:"100px",variableWidth:!0}},{breakpoint:480,settings:{arrows:!1,centerMode:!0,centerPadding:"40px",slidesToShow:1}}]})}));
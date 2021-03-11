$(document).ready(function () {

// переключалки в сортирвке
 $("#select > ul > li > a").on("click", function(e){
  var select_item=$(this).parent("li");
    e.preventDefault();
  if(!select_item.hasClass("act")){
    $(".select__item__drop").slideUp(5);
    $("#select > ul > li.act").removeClass("act");
    select_item.addClass("act");
    select_item.children(".select__item__drop").slideDown(5);
  }
  else {
      select_item.removeClass("act");
      select_item.children(".select__item__drop").slideUp(5);
    }
});

$(".select__item__drop").mCustomScrollbar();


   // Mobile Sidebar
   var mobileSidebar = (function () {
    var animSpeed = 200;

    function init() {
      setEvents();
    }

    function setEvents() {
            // Open sidebar
            $('.mobile__hamburger').on('click', function () {
              openSidebar();
            });

            // Close sidebar
            $('.mobile-close, .mobile__overlay').on('click', function () {
              closeSidebar();
            });

            // Mobile menu
            $('.menu-mobile__arrow').on('click', function () {
              toggleMenu($(this));
            });
          }

          function openSidebar() {
            $('.mobile__container').addClass('is-opened');
            $('.mobile__overlay').fadeIn(animSpeed);
          }

          function closeSidebar() {
            $('.mobile__container').removeClass('is-opened');
            $('.mobile__overlay').fadeOut(animSpeed);
          }

          function toggleMenu(el) {
            var li = el.closest('li');

            closeAll(li);

            el.toggleClass('is-active');
            li.toggleClass('is-active');

            li.children('ul').slideToggle(animSpeed, function () {
              li.children('ul').toggleClass('is-opened');
            });
          }

          function closeAll(li) {
            var active = li.siblings('.is-active');

            for (var i = 0; i < active.length; i++) {
              var li = active[i],
              el = active[i].querySelector('.menu-mobile__arrow');

              el.classList.remove('is-active');
              li.classList.remove('is-active');

              var ul = li.querySelector('.is-opened');
              $(ul).slideUp(animSpeed, function () {
                ul.classList.remove('is-opened');
              });
            }
          }

          init();

          return {
            open: openSidebar,
            close: closeSidebar
          };
        })();


});


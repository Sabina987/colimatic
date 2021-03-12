$(document).ready(function () {
  var check = function () {
    var select = document.getElementsByClassName('select__item act'),
    option = select[0].getElementsByTagName('input')
    for (var i = 0; i < option.length; i++) {

      option[i].addEventListener('click', addCheck)
    }
  }

  var addCheck = function(e) {
    if(e.target.getAttribute('checked')) {
      e.target.removeAttribute('checked')
    } else {
     if(e.target.getAttribute('type') === 'radio'){
       radioCheck()
     }
     e.target.setAttribute('checked', true)
   }
 }

 var radioCheck = function() {
  var select = document.getElementsByClassName('select__item act'),
  option = select[0].getElementsByTagName('input')
  for (var i = 0; i < option.length; i++) {
    option[i].removeAttribute('checked')
  }
}

var getNoun = function(number, one, two, five) {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
}

var setTitle = function() {
  var select = document.getElementsByClassName('select__item act'),
  option = select[0].getElementsByTagName('input'),
  checked = [],
  text  = ''
  for (var i = 0; i < option.length; i++) {
    option[i].removeEventListener('click', addCheck)
    if(option[i].getAttribute('checked')) {
     checked.push(option[i])
   }
 }
 if (checked.length > 1) { 
  text = "Выбрано " + checked.length + getNoun(checked.length,' элемент', ' элемента', ' элементов')
} else if (checked.length === 1) {
  text = checked[0].parentElement.getElementsByTagName('label')[0].innerHTML
}
if (text.length > 0) {
  select[0].getElementsByClassName('select__name')[0].innerHTML = text
}
}
  // переключалки в сортирвке
  $("#select > ul > li > a").on("click", function (e) {
    var select_item = $(this).parent("li");
    e.preventDefault();
    if (!select_item.hasClass("act")) {
      $(".select__item__drop").slideUp(5);
      $("#select > ul > li.act").removeClass("act");
      select_item.addClass("act");
      select_item.children(".select__item__drop").slideDown(5);
      check();
    }
    else {
      setTitle();
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




  $(".accordion .accord-header").click(function() {

    if($(this).next("div").is(":visible")){
      $(this).next("div").slideUp("slow");
    } else {
      $(".accordion .accord-content").slideUp("slow");
      $(this).next("div").slideToggle("slow");
    }

  });











});


(function ($) {

  "use strict";

  // ------------------------------------------------------------------------------ //
  // Overlay Menu Navigation
  // ------------------------------------------------------------------------------ //
  var overlayMenu = function () {

    if (!$('.nav-overlay').length) {
      return false;
    }

    var body = undefined;
    var menu = undefined;
    var menuItems = undefined;
    var init = function init() {
      body = document.querySelector('body');
      menu = document.querySelector('.menu-btn');
      menuItems = document.querySelectorAll('.nav__list-item');
      applyListeners();
    };
    var applyListeners = function applyListeners() {
      menu.addEventListener('click', function () {
        return toggleClass(body, 'nav-active');
      });
    };
    var toggleClass = function toggleClass(element, stringClass) {
      if (element.classList.contains(stringClass)) element.classList.remove(stringClass); else element.classList.add(stringClass);
    };
    init();
  }


  // Portfolio Slider
  var swiper = new Swiper(".portfolio-Swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  // Animate Texts
  var initTextFx = function () {
    $('.txt-fx').each(function () {
      var newstr = '';
      var count = 0;
      var delay = 100;
      var stagger = 10;
      var words = this.textContent.split(/\s/);
      var arrWords = new Array();
      
      $.each( words, function( key, value ) {
        newstr = '<span class="word">';

        for ( var i = 0, l = value.length; i < l; i++ ) {
          newstr += "<span class='letter' style='transition-delay:"+ ( delay + stagger * count ) +"ms;'>"+ value[ i ] +"</span>";
          count++;
        }
        newstr += '</span>';

        arrWords.push(newstr);
        count++;
      });

      this.innerHTML = arrWords.join("<span class='letter' style='transition-delay:"+ delay +"ms;'>&nbsp;</span>");
    });
  }

  // Copy email to clipboard
  var initCopyEmail = function () {
    var btn = document.getElementById('copy-email-btn');
    if (!btn) return;

    btn.addEventListener('click', function () {
      var email = btn.getAttribute('data-email');
      var label = document.getElementById('copy-email-text');
      var reset = function () {
        btn.classList.remove('is-copied');
        if (label) label.textContent = email;
      };

      var showCopied = function () {
        btn.classList.add('is-copied');
        if (label) label.textContent = 'Copied!';
        setTimeout(reset, 1800);
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(showCopied).catch(function () {
          window.location.href = 'mailto:' + email;
        });
      } else {
        window.location.href = 'mailto:' + email;
      }
    });
  }

  // Theme toggle
  var initThemeToggle = function () {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    var root = document.documentElement;

    var updateLabel = function () {
      var isDark = root.getAttribute('data-bs-theme') === 'dark';
      btn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
      btn.setAttribute('aria-pressed', String(isDark));
    };
    updateLabel();

    btn.addEventListener('click', function () {
      var isDark = root.getAttribute('data-bs-theme') === 'dark';
      var next = isDark ? 'light' : 'dark';
      root.setAttribute('data-bs-theme', next);
      localStorage.setItem('theme', next);
      updateLabel();
    });
  }

  // Back to top button
  var initBackToTop = function () {
    var btn = document.getElementById('back-to-top');
    if (!btn) return;

    var toggleVisibility = function () {
      if (window.scrollY > window.innerHeight * 0.6) {
        btn.classList.add('is-visible');
      } else {
        btn.classList.remove('is-visible');
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility();

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // init Chocolat light box
  var initChocolat = function() {
    Chocolat(document.querySelectorAll('.image-link'), {
      imageSize: 'contain',
      loop: true,
    })
  }

  $(document).ready(function () {

    overlayMenu();
    initTextFx();
    initChocolat();
    initCopyEmail();
    initBackToTop();
    initThemeToggle();

    // mobile menu
    $('.menu-btn').click(function(e){
      e.preventDefault();
      $('body').toggleClass('nav-active');
    });

    AOS.init({
      duration: 1200,
      // once: true,
    })

  });


  // window load
  $(window).load(function () {
    $(".preloader").fadeOut("slow");
  })


})(jQuery);
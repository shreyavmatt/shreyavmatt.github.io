(function() {
  "use strict"; // Start of use strict

  var menuToggle = document.querySelector('.menu-toggle');
  var sidebar = document.querySelector('#sidebar-wrapper');
  
  if (menuToggle) {
    // Closes the sidebar menu
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();

      sidebar.classList.toggle('active');
      menuToggle.classList.toggle('active');
      
      var icon = menuToggle.querySelector('.fa-bars, .fa-times');
      
      if (icon) {
        if (icon.classList.contains('fa-times')) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        } else if (icon.classList.contains('fa-bars')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        }
      }

    });
  }

  var navbarCollapse = document.querySelector('.navbar-collapse');

  if (navbarCollapse) {
    var navbarItems = navbarCollapse.querySelectorAll('a');

    // Closes responsive menu when a scroll trigger link is clicked
    for (var item of navbarItems) {
      item.addEventListener('click', function (event) {
        sidebar.classList.remove('active');
        menuToggle.classList.remove('active');
        
        var icon = menuToggle.querySelector('.fa-bars, .fa-times');
      
        if (icon) {
          if (icon.classList.contains('fa-times')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
          } else if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
          }
        }
      });
    }
  }

  // Scroll to top button appear
  var scrollToTop = document.querySelector('.scroll-to-top');
  
  if (scrollToTop) {
    
    // Scroll to top button appear
    window.addEventListener('scroll', function() {
      var scrollDistance = window.pageYOffset;

      if (scrollDistance > 100) {
        scrollToTop.style.display = 'block';
      } else {
        scrollToTop.style.display = 'none';
      }
    });
  }
})(); // End of use strict

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function(e) {
  this.addEventListener('click', onMapClickHandler);
  this.removeEventListener('mouseleave', onMapMouseleaveHandler);

  var iframe = this.querySelector('iframe'); 
  
  if (iframe) {
    iframe.style.pointerEvents = 'none';
  }
}

var onMapClickHandler = function(e) {
  // Disable the click handler until the user leaves the map area
  this.removeEventListener('click', onMapClickHandler);
  // Handle the mouse leave event
  this.addEventListener('mouseleave', onMapMouseleaveHandler);

  // Enable scrolling zoom
  var iframe = this.querySelector('iframe'); 
  
  if (iframe) {
    iframe.style.pointerEvents = 'auto';
  }
}

var maps = document.querySelectorAll('.map');

for (var map of maps) {
  // Enable map zooming with mouse scroll when the user clicks the map
  map.addEventListener('click', onMapClickHandler);
}

function slideInLeft() {
        var title = document.querySelectorAll('.h1');

        title.forEach(function(box) {

        var titlePosition = box.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.2;

        if (titlePosition < screenPosition) {
          box.classList.add('slide-in-left');
        }

});
}
window.addEventListener('scroll', slideInLeft);

const observerLeft = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show-left');
    } else {
      entry.target.classList.remove('show-left')
    }
  });
});

const hiddenElementsLeft = document.querySelectorAll('.hidden-left');
hiddenElementsLeft.forEach((el) => observerLeft.observe(el));

const observerRight = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show-right');
    } else {
      entry.target.classList.remove('show-right')
    }
  });
});

const hiddenElementsRight = document.querySelectorAll('.hidden-right');
hiddenElementsRight.forEach((el) => observerRight.observe(el));

const observerDown = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show-down');
    } else {
      entry.target.classList.remove('show-down')
    }
  });
});

const hiddenElementsDown = document.querySelectorAll('.hidden-down');
hiddenElementsDown.forEach((el) => observerDown.observe(el));


let bg = document.getElementById('bg')
let moon = document.getElementById('moon')
let mountain = document.getElementById('mountain')
let road = document.getElementById('road')
let text = document.getElementById('text')

window.addEventListener('scroll', function() {
  var value = window.scrollY;

  bg.style.right = value * 0.5 + 'px';
  moon.style.left = value * 0.5 + 'px';
  mountain.style.top = value * 0.15 + 'px';
  road.style.top = value * 0.15 + 'px'
  text.style.top = value * 1 + 'px'

  // mountains_bg.style.top = -value * 0.15 + 'px';
  // mountains_fg.style.top = -value * 0.15 + 'px';
  // screen.style.top = value * 0.15 + 'px'
})

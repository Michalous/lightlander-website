window.addEventListener('DOMContentLoaded', event => {
    
    var countDownDate = new Date("Dec 25, 2022 23:59:59").getTime();
    var nextChristmas = new Date("Dec 25, 2023 1:1:1").getTime();

    var today = new Date().getTime();
    var distance = countDownDate - today;
    var nextDistance = nextChristmas - today;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var nextDays = Math.floor(nextDistance / (1000 * 60 * 60 * 24));
    if (days > 1) {
        document.getElementById('sleeps').innerHTML = days + " sleeps until Christmas";
    }
    else if (days == 1) {
        document.getElementById('sleeps').innerHTML = "Only 1 sleep until Christmas!";
    }
    else if (days == 0) {
        document.getElementById('sleeps').innerHTML = "It's Christmas today!!!";
    }
    else {
        document.getElementById('sleeps').innerHTML = nextDays + " sleeps until Christmas";
    }



    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });    
});
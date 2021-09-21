window.addEventListener("DOMContentLoaded", () => {

    // Burger menu
    const iconMenu = document.querySelector('.menu__burger');
    const menuBody = document.querySelector('.menu__body');

    if (iconMenu) {
        iconMenu.addEventListener("click", function (e) {
            document.body.classList.toggle('_lock');
            iconMenu.classList.toggle('menu__burger_active');
            menuBody.classList.toggle('menu__body_active');
        });
    }

    // Scroll on click
    const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener("click", onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            const menuLink = e.target;
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - document.querySelector('header').offsetHeight;

                if (iconMenu.classList.contains('menu__burger_active')) {
                    document.body.classList.remove('_lock');
                    iconMenu.classList.remove('menu__burger_active');
                    menuBody.classList.remove('menu__body_active');
                }

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth"
                });
                e.preventDefault();
            }
        }
    }

    // Header scroll
    const headerElement = document.querySelector('.header');

    const callback = function (entries, observer) {
        if (entries[0].isIntersecting) {
            headerElement.classList.remove('header_scroll');
        } else {
            headerElement.classList.add('header_scroll');
        }
    };

    const headerObserver = new IntersectionObserver(callback);
    headerObserver.observe(headerElement)

});

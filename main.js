function escopo() {
    function navbar() {
        var header = document.querySelector('header');
        var lastScrollTop = 0;
        window.addEventListener('scroll', function () {
            var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop) {
                header.style.top = '-120px';
            } else {

                header.style.top = '0';
                if (currentScroll === 0) {
                    header.style.backgroundColor = '#ffffff00';

                } else {
                    header.style.backgroundColor = '#000';
                }
            }

            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        });
    }

    function hiddenElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            })
        })

        const hiddenElements = document.querySelectorAll('.container');
        hiddenElements.forEach((el) => observer.observe(el))

    }
    navbar();
    hiddenElements();
}
escopo();
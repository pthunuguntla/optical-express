/** Replacing copy right year*/
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

/** Navigation*/

const navigationEl = document.querySelector(".btn-mobile-nav");
const headerElement = document.querySelector(".header");
navigationEl.addEventListener('click', () => {
    headerElement.classList.toggle('nav-open')
})

/** Implement Scrolling */
const allLinks = document.querySelectorAll("a:link")
allLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        const href = link.getAttribute("href");

        if (href === '#') {
            console.log(href)
            window.scrollTo(({
                top: 0,
                behavior: "smooth"
            }))
        }

        if (href !== '#' && href.startsWith('#')) {
            const el = document.querySelector(href);
            el.scrollIntoView({ behavior: "smooth" })
        }

        if (link.classList.contains('main-nav-link')) {
            headerElement.classList.toggle('nav-open')
        }
    })

})


/** Implement sticky behaviour */

const heroEl = document.querySelector('.hero-section')
const obs = new IntersectionObserver((entries) => {

    const ent = entries[0];
    console.log(ent)

    if (!ent.isIntersecting) {
        document.body.classList.add('sticky')
    }
    if (ent.isIntersecting) {
        document.body.classList.remove('sticky')
    }
}, {
    root: null,
    threshold: 0,
    rootMargin: '-80px'

})

obs.observe(heroEl)
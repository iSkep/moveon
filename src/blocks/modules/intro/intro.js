import { gsap } from 'gsap';

const introTitle = document.querySelector('.intro__title');
const introSubtitle = document.querySelector('.intro__subtitle');
const introButtons = document.querySelectorAll('.intro__store');
const introImage = document.querySelector('.intro__img');

window.addEventListener('load', revealIntro);

function revealIntro() {
    const tl = gsap.timeline({
        defaults: {
            duration: 0.7,
        },
    });

    tl.from(introTitle, { autoAlpha: 0, y: -30, delay: 0.4 })
        .from(introSubtitle, { autoAlpha: 0, y: -30 }, '-=0.2')
        .from(introButtons, { autoAlpha: 0, y: -30 }, '-=0.2')
        .from(introImage, { autoAlpha: 0, duration: 1.6, backgroundPositionX: '55%, 100%' }, '-=0.2');
}

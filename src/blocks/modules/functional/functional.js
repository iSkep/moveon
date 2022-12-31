import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const funcSection = document.querySelector('.functional');
const funcTitle = document.querySelector('.functional__title');
const funcSubtitle = document.querySelector('.functional__subtitle');
const funcContent = document.querySelector('.functional__content');
const funcImage = document.querySelector('.functional__image');
const funcItems = document.querySelectorAll('.functional__item');

gsap.from(funcTitle, {
    duration: 1,
    autoAlpha: 0,
    y: 100,
    scrollTrigger: {
        trigger: funcTitle,
        start: 'top-=200 75%',
        end: 'bottom-=100 60%',
        // markers: true,
        scrub: true,
    },
});

gsap.from(funcSubtitle, {
    duration: 1,
    autoAlpha: 0,
    y: 100,
    scrollTrigger: {
        trigger: funcSubtitle,
        start: 'top-=200 75%',
        end: 'bottom-=100 60%',
        // markers: true,
        scrub: true,
    },
});

funcItems.forEach((item) => {
    gsap.from(item, {
        duration: 1,
        autoAlpha: 0,
        y: 200,
        scrollTrigger: {
            trigger: item,
            start: 'top-=300 75%',
            end: 'bottom-=200 70%',
            // markers: true,
            scrub: true,
        },
    });
});

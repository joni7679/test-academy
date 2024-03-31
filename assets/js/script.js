
// // custom scrollbar 
// let maindiv = document.querySelector("main");
// let cursor = document.querySelector(".custom-cursor");
// maindiv.addEventListener("mousemove", (event) => {
//     cursor.style.left=event.x+"px"
//     cursor.style.top=event.y+"px"
// })



// const scroll = new LocomotiveScroll({
//     el: document.querySelector('main'),
//     smooth: true
// });

function LocomotiveFunction() {
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
LocomotiveFunction();

function customscrollbar() {

    let maindiv = document.querySelector("main");
    let cursor = document.querySelector(".custom-cursor");

    maindiv.addEventListener("mousemove", (event) => {
        gsap.to(cursor, {
            x: event.clientX,
            y: event.clientY
        });
    });
}
customscrollbar();

function customlink() {

    let overlydiv = document.querySelector(".overly");
    let cursor = document.querySelector(".link-icon");

    overlydiv.addEventListener("mousemove", (event) => {
        gsap.to(cursor, {
            x: event.clientX,
            y: event.clientY
        });
    });
    console.log(overlydiv)
}
// customlink();

function horizontalScrollbar() {
    let horizontalSection = document.querySelector('.workes-container');
    gsap.to('.workes-container', {
        x: () => horizontalSection.scrollWidth * -1,
        xPercent: 100,
        scrollTrigger: {
            scroller: "main",
            trigger: '.workes-container',
            start: 'center center',
            end: '+=2000px',
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
            // markers: true
        }
    });
}
// horizontalScrollbar()

function navbar() {
    let hamburgerIcon = document.querySelector(".hamburger-icon");
    let nav = document.querySelector(".nav");
    hamburgerIcon.addEventListener("click", () => {
        nav.classList.toggle("activenav")
    })
}
navbar();
gsap.from(".hero-title h1", {
    y: 120,
    opacity: 0,
    duration: 0.9,
    stagger: 0.5,
})
gsap.from(".hero-title .text-white", {
    scale: 0.5,
    duration: 0.9,
    opacity: 0,

})
gsap.to(".img-overly", {

    left: "-107%",
    y: 0,
    // opacity:0,
    duration: 0.9,


})
function loadingAnimation() {
    var tl = gsap.timeline();
    tl.to(".loader", {
        top: "-100%",
        delay: 0.5,
        duration: 0.6,
        ease: "expo.out"

    })
    tl.from(".center-div h1 span", {
        scale: 0.5,
        x: -50,
        y: 50,
        stagger: 0.3,
        opacity: 0.7,
        duration: 0.5,
    })



    tl.to(".loader", {
        opacity: 0,
        display: "none",
        duration: 0.9,
    })
}
loadingAnimation()
// gsap.from(".about-left-part", {
//     duration: 0.3,
//     // x: "-100%",
//     // x: -150,
//     scale: 0.5,
//     opacity: 0,
//     delay: 0.4,
//     scrollTrigger: {
//         trigger: '.about-left-part',
//         scroller: "main",
//         // markers: true,
//         start: "top 40%", // Animation starts when the top of the box reaches the center of the viewport
//         end: "bottom 10%",
//         scrub: true
//     }
// })
gsap.from(".about-right-part", {
    duration: 0.3,
    x: 150,
    opacity: 0,
    // scale:0.5,
    delay: 0.4,
    scrollTrigger: {
        trigger: '.about-left-part',
        scroller: "main",
        markers: true,
        start: "top 50%", // Animation starts when the top of the box reaches the center of the viewport
        end: "bottom -10%",
        scrub: true
    }
})


// review section stlick silder
function stlickSilder() {
    $('.stu-review-silder').slick({
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 300,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $(".previous-btn").click(function () {
        $(".stu-review-silder").slick("slickPrev");
        
    });

    $(".next-btn").click(function () {
        $(".stu-review-silder").slick("slickNext");
    });
}
stlickSilder()

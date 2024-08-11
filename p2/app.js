

// for locomotive and gsap
(function () {

    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });



    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

})();
// for anime text
(function () {
    
    gsap.to("#page1 .anime-text1", {
        marginLeft: 0,
        opacity: 0,
        rotate: "-5deg",
        duration: 1,
        scrollTrigger: {
            scroller: ".main",
            trigger: ".anime-text1",
            // markers:true,
            start: "top 20%",
            scrub: 5
        }
    })

    gsap.to("#page1 .anime-text2", {
        transform: `translateX(20%)`,
        opacity: 0,
        rotate: "5deg",
        duration: 1,
        scrollTrigger: {
            scroller: ".main",
            trigger: ".anime-text1",
            // markers:true,
            start: "top 10%",
            scrub: 5
        }
    })
})();
// for video anime
(function (){
    gsap.to("#page1 video", {
        width: "95%",
        scrollTrigger: {
            scroller: ".main",
            trigger: "#video-container",
            // markers: true,
            start: "top 50%",
            end:"top -10%",
            scrub:true,
            pin:true
    
        }})
})();

(function(){
   
})();


gsap.to(".main", {
    backgroundColor: "white",
    scrollTrigger:{
        scroller: ".main",
        trigger: "#page2",
        start: "top 70%",
        // markers: true,
        // scrub:true
    }
});
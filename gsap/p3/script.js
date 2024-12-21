

// var t1 = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#page2",
//         scroller: "body",
//         start: "top 0%",
//         end: "top -100%",
//         scrub: 2,
//         pin: true,
        
//     }
// });

// t1.to("#page2 img", {
//     width: "100%"
// });

// t1.to("#page2 h1", {
//     transform: "translateX(-120%)",
   
// });
var t1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: true,
        markers: true, 
    }
});

t1.to("#page2 img", { width: "100%", duration: 2 })
  .to("#page2 h1", { transform: "translateX(-120%)", duration: 2 }, "<"); // "<" makes them play simultaneously

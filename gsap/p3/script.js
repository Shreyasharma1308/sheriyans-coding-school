gsap.from("#page1 #box",{
    opacity:0,
    rotate:360,
    delay:1,
    duration:1,
    
})
gsap.from("#page2 h1",{
    opacity:0,
    
    duration:2,
    scrollTrigger:{
        trigger: "#page2 h1",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:2,
        
        
    }
})
gsap.from("#page2 h2",{
    opacity:0,
   
    duration:2,
    scrollTrigger:{
        trigger: "#page2 h2 ",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:2,
        
        
    }
})
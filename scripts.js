let circle = document.getElementsByClassName("lb-background")[0];

let t1 = gsap.timeline({
    paused: false,
    repeat: -1,
    repeatDelay: 0.25,
    defaults: {
        duration: 5,
        ease: "power1.out"
    }
});

t1.to(circle, {
    height: 70 + "rem",
    width: 70 + "rem",
    opacity: 100
});

t1.to(circle, {
    opacity: 0,
    borderWidth: 0.25 + "rem",
}, "<")
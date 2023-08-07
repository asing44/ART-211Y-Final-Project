// <-- Circle animation -->

let circle = document.getElementsByClassName("lb-background")[0];

let t1 = gsap.timeline({
    paused: false,
    repeat: -1,
    repeatDelay: 0.25,
    defaults: {
        ease: "power1.out"
    }
});

t1.set(circle, {
    borderWidth: 0,
    opacity: 0,
});

t1.to(circle, {
    duration: 2,
    borderWidth: 2 + "rem",
    opacity: 20,
})

t1.to(circle, {
    duration: 5,
    height: 70 + "rem",
    width: 70 + "rem",
    opacity: 100
});

t1.to(circle, {
    duration: 5,
    opacity: 0,
    borderWidth: 1 + "rem",
}, "<")

// <-- Aside instructions animation -->

let info = document.getElementsByClassName("instructions")[0];

info.addEventListener("mouseenter", (e) => {

    info.addEventListener("mouseleave", (e) => {
        t1.reverse();
    })

    let t1 = gsap.timeline({
        defaults: {
            ease: "power1.out"
        }
    }).to(info, {
        duration: 1,
        maxWidth: 40,
    }).to(".fa-solid.fa-circle-info", {
        duration: 0.5,
        opacity: 0
    }, "<").to(".container.lb-aside", {
        duration: 0.5,
        opacity: 100 + "%"
    }, 0.7)
})

// < -- / -->

// <-- Modal animation -->

let selection = document.getElementsByClassName("selection");

let modalTimeline = gsap.timeline({
    paused: true
})
.to(".modal", {
    height: 100 + "vh",
    ease: "power1.inOut"
})

for (let i in selection) {
    selection[i].addEventListener("mouseenter", (e) => {
        
    })
}
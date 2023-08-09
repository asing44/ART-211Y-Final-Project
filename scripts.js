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
}).to(circle, {
    duration: 5,
    norderWidth: 4,
    height: 70 + "rem",
    width: 70 + "rem",
    opacity: 75
}).to(circle, {
    duration: 5,
    opacity: 0,
    borderWidth: 1 + "rem",
}, "<");

// <-- Aside instructions animation -->

let info = document.getElementsByClassName("instructions")[0];

let infoContent = document.getElementsByClassName("instructions-content")[0];

info.addEventListener("mouseenter", (e) => {

    info.addEventListener("mouseleave", (e) => {
        t1.reverse();
    })

    let t1 = gsap.timeline({
        defaults: {
            ease: "power1.out"
        }
    })
    .to(info, {
        duration: 0.5,
        maxWidth: 40,
    })
    .to(".instructions-content", {
        duration: 0.5,
        opacity: 1
    }, "<50%")
    .to(".instructions-symbol", {
        duration: 0.25,
        opacity: 0
    }, 0)
})

// < -- / -->

// <-- Modal animation -->

// Modal exit click

let modalExit = document.getElementById("modal-exit");

modalExit.addEventListener("click", () => {
    modalTimeline.reverse();
})

// Modal content array

let modalContent = document.getElementsByClassName("modal-content")[0];

let modalContentArray = {
    metal_cans: "Aluminum, steel, and tin cans can be recycled. Items that are commonly recycled yet <span class='inline-negated'>not accepted</span> are: <ul><li>Scap metal</li><li>Car parts</li><li>Appliances</li></ul>",
    plastic_1_and_2: "#1-#7 plastics can be recycled. Items that are commonly recycled yet <span class='inline-negated'>not accepted</span> are: <ul><li>Shrink-wrap packaging</li><li>Unnumbered plastic</li><li>Toys</li></ul>",
    clear_and_colored_glass: "Many different types of glass are able to be recycled in Allegheny County. The items that <span class='inline-accepted'>are accepted</span> are: <ul><li>Clear glass bottles and jars</li><li>Green, brown, blue, or other colored glass jars</li></ul>The items that are <span class='inline-negated'>not accepted</span> are: <ul><li>Broken glass</li><li>Glassware</li><li>Window panes</li><li>Mirros</li><li>Light bulbs</li></ul>",
    cardboard: "Only corrugated cardboard is able to be recycled. This is the cardbaord that contains ridges in grooves in the interior walls of the package. Soiled cardboard containers of any type are <span class='inline-negated'>not accepted</span>.",

}

// Modal image

let modalImage = document.getElementsByClassName("modal-image")[0];

// Modal selection

let selection = document.getElementById("interactive-recycle").getElementsByTagName("g");

let modalHeader = document.getElementsByClassName("modal-header")[0];

let selected = "";

let selectedData = "";

let modalTimeline = gsap.timeline({
    delay: 0.5,
    paused: true,
    smoothChildTiming: true,
}).set(".modal", {
    height: 100 + "vh"
}).to(".modal-overlay", {
    duration: 0.25,
    height: 100 + "vh",
    onComplete: function() {
        modalHeader.innerHTML = selected;
        modalContent.innerHTML = modalContentArray[selectedData]
        modalImage.src = "./SVG/" + selected + ".svg";
    }
}).to(".modal-overlay", {
    duration: 1,
    opacity: 50 + "%",
    ease: "ease.in",
}).to(".modal-container", {
    duration: 2,
    height: 80 + "%",
    ease: "ease.inOut"
}, "<50%").to(".modal-container", {
    duration: 1,
    opacity: 1,
}, "<").to(".modal-image", {
    duration: 1,
    opacity: 1,
    ease: "ease.in",
})

modalImage.attributes.src = "./SVG/" + selected + ".svg";

for (let i in selection) {
    selection[i].addEventListener("click", (e) => {
        selected = e.target.id;
        selectedData = e.target.dataset.name;
        console.log(selectedData)
        modalTimeline.play();
    })
}

// <-- / -->
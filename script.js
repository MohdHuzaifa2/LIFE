function heroCursor() {
    let cursor = document.querySelector(".cursor-playreel");

    document.querySelector("#video-slide").addEventListener("mouseenter", (e) => {
        gsap.to(cursor, {
            x: e.pageX + ((e.pageX / (innerWidth / 2) - 1) * 100),
            y: e.pageY + ((e.pageY / (innerHeight / 2) - 1) * 80),
            scale: 1
        })
    })
    document.querySelector("#video-slide").addEventListener("mouseleave", (e) => {
        gsap.to(cursor, {
            x: e.pageX + ((e.pageX / (innerWidth / 2) - 1) * 100),
            y: e.pageY + ((e.pageY / (innerHeight / 2) - 1) * 80),
            scale: 0
        })
    })
    document.querySelector("#video-slide").addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            x: e.pageX + ((e.pageX / (innerWidth / 2) - 1) * 100),
            y: e.pageY + ((e.pageY / (innerHeight / 2) - 1) * 80)
        })
    })
}

heroCursor()

let index = 0;
let timeoutDurations = [13.2, 10, 10, 10]
let timeout;
let slides = Array.from(document.querySelectorAll(".slide"));
let indicators = Array.from(document.querySelectorAll(".indicators"));

function changeSlide(changeIndex) {
    if (changeIndex >= slides.length) {
        index = 0;
    } else {
        index = changeIndex;
    }
    document.querySelector(".slide.active").classList.remove("active");
    slides[index].classList.add("active");
    if (slides[index].id == "video-slide") {
        slides[index].querySelector(".slide-media video").currentTime = 0;
    }
    // clearTimeout(timeout)
    autoSlide()
}

function autoSlide() {
    let dur = timeoutDurations[index];

    timeout = setTimeout(() => {
        changeSlide(index + 1)
    }, dur*1000);
}

indicators.forEach(indicator => {
    indicator.addEventListener("click", () => {
        clearTimeout(timeout)
        changeSlide(parseInt(indicator.getAttribute("data-index")))
    })
})

autoSlide()
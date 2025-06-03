// Role Changing
const typed = new Typed(".typed-role", 
    {
        strings: [
            "Web Developer",
            "Web Designer",
            "Student",
            "Tech Enthusiast",
            "Programmer"
        ],

        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
        shuffle: true,
        smartBackspace:true,
        showCursor: true,
        cursorChar: "|",
        fadeOut: false
    });

// Website Animation

document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true
    });
});
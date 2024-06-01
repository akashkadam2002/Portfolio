function myMenuFunction() {
    var meunBtn = document.getElementById("my_nav_menu");

    if (meunBtn.className === "nav_menu") {
        meunBtn.className += " responsive";
    }
    else {
        meunBtn.className = "nav_menu";
    }
}

window.onscroll = function () { headerShadow() };

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = '0 1px 6px rgba(0,0,0,0.1)';
        navHeader.style.height = '70px';
        navHeader.style.lineHeight = '70px';
    }

    else {
        navHeader.style.boxShadow = 'none';
        navHeader.style.height = '90px';
        navHeader.style.lineHeight = '90px';
    }
}

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true
})

sr.reveal(".featured_text_card", {})
sr.reveal(".featured_name", { delay: 100 })
sr.reveal(".featured_text_info", { delay: 200 })
sr.reveal(".featured_text_btn", { delay: 200 })
sr.reveal(".social_icons", { delay: 200 })
sr.reveal(".featured_image", { delay: 300 })
sr.reveal(".project_box", { interval: 200 })
sr.reveal(".top_header", {})

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true
})

srLeft.reveal(".about_info", { delay: 100 })
srLeft.reveal(".contact_left", { delay: 100 })

const srRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true
})

srRight.reveal(".skills_box", { delay: 100 })
srRight.reveal(".contact_right", { delay: 100 })

const sections = document.querySelectorAll('section[id]')
function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active_link')
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active_link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
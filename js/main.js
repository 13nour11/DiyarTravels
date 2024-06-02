
// Variables
let navbar = document.querySelector(".navbar");
let navLinks = document.querySelectorAll(".nav-link");
let checkDateInputs = document.querySelectorAll("input.form-control.date");

let navBrand = document.querySelector('a.navbar-brand');
// make the navbar fixed at scrolling
window.onscroll = () => {
    // 600px
    if (document.documentElement.scrollTop > 600) {
        navbar.classList.add("scroll-navbar");
        // make all links white color except active link
        // navLinks.forEach(navLink => { navLink.style.color = "#fff"; });
        navLinks.forEach(navLink => { navLink.style.color = "rgb(228, 190, 153) "; });

        navBrand.style.color ="rgb(228, 190, 153)";
        // fuction to update active link color at the scrolling
        updateActiveLinkColor(true);
    } else {
        navbar.classList.remove("scroll-navbar");
        navLinks.forEach(navLink => { navLink.style.color = ""; }); // Reset to default color

        navBrand.style.color = "";

        updateActiveLinkColor(false);
    }
};

// turn all text input into date type input at focus (clicked)
checkDateInputs.forEach( checkDateInput => {
    checkDateInput.addEventListener("focus" , () => {
        checkDateInput.type = (checkDateInput.type === "text") ? "date" : "text";
    })
})

const menuToggle = document.querySelector('.menu-toggle');

// Get the navigation links
const navLinks = document.querySelector('.nav-links');

// Add an event listener to the menu toggle button
menuToggle.addEventListener('click', () => {
    // Toggle the active class on the navigation links
    navLinks.classList.toggle('active');
});

/*Related to poem submission*/

let nameEl = document.getElementById("name");
let titleEl = document.getElementById("title");
let textBodyPoemEl = document.getElementById("textBodyPoem");

let nameErrMsgEl = document.getElementById("nameErrMsg");
let titleErrMsgEl = document.getElementById("titleErrMsg");
let textPoemErrMsgEl = document.getElementById("textPoemErrMsg");

let poemUserFormEl = document.getElementById("poemUserForm");

nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }
});

titleEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        titleErrMsgEl.textContent = "Required*";
    } else {
        titleErrMsgEl.textContent = "";
    }
});


textBodyPoemEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        textPoemErrMsgEl.textContent = "Required*";
    } else {
        textPoemErrMsgEl.textContent = "";
    }
});

poemUserFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
});
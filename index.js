// Modal Variables
let isModalOpen = false;

// Light/Dark Theme Contract Variables
let contrastToggle = false;

// Animate Shapes Variables
const scaleFactor = 1 / 20;

/**
 * ------ LIGHT/DARK THEME CONTRAST - TOGGLE LOGIC
 */
function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  }
  else {
    document.body.classList.remove ("dark-theme");
  }
}

/**
 * ------ MODAL - CONTACT FORM LOGIC
 */
function contact(event) {
  event.preventDefault();

  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_2pxis6i",
      "template_n80lp24",
      event.target,
      "GQuZK6luPgbWnk-YM"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at balman.tristan@gmail.com"
      );
    });
}

/**
 * ------ MODAL - TOGGLE LOGIC
 */
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }

  isModalOpen = true;

  document.body.classList += " modal--open";
}

/**
 * Animate background shapes onMouseMove()
 */

function animateShapes (event) {
    const shapes = document.querySelectorAll (".shape");
    const mouseX = event.clientX * scaleFactor;
    const mouseY = event.clientY * scaleFactor;

    for(let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1
        shapes[i].style.transform = `translate(${mouseX * boolInt}px, ${mouseY * boolInt}px)`
    }
}
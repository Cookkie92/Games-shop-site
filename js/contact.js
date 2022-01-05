const form = document.querySelector("#contactForm");
const contactName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const contactSubject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const contactEmail = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const contactAdress = document.querySelector("#adress");
const adressError = document.querySelector("#adressError");
const contactSucess = document.querySelector("#sucess");

function validateForm() {
  try {
    event.preventDefault();

    if (checkLength(contactName.value, 0) === true) {
      nameError.style.display = "none";
    } else {
      nameError.style.display = "block";
    }
    if (checkLength(contactSubject.value, 9) === true) {
      subjectError.style.display = "none";
    } else {
      subjectError.style.display = "block";
    }
    if (checkLength(contactAdress.value, 24) === true) {
      adressError.style.display = "none";
    } else {
      adressError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
      emailError.style.display = "none";
    } else {
      emailError.style.display = "block";
    }
  } catch (error) {
    console.log("Error occured", error);
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

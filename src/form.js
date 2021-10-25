const email = document.getElementById("email");

email.addEventListener("blur", () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
    console.log('emaaaail')
  } else {
    email.setCustomValidity("");
  }
});

const country = document.getElementById('country');

country.addEventListener('blur', () => {
    if (country.validity.patternMismatch) {
        country.setCustomValidity('I need a real country here, mate');
        console.log('Wrong country')
    } else {
        country.setCustomValidity('');
    }
})

// eslint-disable-next-line import/prefer-default-export
export { email };

let form = document.querySelector("form");
let emailInput = document.querySelector(".email input");
let succsesMessage = document.querySelector(".success .container p");
let successSection = document.querySelector("section .container");
let mainSection = document.querySelector("main .container");
let dissmisBtn = document.querySelector(".dismiss");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = emailInput.value;
  let validate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (validate.test(email)) {
    succsesMessage.innerHTML = `  A confirmation email has been sent to ${email}
    Please open it and click the button inside to confirm your subscription.`;

    mainSection.classList.remove("active");
    successSection.classList.add("active");
  } else {
    emailInput.parentElement.classList.add("error");
  }
});

dissmisBtn.addEventListener("click", () => {
  location.reload();
});

// Enables skill rows animations after reaching the desired height
function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);
reveal();

// Submit the contact form
const handleSubmit = (event) => {
  event.preventDefault();
  const myForm = event.target;
  const formData = new FormData(myForm);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then((modal.style.display = "block"))
    .then(myForm.reset())
    .catch((error) => alert(error));
};

document
  .getElementById("contact__form")
  .addEventListener("submit", handleSubmit);

// Modal displaying after successful form submission
const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementsByClassName("modal__close-btn")[0];

modalCloseBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

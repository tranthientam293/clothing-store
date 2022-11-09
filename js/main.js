const dropdown = document.querySelector("[toggle]");
const navLinks = document.querySelectorAll(".nav-link");
const subItems = document.querySelectorAll(".subnav-item .nav-link");
const form = document.querySelector(".subscribe-form");
const input = document.querySelector(".form-input");
const formBtn = document.querySelector(".form-btn");
const subModal = document.querySelector(".subcrible-modal");
const background = document.querySelector(".black-background");
const closeModalBtns = document.querySelectorAll(".close-modal");


navLinks.forEach((navItem) => {
  navItem.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

dropdown.addEventListener("click", (e) => {
  e.target.closest(".nav-item").classList.toggle("active");
});

subItems.forEach((subItem) => {
  subItem.addEventListener("click", (e) => {
    e.target.closest(".nav-item").classList.remove("active");
  });
});

form.addEventListener("click", (e) => {
  e.preventDefault();
});

//FORM 
formBtn.addEventListener("click", () => {
  if (input.value) {
    input.value = "";
    setTimeout(() => {
      background.classList.add("show");
      subModal.classList.add("show");
    }, 1000);
  }
});

//MODAL
closeModalBtns.forEach((closeModal) => {
  closeModal.addEventListener("click", (e) => {
    e.target.closest(".modal").classList.remove("show");
    background.classList.remove("show");
  });
});

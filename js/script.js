const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark");
});

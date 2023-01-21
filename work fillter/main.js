let lis = document.querySelectorAll(".switcher li");
let imags = Array.from(document.images);
lis.forEach((li) => {
  li.addEventListener("click", function () {
    lis.forEach((li) => {
      li.classList.remove("active");
      this.classList.add("active");
    });
  });
  li.addEventListener("click", function () {
    imags.forEach((img) => {
      img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((img) => {
      img.style.display = "block";
    });
  });
});
// function removeActive() {
//   lis.forEach((li) => {
//     li.classList.remove("active");
//     this.classList.add("active");
//   });
// }

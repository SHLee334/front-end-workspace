const h1 = document.querySelector("h1");
h1.onmouseenter = function () {
  h1.style.backgroundColor = "skyblue";
  h1.style.color = "black";
};

h1.onmouseleave = function () {
  h1.style.backgroundColor = "orangered";
  h1.style.color = "black";
};

// h1.onclick = function () {
//   h1.style.backgroundColor = "purple";
//   h1.style.color = "white";
// };

h1.addEventListener("click", function () {
  h1.style.backgroundColor = "purple";
  h1.style.color = "white";
});

// const img = document.querySelector("img");
// img = addEventListener()

const container = document.querySelector(".container");
const img = document.querySelectorAll(".container img");

// 이벤트 객체- 발생한 이벤트에 대한 많은 정보를 담고 있는 애
function removeHandler(e) {
  //   container.removeChild(this);
  console.log(e.currentTarget);
  console.log(e.target);
  if (e.target !== e.currentTarget) {
    // e.currentTarget.removeChild(e.target);
    e.target.style.display = "none";
  }
}
container.addEventListener("click", removeHandler);

// img.addEventListener("click", removeHandler);

// for (item of img) {
//   img.addEventListener("click", removeHandler);
// }

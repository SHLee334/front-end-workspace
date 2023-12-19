const btnFinish = document.querySelector("#finish");
const waring = document.querySelector("#waring");
let id = /^([A-Z]|[a-z])([A-Z]|[a-z]|[0-9]){3,11}$/;

btnFinish.addEventListener("click", function () {
  if (id.test(userId.value)) {
    alert("정상 입력");
  } else {
    alert("잘못 입력");
    waring.setAttribute("style", "red");
  }
});

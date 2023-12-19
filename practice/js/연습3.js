const finish = document.querySelector("#finish");
let id = /^([A-Z]|[a-z])([A-Z]|[a-z]|[0-9]){3,11}$/;
let name = /^[가-힣]{2,}$/;
let password = /[a-zA-Z0-9]{4,10}/;

finish.addEventListener("click", function () {
  if (id.test(userId.value)) {
    alert("아이디 OK!");
  } else {
    alert("잘못 입력");
  }
  if (name.test(userName.value)) {
    alert("이름 OK!");
  } else {
    alert("잘못 입력");
  }
});

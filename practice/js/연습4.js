// 이름 제한 거는 함수 생성
// 이름 : 한글로 두글자 이상
function userNameCheck() {
  const regExp = /^[가-힣]{2,}$/;
  return regExp.test(userName.value);
}

// 실시간으로 ok 문구 띄우는 함수 만들기
function valueCheck(e, check, message) {
  if (check) {
    e.target.nextElementSibling.style.color = "green";
    e.target.nextElementSibling.innerHTML = "OK!";
  } else {
    e.target.nextElementSibling.style.color = "red";
    e.target.nextElementSibling.innerHTML = message;
  }
}
// 만들은 ok문구 띄우는 함수를 이벤트를 사용해 입력하면 글씨 색이 바뀌게 만들기
userName.addEventListener("input", function (e) {
  valueCheck(e, userNameCheck(), "한글로 두글자 이상 입력하시오");
});

// 틀리면 안보내는 함수 만들기
function validate() {
  if (!userNameCheck()) {
    userName.focus();
    return false;
  }
  return true;
}

// 정규표현식 지정하고 확인값 리턴해줄 함수 생성
function userNameCheck() {
  const regExp = /^[가-힣]{2,}$/;
  return regExp.test(userName.value);
}

// 실시간 입력값에 따라 경고해주는 함수 생성
function valueCheck(e, check, message) {
  if (check) {
    e.target.nextElementSibling.style.color = "green";
    e.target.nextElementSibling.innerHTML = "OK!";
  } else {
    e.target.nextElementSibling.style.color = "red";
    e.target.nextElementSibling.innerHTML = message;
  }
}

// 생성한 경고함수 이벤트로 input에 연결
userName.addEventListener("input", function (e) {
  valueCheck(e, userNameCheck(), "한글로 두글자 이상 입력하시오");
});

// 리턴값에 따라 입력갑 전송 제어하는 함수 생성
function validate() {
  if (!userNameCheck()) {
    userName.focus();
    return false;
  }
  return true;
}

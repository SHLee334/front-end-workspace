// 정규표현식이랑 입력값이 동일한지 확인하는 함수
function userIdcheck() {
  const regExp = /^[a-zA-Z0-9]{5,12}$/;
  return regExp.test(userId.value);
}
function userPwdcheck() {
  const regExp = /^(?=.*[a-zA-Z])(?=.*[!-~])(?=.*[0-9]).{8,17}$/;
  return regExp.test(userPwd.value);
}
function pwdEqualcheck() {
  if (userPwd.value !== pwdEqual.value) {
    return false;
  }
  return true;
}

// 입력받는 값을 실시간으로 확인해 경고날리는 함수 생성
function valueCheck(e, check, message) {
  if (check) {
    e.target.nextElementSibling.style.color = "green";
    e.target.nextElementSibling.innerHTML = "OK!";
  } else {
    e.target.nextElementSibling.style.color = "red";
    e.target.nextElementSibling.innerHTML = message;
  }
}
// 생성한 경고함수 input에 연결
userId.addEventListener("input", function (e) {
  valueCheck(e, userIdcheck(), "영어 대소문자 및 숫자로 5-12자 입력하시오");
});

userPwd.addEventListener("input", function (e) {
  valueCheck(
    e,
    userPwdcheck(),
    "영어 대소문자, 숫자, 및 특수기호로 8-17자 입력하시오"
  );
});
pwdEqual.addEventListener("input", function (e) {
  valueCheck(e, pwdEqualcheck(), "동일한 비밀번호를 입력하시오");
});

// 입력값 전송할때 체크하고 제어하는 함수
function validate() {
  if (!userIdcheck()) {
    alert("아이디 확인");
    userId.focus();
    return false;
  } else if (!userPwdcheck()) {
    alert("비밀번호 확인");
    userPwd.focus();
    return false;
  } else if (!pwdEqualcheck()) {
    alert("비밀번호 동일 확인");
    pwdEqual.focus();
    return false;
  }
  return true;
}

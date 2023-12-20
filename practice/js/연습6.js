// 이름 정규표현식 제한을 거는 함수 생성
function userNameCheck() {
  const regExp = /^[가-힣]{2,}$/;
  return regExp.test(userName.value);
}
function userPhoneCheck() {
  const regExp = /^[0-9]{2,}-[0-9]{3,}-[0-9]{4,}$/;
  return regExp.test(userPhone.value);
}
function userIdCheck() {
  const regExp = /^[a-zA-Z]{5,12}$/;
  return regExp.test(userId.value);
}
function userPwdCheck() {
  const regExp = /^[a-zA-Z!-~]{7,15}$/;
  return regExp.test(userPwd.value);
}
function PwdEqualCheck() {
  if (userPwd.value !== userPwdEqual.value) {
    return false;
  }
  return true;
}
// 틀렸을 때 경고해줄 함수 생성
function valueCheck(e, check, message) {
  if (check) {
    e.target.nextElementSibling.style.color = "green";
    e.target.nextElementSibling.innerHTML = "OK!";
  } else {
    e.target.nextElementSibling.style.color = "red";
    e.target.nextElementSibling.innerHTML = message;
  }
}

// 입력받은 값이 다를 때 경고해줄 이벤트
userName.addEventListener("input", function (e) {
  valueCheck(e, userNameCheck(), "한글로 두 글자 이상 입력하시오");
});

userPhone.addEventListener("input", function (e) {
  valueCheck(e, userPhoneCheck(), "'-'를 포함하여 입력하시오");
});
userId.addEventListener("input", function (e) {
  valueCheck(e, userIdCheck(), "영어 대소문자 5-12자를 입력하시오");
});
userPwd.addEventListener("input", function (e) {
  valueCheck(
    e,
    userPwdCheck(),
    "영어 대소문자 및 특수문자로 7-15자를 입력하시오"
  );
});
userPwdEqual.addEventListener("input", function (e) {
  valueCheck(e, PwdEqualCheck(), "동일한 비밀번호를 입력하시오");
});

// 입력받은 값이 제한한 조건과 같은지 판단해 전송하는 함수 생성
function validate() {
  if (!userNameCheck()) {
    alert("이름 확인!");
    userName.focus();
    return false;
  } else if (!userPhoneCheck()) {
    alert("번호 확인!");
    userPhone.focus();
    return false;
  } else if (!userIdCheck()) {
    alert("아이디 확인!");
    userId.focus();
    return false;
  } else if (!userPwdCheck()) {
    alert("비밀번호 확인!");
    userPwd.focus();
    return false;
  } else if (!PwdEqualCheck()) {
    alert("동일한 비밀번호 확인!");
    userPwdEqual.focus();
    return false;
  }
  return true;
}

//이름 두글자 이상 입력받는 함수
function userNameCheck() {
  const regExp = /^[가-힣]{2,}$/;
  return regExp.test(userName.value);
}
function userPhoneCheck() {
  const regExp = /^[0-9]{2,}-[0-9]{4,}-[0-9]{4,}$/;
  return regExp.test(userPhone.value);
}
function userIdCheck() {
  const regExp = /[a-zA-Z]{5,12}/;
  return regExp.test(userId.value);
}
function userPwdCheck() {
  const regExp = /[a-zA-Z!-~]{8,15}/;
  return regExp.test(userPwd.value);
}
function userPwdCheck2() {
  if (userPwd.value !== userPwdEqual.value) {
    return false;
  }
  return true;
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

// 이름 틀릴시 빨간색으로 표시하는 함수
userName.addEventListener("input", function (e) {
  valueCheck(e, userNameCheck(), "한글로 두글자 이상 입력하시오");
});
userPhone.addEventListener("input", function (e) {
  valueCheck(e, userPhoneCheck(), "'-'을 포함하여 입력하시오");
});
userId.addEventListener("input", function (e) {
  valueCheck(e, userIdCheck(), "영어 대소문자로 5-12자 입력하시오");
});
userPwd.addEventListener("input", function (e) {
  valueCheck(
    e,
    userPwdCheck(),
    "영어 대소문자 및 특수문자로 8-15자 입력하시오"
  );
});
userPwdEqual.addEventListener("input", function (e) {
  valueCheck(e, userPwdCheck2(), "비밀번호를 동일하게 입력하시오");
});
// 입력 제출시 확인해 틀리면 전송 안하는 함수
function validate() {
  if (!userNameCheck()) {
    alert("이름 잘못 입력!");
    userName.focus();
    return false;
  } else if (!userPhoneCheck()) {
    alert("번호 잘못 입력!");
    userPhone.focus();
    return false;
  } else if (!userIdCheck()) {
    alert("id 잘못 입력!");
    userId.focus();
    return false;
  } else if (!userPwdCheck()) {
    alert("패스워드 잘못 입력!");
    userPwd.focus();
    return false;
  } else if (!userPwdCheck2()) {
    alert("패스워드 확인!");
    userPwdEqual.focus();
    return false;
  }
  return true;
}

function btn1() {
  console.log("최소값 : ", Math.min(5, 9, 7, -3)); // -3
  console.log("최대값 : ", Math.max(5, 9, 7, -3)); // 9
  console.log("절대값 : ", Math.abs(-8.8888)); // 8.8888
}

function btn2() {
  const number = 2.725;
  console.log("반올림 : ", Math.round(number)); // 3
  console.log("버림 : ", Math.floor(number)); // 2
  console.log("올림 : ", Math.ceil(number)); // 3
}

function btn3() {
  //console.log(Math.random()); // 0 ~ 1 숫자 중 무작위
  //let result = Math.floor(Math.random() * 100 + 10); // 10 ~ 100 까지만 뽑을 경우
  //let result = Math.floor(Math.random() * 5 + 2); // 2부터 6까지 출력 (숫자 2 부터 5개의 숫자 2 3 4 5 6)
  let result = Math.floor(Math.random() * 90 + 11); // 11부터 100까지 출력
  console.log(result);
}

function btn4() {
  const now = new Date();
  console.log(now);

  console.log("년 : ", now.getFullYear()); // 년 : 2023
  console.log("월 : ", now.getMonth() + 1); // 0 ~ 11 로 계산함, 그래서 실제 월로 따지려면 +1 해야함
  console.log("일 : ", now.getDate()); // 일 : 14
  console.log("시 : ", now.getHours()); // 시 :
  console.log("분 : ", now.getMinutes()); // 분 :
  console.log("초 : ", now.getSeconds()); // 초 :
}

function btn5() {
  const a = new Date(2025, 0, 5, 11, 50, 20); // 년, 월, 일, 시, 분, 초 를 고정된 값으로 설정
  console.log(a);

  const b = new Date(2025, 0, 5, 11, 50); // 내가 원하는거 까지만 지정 가능
  console.log(b);
}

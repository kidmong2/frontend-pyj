// ! 요구사항 정리 - 사칙연산 구현 (+ - * /)

// 1. 사용자로부터 두개의 숫자 입력 받기
//  : prompt 창을 통해 입력 받기
//  : prompt 창으로 입력받는 내용은 문자열로 인식
//  >> 문자를 숫자로 변환하는 과정이 필요

// 2. 입력받은 두 숫자에 대해 사칙연산을 수행하고 각 결과를 변수에 저장

// 3. 각 연산의 결과를 출력하기 (alert, confirm, 웹 브라우저 화면, 콘솔창)

// html 요소가 모두 로드된 이후에 해당 기능을 동작시킴
document.addEventListener('DOMContentLoaded', function() {
  // 숫자 입력 받기
  let num1 = prompt('첫번째 숫자를 입력하세요.');
  let num2 = prompt('두번째 숫자를 입력하세요.');

  // 문자열을 숫자로 변환하는 과정
  num1 = Number(num1);
  num2 = Number(num2);

  // 사칙연산 수행
  let sum = num1 + num2;
  let dif = num1 - num2;
  let pro = num1 * num2;

  // 컴퓨터 프로그래밍에서 수를 0으로 나누기 불가능
  let divv = num1 / num2;

  // 결과 출력
  alert('덧셈 결과: '+ sum);

  console.log('뺄셈 결과: '+ dif);

  confirm('곱셈 결과: '+ pro);

  // 웹 브라우저 출력
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `<h2>나눗셈 결과: ${divv}</h2>`;

});

tree
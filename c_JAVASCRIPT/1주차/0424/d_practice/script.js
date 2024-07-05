// prompt 창으로 입력받은 값은 기본적으로 문자형타입으로 지정

//! 문제 1

// : 사용자로부터 숫자값을 입력받아 해당 숫자가 짝수인지 홀수인지를 결정하여 콘솔에 출력
//   짝수일 경우 "짝수" 출력
//   홀수일 경우 "홀수" 출력
// -결과-------------------------------------------------------//

let num = Number(prompt('숫자를 입력하세요'));

num % 2 === 0 ? console.log(`${num}은 짝수입니다`) : console.log(`${num}은 홀수입니다.`);

// let message = number % 2 == 0 ? '짝수' : '홀수';
// console.log(message);

//! 문제 2

// 변수 total이 0으로 시작
// : 아래의 연산 후 total의 값을 콘솔에 출력

// 1) 5를 추가하세요.
// 2) 결과값에 3을 곱하세요.
// 3) 결과값에서 2를 빼세요.

// -결과--------------------------------------------------------//

let total = 0;
total += 5;
total *= 3;
total -= 2;

console.log('total값은',total);




//! 문제 3

// 변수 x의 값에 따라 "양수", "음수", "제로" 중 하나를 출력하는 코드를 조건 연산자를 사용하여 작성

// let x = // 여기에 임의의 숫자를 입력

// 여기에 로직 코드를 작성

// console.log("결과: ", result);

// -결과--------------------------------------------------------//

let x = Number(prompt('숫자를 입력하세요.'));

let result = (x>0) ? '양수' : ((x<0) ? '음수' : '제로');

console.log(result);


// ! 문제 4

// 삼각형의 넓이 계산하기
// 밑변 base, 높이 height, 넓이 area

let base = Number(prompt('밑변을 입력하세요'));
let height = Number(prompt('높이을 입력하세요'));

area = 0.5 * base * height;

console.log(`삼각형의 넓이는 ${area} 입니다.`);

// ! 문제 5

// 평균구하기
// 사용자로부터 3개의 숫자를 입력받아 평균을 구한다.

let num1 = Number(prompt('첫번째 숫자를 입력하세요.'))
let num2 = Number(prompt('두번째 숫자를 입력하세요.'))
let num3 = Number(prompt('세번째 숫자를 입력하세요.'))

let avg = 1/3 * (num1+num2+num3);

console.log(`평균값은 ${avg} 입니다.`);
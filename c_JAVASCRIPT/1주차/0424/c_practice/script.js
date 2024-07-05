// prompt 창으로 입력받은 값은 기본적으로 문자열 타입으로 지정

// 1. 원의 넓이를 구하는 계산
// : 사용자로부터 반지름을 입력받아 해당 반지름을 가진 원의 넓이를 콘솔창에 출력

const PI = 3.14;
let r = Number(prompt("반지름을 입력하세요.(cm)"));

let area = PI * r * r;

console.log(`원의 넓이: ${area}`);

// 2. 인치값을 센티미터 값으로 변환
// : 1인치 = 2.54cm

let inch = Number(prompt("인치를 입력하세요"));
let cent = inch * 2.54;

console.log(`${inch} 인치는 ${cent} 센티미터 입니다.`);

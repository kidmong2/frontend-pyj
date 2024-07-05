// ES6 모듈 문법을 사용하여 함수를 내보내기
// : 사칙연산 구현

// add subtract multiply divide
export function add(x,y) {
  console.log(`덧셈: ${x + y}`);
}

export default function subtract (x,y) {
  console.log(`뺄셈: ${x - y}`);
}

export function multiply (x,y) {
  console.log(`곱셈: ${x * y}`);
}

export function divide (x,y) {
  if (y !== 0) {
    console.log(`나눗셈: ${x / y}`);
  }
  else {
    throw new Error('0으로 나눌 수 없습니다.');
  }
  
}

// 이름 붙여 가져오기
// 기본 내보내기 (subtract)
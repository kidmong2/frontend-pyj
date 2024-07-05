/*
  ! 자료형(Data Type)
    : 기본 자료형(string, number, boolean, null & undefined)
    : 자료형 검사
    : 자료형 변환
*/

// ! 기본 자료형
// : 컴퓨터가 처리할 수 있는 자료의 형태

//? 자료형 확인(검사) 방법
// typeof 변수명: 자료형을 알 수 있는 함수

// ? 1. 숫자형 (number)
// : 정수와 실수를 표함하는 자료형
// : 숫자형 데이터는 사칙연산과 같은 수학적 연산에 주로 사용
let num = 10; // 정수 자료형
let float = 10.5; // 실수 자료형
console.log(typeof num);
console.log(typeof float);



// ? 2. 문자형 (string)
// : 텍스트 데이터를 나타내는 타입
// : 작은 따옴표('') | 큰 따옴표("") | 백틱 (``)으로 둘러싸서 표현

let str1 = 'Hello';
let str2 = "world";
let str3 = `Hello world!`;

// ****** 템플릿 문자열 ******
// : 백틱을 사용하여 정의, 문자열 내에서 변수나 표현식을 `${}` 안에 넣어 사용할 수 있도록 하는 문자열

// >> 변수 삽입
let name = '박용재';
let greeting = `안녕하세요! ${name}님`;
console.log(greeting);

// >> 표현식 삽입
let num1 = 10;
let num2 = 20;
console.log(`num1 + num2 = ${num1+num2}`);

// >> 여러 줄 문자열
// : 템플릿 문자열의 경우 여러 줄의 문자열 작성 가능
let multiLine1 = '안녕하세요'; // 일반 따옴표의 경우 여러 줄 문자 작성이 불가능

let multiLine2 = `백틱을 사용한 템플릿 문자열은
여러줄로 작성이 가능하다.
세번째 줄 하나둘셋`;
console.log(multiLine2);



//? 논리형 (Boolean)
// : 참(true) | 거짓(false) 값만을 가지는 자료형

let bool = 100 < 10;
console.log(bool);
console.log(typeof bool);

//? null & undefined 자료형
// null
// : 변수에 값이 없을을 명시적으로 나타남
// : 변수가 비어 있음을 의도적으로 표현하고자 할 때 사용
// (변수에 할당된) 데이터의 값이 유효하지 않은 상태
console.log(null);
console.log(typeof null);
// object - 비워져있지만 해당 데이터는 객체라는 구조를 따름

// undefined
// : 변수가 선언되었으나 값이 할당되지 않은 변수의 기본값
let hello; 
console.log(hello); // undefined
console.log(typeof hello); // undefined

//? 자료형 변환
// : 해당 함수들은 대문자로 시작

// 1. 문자열로 변환
// String()함수
let numberToString = String(123);
console.log(numberToString);
console.log(typeof numberToString); // String

// 2. 숫자형으로 변환
// Number()함수 
// 문자열이 숫자로 변환할 수 없는 경우 > NaN 값을 도출
let stringToNumber = Number('123');
console.log(stringToNumber);
console.log(typeof stringToNumber);

let notANumber = Number('이것은 숫자로 변환될 수 없습니다');
console.log(notANumber); // NaN

let nanValue = NaN;
console.log(nanValue); // NaN

// NaN의 특징
// - 어떤 값과도 동등하지 X
//   NaN === Nan (X)
// - 연산에서 전파
//  : 어떤 수학의 연산도 NaN과 만나면 결괏값이 NaN

// 3. 불리언으로 변환
// Boolean() 함수 사용

// & JS의 불리언 변환에서
// : false, 0, '', null, undefined, NaN을 제외한 값은 모두 true로 간주

let stringToBoolean = Boolean('Hello');
let stringToBoolean2 = Boolean('');
let numberToBoolean = Boolean(123);
let numberToBoolean2 = Boolean(0);

console.log(stringToBoolean); // true
console.log(numberToBoolean); // true
console.log(stringToBoolean2); // false
console.log(numberToBoolean2); // false
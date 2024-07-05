//& 실습 - 간단한 패턴 만들기

// - 이메일 주소 검증
// - 전화번호 포맷 매칭
// - URL 인식

//! 1. 이메일 주소 검증
// 이메일 주소가 유효한지 확인

// 정규표현식
// : /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

//? 설명
// ^[a-zA-Z0-9._-]+
// : ^ 뒤의 문자로 시작
// : [소문자, 대문자, 숫자, 마침표, 언더스코어, 하이픈] 중 하나
// : +1개 이상 작성

// @ : 앞의 문자들 뒤에 @ 기호 첨부

// [a-zA-Z0-9.-]+
// : 앞에랑 동일

// \.[a-zA-Z]{2,6}
// : 도메인의 TLD (최상위 도메인)는 마침표 . 으로 시작
// : 알파벳 (대문자, 소문자 포함) 모두 가능 + 2~6개 첨부

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

console.log(validateEmail("parkyj0024@gmail.com"));

//! 2. 전화번호 포맷 매칭
// 국제번호(+82) 051-123-4567
// 다양한 전화번호 포맷을 매칭하기 위한 정규표현식

// 정규표현식
// : /^(\+\d{1,3}\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/

//? 설명

// ^(\+\d{1,3}\s?)?
// : + 플러스 기호로 시작
// : 숫자가 1~3개 사이로 작성
// : \s? space(공백)가 없거나 최대 한번만
// >> 전체 국제번호 표기가 없거나 최대 한번만 작성

// (\(\d{3}\)|\d{3})
// : \( - 열리는 소괄호 리터럴 문자
// : \d{3} - 숫자 3자리 작성
// : \) - 닫히는 소괄호 리터럴 문자
// : | OR 또는
// : \d{3} - 숫자 3자리 작성

// [\s.-]?
// : 공백, 마침표, 하이픈 중 하나를 택

// \d{4}$
// : 정규 표현식의 끝은 숫자 4자리로 마감
// : decimal 10진수

function validateNumber(number) {
  const regex = /^(\+\d{1,3}\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
  console.log(regex.test(number));
}

validateNumber("+82 123-456-7890");
validateNumber("123-456-7890");

//! URL 인식
// URL을 인식하기 위한 정규표현식은 다음과 같습니다.

// 정규표현식
// : /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/

// ? 설명
// ^(https?:\/\/)?
// : https 또는 http 로 시작하는 것이 선택적

// ([\da-z.-]+)
// : \d, [0-9]
// : 숫자, 알파벳, 점, 하이픈 구성이 최소 한개 또는 여러개


// \.([a-z.]{2,6})
// : 리터럴 문자 마침표 뒤에 알파벳과 점 중에 2~6개 작성 가능

// ([\/\w .-]*)*
// : 리터럴 문자 /, 문자(알파벳, 숫자, 언더스코어), 공백, 마침표, 하이픈 작성
// >> 없거나 있을 경우는 여러개 : 0회 이상 반복 가능

// \/?$
// : URL 의 종료는 /로 종료를 허용
// : 리터럴 슬래쉬가 없거나 최대 하나만 작성

function validateURL(url) {
  const regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
  console.log(regex.test(url));
}

validateURL('https://www.example.com'); // true
validateURL('http://www.example.com'); // true
validateURL('http://www.example.com/path/to'); 
// true
validateURL('example.com'); // true
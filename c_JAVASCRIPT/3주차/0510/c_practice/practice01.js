//! 1. 해당 형태의 데이터(객체)를 JSON 문자열로 변환
// 변환된 JSON 문자열을 콘솔에 출력
// 다시 자바스크립트 객체로 변환
// lectures 배열의 첫 번째 항목을 콘솔에 출력
let student = {
  name: "홍길동",
  age: 20,
  major: "컴퓨터공학",
  lectures: ["자료구조", "알고리즘", "운영체제"]
};

// JSON 문자열로 변환
let jsonString = JSON.stringify(student);
console.log("JSON 문자열:", jsonString);

// 자바스크립트 객체로 변환
let parsedStudent = JSON.parse(jsonString);
console.log("다시 파싱된 객체:", parsedStudent);

// lectures 배열의 첫 번째 항목을 콘솔에 출력
console.log("lectures 배열의 첫 번째 항목:", parsedStudent.lectures[0]);

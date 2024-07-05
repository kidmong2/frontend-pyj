//! 성적 등급 계산기

const scores = [82, 95, 71, 60, 45];

// 주어진 성적 배열을 기반으로 각 성적에 등급을 매기는 함수 작성
// : map 사용하여 각 점수를 등급으로 반환

const grades = scores.map(scores => {
  if (scores >= 90) return 'A';
  else if (scores >= 80) return 'B';
  else if (scores >= 70) return 'C';
  else if (scores >= 60) return 'D';
  else return 'F';
});

console.log(grades);


//! 모든 수의 곱을 계산

const numbers = [1, 2, 3, 4, 5];
const result = numbers.reduce((total, current) => total * current, 1);

console.log(result);


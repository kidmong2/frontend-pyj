// 함수를 구현하여 해당 조건의 로직을 작성하고 결과값을 반환
// : 함수의 매개변수는 배열의 값을 사용

//! 1. 배열의 합계
function sumArray(array) {
  let sum = 0;
  let length = array.length;
  // 배열의 모든 요소에 접근하기 위해서 for 반복 + index 번호
  for(let i=0; i < length; i++) {
    sum += array[i];
  }
  return sum;
}
console.log(sumArray([1,2,3,4,5]));





//! 2. 특정 수 이상의 요소 필터링

function filterGreaterThanTen(array) {
  let filtered = [];
  let length = array.length;

  for (let i=0; i<length; i++) {
    if (array[i] > 10) {
      filtered.push(array[i]);
    }
  }
  return filtered;
}

console.log(filterGreaterThanTen([12,1,5,4,356,7]));

//! 3. 배열 요소 검색
// : containsElement 함수 구현
// : 매개변수로 array(배열)와 element(검색값)을 받음
// : 배열의 모든 요소에 접근하는 동안에 element 갑소가 동일한 값이 있는 경우 true, 아닌 경우 false




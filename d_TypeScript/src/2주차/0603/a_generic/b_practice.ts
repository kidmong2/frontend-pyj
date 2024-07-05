// b_practice.ts
{
  // 문제 1: 제네릭 함수 작성
  // - reverseArray 제네릭 함수 작성
  function reverseArray<T>(array: T[]): T[] {
    let reverseArr = array.reverse();
    return reverseArr;
  }

  let stringArr = reverseArray<string>(['a', 'b', 'c']);
  console.log(stringArr);

  let NumberArr = reverseArray<number>([1,2,3]);
  console.log(NumberArr);


  
  // 문제 2: 제네릭 인터페이스 정의
  // - KeyValue라는 제네릭 인터페이스를 정의
  //   인터페이스는 key와 value라는 두 개의 속성을 가지며
  //   , 각각의 타입은 제네릭으로 지정
  interface KeyValue<K, V> {
    key: K,
    value: V
  }

  let keyValue: KeyValue<string, number> = {
    key: '박용재',
    value: 10
  }

  let anotherKeyValue: KeyValue<boolean, number> = {
    key: false,
    value: 100
  }  


  // 문제 3: 제네릭을 사용한 고차함수 구현
  // mapArray라는 제네릭 고차함수 작성
  // : 배열과 배열의 각 요소를 변환하는 콜백함수를 매개변수로 전달
  // : 변환된 요소로 구성된 새 배열을 반환
  function mapArray<T, U> (array: T[], callback: (item: T) => U): U[] {
    // T 타입의 요소를 가진 배열이 map으로 전체 순회
    // : 해당 타입에 따라 기능 구현 후, U타입의 배열로 반환
    return array.map(callback);
  }

  let numbers = [1, 2, 3, 4, 5];
  let doubleNumbers = mapArray<number, number>(numbers, (x) => x * 2);
  console.log(doubleNumbers);

  let strings = ['a', 'b', 'c'];
  let upperCaseStrings = mapArray<string, string>(strings, (x) => x.toUpperCase());
  console.log(upperCaseStrings);




  
  }
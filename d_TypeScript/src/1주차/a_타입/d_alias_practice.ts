

{
  //! 문제 1: 타입 어노테이션 사용
  // 변수 age를 선언하고 숫자 타입으로 어노테이션을 지정
  let age: number;

  // 변수 isStudent를 선언하고 불리언 타입으로 어노테이션을 지정
  let isStudent: boolean;

  // 위 두 변수에 적절한 값을 할당하고, 콘솔에 출력
  
  age = 25;
  isStudent = true;

  console.log(`Age: ${age}, IsStudent: ${isStudent}`);




  //! 문제 2: 타입 별칭 사용
  // ProductType이라는 타입 별칭을 생성
  // 객체, id (문자열 타입), name (문자열 타입), price (숫자 타입) 속성 포함
  type productType = {
    id: string;
    name: string;
    price: number;
  }

  // ProductType 타입을 사용하여 product라는 이름의 변수를 선언하고, 적절한 값을 할당
  const product: productType = {
    id: '#123',
    name: 'MacBook',
    price: 3999
  }


  // product 객체의 내용을 콘솔에 출력

  console.log(`${product.id}, ${product.name}, ${product.price}`);

}
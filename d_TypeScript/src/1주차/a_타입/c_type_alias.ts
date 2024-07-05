
{
  //! 타입 어노테이션(Type Annotation)
  // : 변수, 함수의 매개변수, 함수의 반환값 등에 사용
  // : 해당 식별자(변수명)의 타입을 명시적으로 선언
  // >> 보통 식별자 뒤에 콜론을 사용하여 직접 명시

  let number;
  let anyNumber: any;
  // : any 타입의 변수로 명시하지 않은 경우 값을 할당할 때마다 해당 값의 타입의 변수로 재지정
  number = 123.567;
  anyNumber = 345.3030;
  console.log(number.toFixed(2));
  console.log(anyNumber.toFixed(2));


  //! 2. 타입 별칭 (Type Alias)
  // : 새로운 타입 이름을 생성하여 기존 타입을 참조할 수 있게 하는 기능
  // : 코드의 가독성과 재사용성을 향상
  // : 타입 별칭은 대문자로 시작!

  //? 기본 사용 방법
  // : type 키워드를 사용하여 정의
  // type 타입별칭(대문자키워드) = 타입;

  // 1. 변수 타입 별칭
  // : 변수의 경우 별칭 사용을 거의 하지 X
  type TEXT = string;
  let message: TEXT = '텍스트 메시지';

  // 2. 객체 타입 별칭
  // : 타입 별칭 내에서도 선택적 프로퍼티와 읽기 전용 속성 사용 가능
  
  
  type Usertype = { // : 이 아닌 = 를 사용하여 타입 참조를 할당
    name?: string;
    readonly height: number;
  }

  const user1: Usertype = {
    // name: '박용재',
    height: 175
  }

  const user2: Usertype = {
    name: '최예나',
    height: 163
  }
  // user2.height = 177; - Error





  // 3. 함수 타입 별칭
  // : User 타입인 매개변수를 받아 boolean 타입의 반환값을 생성하는 함수
  type User = {
    id: string;
    name: string;
  }

  type ValidateUserType = (user: User) => boolean;


  const isValideUser: ValidateUserType = (user) => user.id !== '';

  let userA: User = {
    name: '사쿠라',
    id: 'sakura'
  }
  let userB: User = {
    name: '나코',
    id: ''
  }

  console.log(isValideUser(userA)); // true
  console.log(isValideUser(userB)); // false
  
  // 사용가 입력되었을 때
  // , 사용자의 아이디가 null인 경우(입력하지 않은 경우) false
  // , 사용자의 아이디가 입력된 경우 true



  type VoidReturnType = (x: number) => void;

  const add: VoidReturnType = (x) => {
    console.log(x + x);
  } 

  add(2);

  // 함수 사용

  //! 함수 타입 별칭 예제
  // 1. 함수 타입 별칭 정의
  type GreetFunction = (name: string) => string;


  // 2. 위의 타입 별칭을 사용하는 함수 구현
  const greet: GreetFunction = (name) => {
    return `Hello ${name}`;
  }


  // 3. 다른 함수에서 동일한 타입 별칭 사용
  function greet2(name: string): string {
    return `Hello ${name}`;
  }


  // 4. 함수 사용
  console.log(greet('장원영'));
  console.log(greet2('안유진'));



}
// c_class02.ts
{
  //! 생성자(Constructor)

  //? 생성자 함수의 정의
  // : 클래스의 인스턴스가 생성될 때 자동으로 호출되는 특별한 메서드
  // - 인스턴스의 초기화(초기 상태 설정)
  // - 속성(프로퍼티)의 초기값 설정

  //? 생성자 함수 사용법
  // : constructor 키워드를 사용하여 클래스 내부에 정의
  // : 인자를 받아서 클래스의 프로퍼티를 초기화

  //? 특징
  // - 클래스는 단 하나의 생성자만 가질 수 있다.
  // - 반환값X 함수, 자신을 new 키워드와 함께 호출하는 대상(클래스)의 새로운 인스턴스를 암시적으로 반환
  // - 필수적인 요소 X, 생성자가 없는 경우 자동으로 빈 생성자를 추가

  //! '사람' 클래스 정의
  class Person {
    name: string;
    age: number;
  } 

  contructor(name:string, age:number) {
    this.name = name;
    this.age = age;
  }

  // 메서드
  describe(): string {
    return `$(this.name) is ${this.age} years old`;
  }
  // 클래스를 통해 객체를 생성하는 경우
  // new 키워드와 클래스의 생성자를 통해 인스턴스화
  // 기본 생략된 생성자가 아닌 사용자 정의 생성자를 작성하는 경우
  // , 해당 생성자의 매개변수에 맞춰 인자를 전달해야 함!
  let person1 = new Person('박용재', 27);
  console.log(person1.name);
  console.log(person1.describe());

  let person2 = new Person('김채원', 25);
  console.log(peron2.name);
  console.log(person2.describe());

  person1.name = '권은비';
  console.log(person1.name);
  console.log(person2.name);

  // : 클래스 생성자를 통해 클래스의 인스턴스가 생성될 때 실행될 로직을 정의
  // : 매개변수와 반환값이 없는 함수와 유사

  function example() {
    console.log('함수 실행시 출력됩니다.');
  }
  example();

  class Dog {
    constructor(breakingSound: string) {
      console.log(${breakingSound});
    }
  }

  let dog1 = new Dog('멍멍멍!!!');

  //! 클래스의 속성의 활용

  // 1. 속성 기본값
  // : 함수의 기본 인자와 유사한 개념
  // : 클래스 속성에도 생성자로 초기화 시키기 전에 기본값 제공이 가능

  // 2. 읽기 전용 속성
  // : readonly 키워드를 사용하여 읽기 전용 속성 정의
  // : 속성 선언 또는 생성자 외의 장소에서 해당 속성에 값 할당 불가

  class Triangle {
    // vertices: number;

    // constructor() {
    //   this.vertices = 3;
    // }

    vertices: number = 6;
    readonly height: number;

    constructor(height: number) {
      this. height = height;
    }
  } 

  let triangle = new Triangle(5);
  console.log(triangle.height);

  triangle.vertices = 4;
  // triangle.height = 4; - Error

  //! this 키워드
  // : 클래스의 현재 인스턴스를 참조하는 키워드
  // : 클래스의 멤버변수나 메서드에 접근할 때 사용

  class Human {
    age: number;
    intervalId: number;

    constructor() {
      this.age = 0;

      this.intervalId = setInterval(() => {
        this.age++;

        console.log(this.age);
      },5000);
    }
  }

  let a = new Human();
  console.log(a.age);

  setTimeout(() => {
    a.stopAging();
  }, 15000);

  // 메서드나 생성자 내에서는 클래스의 멤버에 접근할 때 this를 사용
  // 화살표함수의 경우 해당 함수 내에서 this를 만들어내지 못하기 때문에 해당 함수가 선언된 범위의 this를 찾아서 사용
  // : 코드의 논리 이해가 필수적

}

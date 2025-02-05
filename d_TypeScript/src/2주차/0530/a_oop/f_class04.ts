// f_class04.ts
{
  //! 상속(Inheritance)

  //? 상속의 정의
  // : 한 클래스(부모 클래스)의 속성과 메서드를
  //   다른 클래스(자식 클래스)가 받아 사용할 수 있는 기능
  // - 코드의 재사용성을 증가, 유지보수성 개선

  //? 구현 방법
  // extends(확장) 키워드를 사용하여 상속을 구현
  // : 자식 클래스는 부모 클래스의 모든 public과 protected 멤버를 상속받음.

  //? 상속의 관계
  // 부모 클래스(슈퍼 클래스, 상위 클래스): 기능과 메서드를 제공
  // 자식 클래스(서브 클래스, 하위 클래스): 기능과 메서드를 전달받음

  //? 상속 예제
  // 1. 동물 클래스를 정의
  class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    move(distance: number = 0) {
      console.log(`${this.name} move ${distance}M`);
    }
  }

  // 2. Animal 클래스를 상속받는 Dog 클래스 정의
  // Animal 클래스 - 부모 클래스
  // Dog 클래스 - 자식 클래스
  class Dog extends Animal {
    constructor(name: string) {
      // super 메서드
      // : 부모 클래스의 호출자를 반드시!! 호출해야함
      super(name);
    }

    bark() {
      console.log('멍멍멍!!');
    }

    // move(distance: number = 0) {
    //   console.log(`${this.name} move ${distance}M`);
    // }
    // >>>>> Animal 클래스에서 상속받은 메서드
  }

  let dog1 = new Dog('캔디');
  dog1.move(20);
  dog1.bark();
  console.log(dog1.name);

  //! 메서드 오버라이딩(Overriding)
  // : 자식 클래스에서 부모 클래스의 메서드를 재정의
  // : 기존의 메서드를 자식 클래스에 맞게 변경하여 사용

  //? 구현 방법
  // : 자식 클래스에서 부모 클래스와 동일한 이름의 메서드를 선언하여 오버라이딩
  // : 필요에 따라 super 키워드를 사용하여 부모 클래스의 메서드 호출 가능

  //? 오버라이딩 예제
  // Animal 부모 클래스를 상속받는 Bird 자식 클래스
  class Bird extends Animal {
    constructor(name: string) {
      super(name);
    }

    move(distance: number = 5) {
      console.log('FLyING~~~');
      super.move(distance);
    }

    // 상속받은 기능을 해당 (자식)클래스에 맞게 재정의
    // : 하나의 기능을 여러 이름이 아닌 하나의 이름으로 묶어서 설정 가능
  }

  const bird = new Bird('짹짹이');
  bird.move();

  const bird2 = new Animal('꽉꽉이');
  bird2.move();
}

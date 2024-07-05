{
  //! 정적(Static) 메소드와 프로퍼티

  //? 정의
  // : 클래스 인스턴스가 아닌 클래스 자체에 바인딩된 메소드와 프로퍼티
  // : 인스턴스 없이도 클래스 이름을 통해 직접 접근하고 호출 가능

  // 바인딩(binding)
  // : 프로그램에 사용된 구성 요소의 실제 값 또는 프로퍼티를 결정짓는 행위

  // 주의 사항
  // : static 멤버(메소드와 속성)는 인스턴스와 독립적이기 때문에
  // : static 메소드 내에서는 this 키워드를 사용하여 접근 할 수 X
  // * this 키워드는 객체!!!! 
  // : 인스턴스별로 데이터를 유지할 필요가 없는 공통 기능 및 데이터에 적합

  //? 사용방법
  // static 키워드를 사용하여 정의
  
  class Circle {
    static pi: number = 3.14;

    static calculateArea(radius: number) {
      // 정적 메서드와 속성 호출 방법
      // : 클래스명.메서드()
      // : 클래스명.속성
      return Circle.pi * radius * radius;
    }
  }
  
  console.log(Circle.pi);
  console.log(Circle.calculateArea(10));
  console.log(Circle.calculateArea(5));
  

  //! 접근자(Getter / Setter)

  //? 정의
  // getter
  // : 클래스의 특정 프로퍼티(속성) 값을 읽을 때 사용되는 메소드
  // setter
  // : 클래스의 특정 프로퍼티(속성) 값을 설정할 때 사용되는 메소드

  class Person {
    private name: string;

    constructor(name:string) {
      this.name = name;
    }
  }

  let person1 = new Person('박용재');
  // console.log(person1.name);
  // person1.name = '김민주';
  // console.log(person1.name);



  //? 사용 방법
  // : get과 set 키워드를 사용하여 정의
  // : 속성 값의 유효성 검사, 계산된 프로퍼티 등에 사용

  // : 데이터를 보다 안전하게 관리
  // : 복잡한 로직을 캡슐화
  // : >> 클래스 외부에는 간단한 인터페이스만 제공 가능


  class Employee {
    private _fullName: string = '';

    // private 멤버변수에 접근하여 반환하는 getter
    get getFullName(): string {
      return this._fullName;
    }

    // private 멤버변수에 접근하여 반환하는 setter
    set setFullName(newName: string) {
      if (newName.length > 0) {
        this._fullName = newName;
      }
      else {
        console.log('Name can not be empty');
      }
    }
  }

  let em1 = new Employee();

  // 접근자 메서드는 () 없이 사용 가능
  // setter 에 대한 사용법
  em1.setFullName = '박용재';

  // getter 에 대한 사용법
  let name = em1.getFullName;
  
  console.log(name);

}

// ts-node a_interface.ts
{
  //! 1. 인터페이스 정의
  // : 객체 구조를 정의하는 타입스크립트의 기능 / 함수 타입 정의 시에도 사용
  // >> 객체가 어떤 프로퍼티와 메서드를 가져야 하는지 명시

  // : 컴파일 시간에 타입 체킹을 위해 사용되는 개념
  // - 코드의 가독성과 유지 보수성을 향상
  // - 다양한 구현체에 동일한 인터페이스를 적용하여 일관성과 재사용성을 제공

  // 타입 속성
  type userType = {
    name: string;
    age: number;
  }

  type adminUserType = userType & { admin: boolean};

  type manyType = number | string | boolean;

  // 인터페이스 명시
  // : interface 키워드를 사용하여 명시
  // : 인터페이스명은 대문자로 시작
  // : type 속성의 선택적 프로퍼티(옵셔널)와 읽기 전용 프로퍼티 지정 가능
  interface IUser {
    // 객체의 속성
    name?: string;
    readonly age: number;
    // 객체의 메서드
    greet(): void;
  }

  let employee: IUser = {
    name: '박용재',
    age: 26,
    greet() {
      console.log('HELLO !');
    }
  }

  //! 인터페이스의 역할
  // 1. 타입 체킹: 개발자가 의도한 대로 코드 작동 가능
  // 2. 코드 가독성 향상
  // 3. 코드 재사용 촉진
  // 4. 확장 가능성
  // : 기본 인터페이스를 확장(상속)하여 멤버를 추가하거나 재정의 가능

  //! 클래스에서 인터페이스 구현
  // : 클래스는 implements 키워드를 사용하여 인터페이스를 구현
  interface IPerson {
    name: string;
    greet(): void;
  }
  
  class Student implements IPerson {
    name: string;
    
    constructor(name: string) {
      this.name = name;
    }
    greet(): void {
      console.log(`Hello, my name is ${this.name}`);
    }
  }

  // Student 클래스 사용 예시
  const student = new Student('박용재');
  student.greet();


  //! 확장된 인터페이스
  // : extends 키워드를 사용하여 확장

  // 도형을 정의하는 인터페이스
  interface Shape {
    color: string;
    linewidth: number;
  }

  interface Square extends Shape {
    // Shape의 기능을 확장하여 갖는 Square 인터페이스
    // color: string; linewidth: number; 을 모두 가지고 있음
    sidelength: number;
  }


  // 사각형을 정의하는 인터페이스
  // : 도형의 인터페이스를 상속받음(Shape이 가진 모든 정의를 가짐)

  // : 공통된 속성을 가진 인터페이스를 여러 번 정의하지 않아도 되기 때문에 코드 중복을 줄임

  //& ===== 인터페이스(interface) VS 타입 별칭(type) ===== //

  //! 인터페이스

  // - 확장 가능성 (Extendability)
  //   : 여러 다른 인터페이스와 클래스에서 확장 가능
  //     , 객체 지향 프로그래밍의 상속 개념과 유사

  // +) 타입 별칭은 '&'연산자를 사용하여 확장 가능

  // - 병합 선언 (Declaration Merging)
  //   : 동일한 이름을 가진 인터페이스가 여러 번 선언되면 TypeScript는 이를 하나의 인터페이스로 병합
  //     , 타입 별칭은 불가능한 기능
  
  interface Shape {
    name: string;
  }

  // >> interface Shape {
  //      color: string;
  //      linewidth: number;
  //      name: string;
  //    }
  // >> 같은 의미

  // - 구조적 타이핑 (Structural Typing)
  //   : TypeScript는 구조적 타이핑을 사용, 인터페이스는 해당 구조를 만족하는 모든 객체를 타입으로 인정

  //! 타입 별칭
  //? - 유연성 (Flexibility)
  //   : 타입 별칭은 객체 타입뿐만 아니라 원시 타입, 유니온 타입, 튜플 등을 포함한 모든 타입을 별칭으로 지정 가능

  // +) 인터페이스는 객체의 구조만 정의할 수 있기 때문에 원시 타입이나 유니온 타입, 튜플 타입 등을 직접적으로 표현 X

  // 인터페이스는 객체 구조를 정의하는 데 사용됨

  // 원시 타입이나 유니온 타입, 튜플 타입은 인터페이스로 정의할 수 없음
  // 다음과 같은 코드는 불가능
  // >> interface Id = number | string;

  //? - 단일 선언 (Single Declaration)
  //   : 타입 별칭은 단일 선언만 가능, 동일한 이름을 가진 타입을 다시 선언할 수 X
  //   : 이름 충돌을 방지

  //? - 리터럴 타입 (Literal Types)
  //   : 리터럴 타입과 결합하여 특정 값 집합을 타입으로 정의 가능

  type Status = 'success' | 'error' | 'loading';

  function printStatus(status: Status): void {
    console.log(`Status is ${status}`);
  }

  printStatus('success');
  printStatus('error');
  printStatus('loading');


  // +) 인터페이스의 한계 예시
  // 리터럴 타입을 정의할 수 없음
  // >> interface IStatus = 'success' | 'error' | 'loading';

  //# 인터페이스 예시: 확장 가능한 사용자 정보 관리 시스템
  
  interface User {
    id: number;
    name: string;
  }

  interface Admin extends User {
    permissions: string[];
  }

  interface Guest extends User {
    visitDate: Date;
  }

  const admin1: Admin = {
    id: 1,
    name: '박용재',
    permissions: ['update', 'delete']
  }

  const guest1: Guest = {
    id: 2,
    name: '김민주',
    visitDate: new Date
  }



  //# 타입 별칭 예시: 복합 타입을 사용하는 API 응답 처리
  type ApiResponse = SuccessResponse | ErrorResponse;

  type SuccessResponse = {
    status: 'success';
    data: any;
  }

  type ErrorResponse = {
    status: 'error';
    error: string;
  }

  const response: ApiResponse = {
    status: 'success',
    data: {
      message: '성공적으로 작동되었습니다.'
    }
  }

  function handleResponse(response: ApiResponse) {
    if (response.status === 'success') {
      console.log('Data', response.data);
    }
    else {
      console.error('Error', response.error);
    }
  }

  handleResponse(response);

  











}

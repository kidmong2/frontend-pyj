{
  // ============ 유니언 =============//
  //! 1. Union 타입을 사용한 변수 선언
  // string, number, boolean 중 하나의 타입을 가질 수 있는 MixedType 변수를 선언하고, 각 타입에 해당하는 값을 할당하는 예시 코드를 작성
  type Any = string | number | boolean;

  let myVariable: Any = '하나둘셋넷';
  myVariable = 12345;
  myVariable = true;

  //! 2. 함수 매개변수에 Union 타입 적용
  // number와 string 타입 중 하나를 매개변수로 받아, 해당 값이 number일 경우 숫자를 2배로 증가시키고, string일 경우 그대로 반환하는 함수 doubleOrNothing을 작성

  type Union = number | string;
  
  function doubleOrNothing(input: Union): void {
    if (typeof input === 'number') {
      console.log(input * 2);
    }
    else {
      console.log(input);
    }
  }

  doubleOrNothing(500);
  doubleOrNothing('문자열 100');



  //! 3. Union 타입과 타입 가드를 활용한 고급 예제
  // Admin과 User 타입 명시
  // - Admin은 id (number 타입)와 isAdmin (boolean 타입) 속성을, User는 id (number 타입)와 username (string 타입) 속성 포함
  // - 두 타입의 유니온 타입을 사용하여 Person 타입을 선언하고, id, isAdmin, username 중 적절한 속성을 가진 객체를 생성
  // - Person2 타입의 객체를 매개변수로 받아 Admin인지 User인지를 구분해 출력하는 함수 identifyPerson을 작성

  type Admin = {
    id: number;
    isAdmin: boolean;
  }

  type User = {
    id: number;
    username: string;
  }

  type Person2 = Admin | User;

  function identifyPerson(person: Person2) {
    if ('isAdmin' in person) {
      console.log('This person is an Admin');
    }
    else if ('username' in person) {
      console.log('This person is a User');
    }
  }

  const adminPerson: Person2 = {id: 1, isAdmin: true};
  const userPerson: Person2 = {id: 2, username: 'aasps'};

  console.log(adminPerson);
  console.log(userPerson);




   //! 문제4: 실제 프로젝트에서의 Union 활용
  //: 실제 서버와의 통신에 있어 다양한 형태의 응답을 처리하는 방법

  // - 사용자 정보가 있는 경우: {name: string, email: string}
  // - 사용자 정보가 없는 경우: {error: string}

  type Success = {
    name: string;
    email: string;
  }

  type Fail = {
    error: string;
  }

  type UserResponse = Success | Fail;

  function handleResponse(response: UserResponse) {
    // in 연산자 (속성명 in 객체명)
    // : 객체의 속성이 존재하면 true, 없으면 false 반환
    if ('error' in response) {
      console.error(response.error);
    }
    else {
      console.log(`${response.name}: ${response.email}`);
    }
  }

  handleResponse( {name: '박용재', email: 'example@gmail.com'});
  handleResponse( {error: 'User not Found'});


  // ============ 인터섹션 =============//
  //! 문제 1: 기본 Intersection 타입 생성
  // - Person 타입과 ContactDetails 타입을 결합하여 Employee 타입을 생성
  // - Employee 타입은 Person의 모든 속성(name, age)과 ContactDetails의 모든 속성(email, phone)을 포함
  
  type Person = {
    name: string;
    age: number;
  }

  type ContactDetails = {
    email: string;
    phone: string;
  }

  type Employee = Person & ContactDetails;

  let employee1: Employee = {
    name: '박용재',
    age: 26,
    email: 'example@gmail.com',
    phone: '010-3948-4949'
  }

  //! 문제 2: 함수 반환 타입으로 Intersection 사용
  // - Vehicle 타입과 Engine 타입을 결합하여 Car 타입 생성
  // - createCar 함수를 구현하여, 주어진 Vehicle과 Engine 정보를 받아 Car 객체를 반환하도록 구현
  type Vehicle = {
    make: string;
    model: string;
  };

  type Engine = {
    engineType: string;
    horsepower: number;
  };

  type Car = Vehicle & Engine;

  function createCar(A: Vehicle, B: Engine): Car {
    return {...A, ...B}
  }

  let v1: Vehicle = {
    make: 'KIA',
    model: 'K9'
  }

  let engine: Engine = {
    engineType: 'electronic',
    horsepower: 300
  }

  let newCar = createCar(v1, engine)
  console.log(newCar);



  //! 문제 3: 복잡한 Intersection 타입 활용
  // - TeamMember 타입과 Project 타입을 결합하여 TeamMemberWithProject 타입을 생성
  // - 해당 타입을 사용해 assignProjectToTeamMember 함수를 구현
  // - 함수는 TeamMember 객체와 Project 정보를 받아서, 이를 결합한 TeamMemberWithProject 객체를 반환

  type TeamMember = {
    memberId: string;
    name: string;
  };

  type Project = {
    projectId: string;
    projectName: string;
  };

  type TeamMemberWithProject = TeamMember & Project;

  function assignProjectToTeamMember(A: TeamMember, B: Project): void {

  }







}

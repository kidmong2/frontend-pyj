{
  //! 직원 관리 시스템
  // Employee 기본 클래스 생성
  class Employee {
    // 속성: name (문자열)과 id (숫자)
    // name: string;
    // id: number;
    // 생성자를 사용하여 초기화
    constructor(public name: string, public id: number){}

    // 메서드: displayInfo() 메서드 - 직원의 정보를 출력
    displayInfo() {
      console.log(`Name: ${this.name}, ID: ${this.id}`);
    }
    
  }

  // Manager 클래스 생성
  // : Employee 클래스를 확장
  class Manager extends Employee {
    // 추가 속성: subordinates (Employee 배열)
    private subordinates: Employee[] = [];
    // 부모 클래스의 생성자를 호출
    constructor (name: string, id: number) {
      super(name, id);
    }

    // 메서드: addSubordinate(employee: Employee) 메서드 - 하위 직원을 목록에 추가
    addSubordinate (employee: Employee) {
      this.subordinates.push(employee);
    }

    // 메서드: listSubordinates() - 모든 하위 직원의 정보를 출력
    listSubordiates(): void {
      console.log(`Manager: ${this.name}`);
      this.subordinates.forEach((employee) => employee.displayInfo());
    }
  }

  const managerA = new Manager('박용재', 1);
  const emp1 = new Employee('문주승',2);
  const emp2 = new Employee('신승기', 3);

  managerA.addSubordinate(emp1);
  managerA.addSubordinate(emp2);

  managerA.listSubordiates();
// Manager: 박용재
// Name: 문주승, ID: 2
// Name: 신승기, ID: 3

} // 닫히는 중괄호

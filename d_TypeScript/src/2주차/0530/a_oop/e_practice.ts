// e_practice.ts
{
//! Car 클래스 생성
// - 클래스는 model과 year 두 개의 멤버 변수

// - 매개변수로 두 개의 멤버 변수를 받는 생성자 생성

// : 매개변수에 접근 제한자를 사용하여 변수 선언과 생성자의 초기화를 결합하여 표시

// : getModelAndYear라는 메서드 포함
// "This car is a {model} from {year}."를 출력

class Car {
  // public model: string;
  // public year: number;
  
  // constrctor (model: string, year: number) {
  //   this.model = model;
  //   this.year = year;
  // }

  constructor (
    public model: string, 
    public year: number) {}

  getModelAndYear() {
    console.log(`This car is a ${this.model} from ${this.year}`);
  }


}

//! car1 인스턴스 생성
// : model은 '아이오닉5' year은 '2024'로 설정
// : car1 인스턴스의 getModelAndYear 메서드를 호출

let car1 = new Car ('아이오닉5', 2024);
car1.getModelAndYear();

//! 은행 계좌 클래스 생성 예제

// 요구 사항

// BankAccount 클래스 생성

class BankAccount {
  // - accountNumber(계좌 번호), balance(잔액) 속성은 외부에서 직접 접근할 수 없는 속성
  
  // - 생성자: 계좌 번호와 초기 잔액을 매개변수로 받아 객체를 초기화
  //           초기 잔액은 선택적으로 처리(기본값 0)
  
  constructor(private accountNumber: string, private balance: number = 0) {}

  // - 메서드
  // 1. deposit(amount: number): 입금액을 받아 잔액을 증가
  deposit(amount: number) {
    this.balance += amount;
    console.log(`입금액: ${amount}, 현재 잔액: ${this.balance}`);
  }

  // 2. withdraw(amount: number): 출금액을 받아 잔액을 감소
  //                            잔액보다 많은 금액을 출금할 수 X -> 출금액이 잔고를 초과했습니다!

  withdraw(amount: number) {
    if (amount > this.balance) {
      console.log('출금액이 잔고를 초과했습니다.');
    }
    else {
      this.balance -= amount;
      console.log(`출금액: ${amount}, 현재 잔액: ${this.balance}`);
    }
  }



  // 3. getBalance(): 현재 잔액을 반환
  getBalance() {
    console.log(`현재 잔액은 ${this.balance}`);
  }
  // 4. getAccountNumber(): 계좌번호를 반환
  getAccountNumber() {
    console.log(`계좌번호 : ${this.accountNumber}`);
  }
}

let accountA = new BankAccount('123-456');

accountA.deposit(5000);

}
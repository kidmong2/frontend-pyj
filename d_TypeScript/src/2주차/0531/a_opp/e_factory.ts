{
  //& 팩토리 패턴(Factory Pattern) 
  
  // : 객체 지향 프로그래밍에서 자주 사용되는 디자인 패턴 중 하나

  // : 객체의 생성을 캡슐화하여 클라이언트 코드가 생성되는 객체의 구체적인 타입에 의존하지 않도록 하는 것

  // >> 코드의 유연성을 높이고, 변경에 대한 영향을 최소화 가능

  //? 팩토리 패턴의 주요 구성 요소
  // 1) Product
  // : 생성될 객체들의 공통 인터페이스
  // : 팩토리는 이 인터페이스를 구현하는 다양한 객체들을 생성 가능

  // 2) ConcreteProduct
  // : Product 인터페이스를 구현하는 구체적인 클래스들
  
  // 3) Creator
  // : Product 객체를 생성하는 메서드(factoryMethod)를 선언하는 인터페이스
  
  // 4) ConcreteCreator
  // : Creator 인터페이스를 구현하며, factoryMethod를 오버라이딩하여 ConcreteProduct 인스턴스를 생성
  
  //? 팩토리 패턴의 장점
  // 결합도 감소
  // : 클라이언트 코드가 구체적인 클래스를 몰라도 객체를 생성 가능
  //   , 시스템의 결합도를 낮춤

  // 코드 유연성
  // : 새로운 ConcreteProduct 클래스를 추가하더라도 기존 코드를 변경하지 않고 확장 가능

  // 재사용성 향상
  // : 동일한 방법으로 다양한 객체를 재사용 가능

  //! TypeScript에서의 팩토리 패턴 구현 예제

  interface Component {
    render(): void;
  }

  // Button 구현
  class Button implements Component {
    render(): void {
      console.log('버튼이 렌더링 됩니다');
    }
  }
  
  // 체크박스 구현
  class Checkbox implements Component {
    render(): void {
      console.log('체크박스가 렌더링 됩니다');
    }
  }

  // Component factory
  class ComponentFactory {
    static createComponent(type: string): Component {
      switch(type) {
        case 'button':
          return new Button();
        case 'checkbox':
          return new Checkbox();
        default:
          throw new Error('유효하지 않음.');
      }
    }
  }

  const button = ComponentFactory.createComponent('button');
  button.render();

  const checkbox = ComponentFactory.createComponent('checkbox');
  checkbox.render();








  //# ===========추가 예제============//

  // : 여러 타입의 결제 방식을 처리할 수 있는 결제 시스템을 설계

  // - 다양한 결제 서비스(예: 신용 카드, 페이팔, 은행 이체 등)를 처리
  // , 클라이언트 코드는 구체적인 결제 방식의 클래스를 몰라도 결제를 진행 가능

  //! 요구사항
  // 다양한 결제 방식 지원
  // : 신용 카드, 페이팔, 은행 이체 등 다양한 결제 방법을 지원
  
  // 결제 방식 쉽게 추가 가능
  // : 새로운 결제 방식을 추가할 때 기존 코드를 수정하지 않고 확장 가능

  // 결제 방식에 따른 처리 캡슐화
  // : 각 결제 방식에 따른 처리 로직은 해당 결제 클래스 내부에서 완결

  //? 팩토리 패턴 구성 요소
  // PaymentMethod (Interface)
  // : 모든 결제 방식이 구현해야 하는 인터페이스
  //   , 주로 결제를 실행하는 메소드를 포함
  
  // ConcretePaymentMethods
  // : PaymentMethod 인터페이스를 구현하는 구체적인 결제 방식 클래스
  
  // PaymentFactory
  // : 결제 방식 객체를 생성하는 팩토리 클래스

  //! 구현 코드
  // 결제 방법 인터페이스
  interface PaymentMethod {
    pay(amount: number): void;
  }

  // 신용 카드 결제 구현
  class CreditCard implements PaymentMethod {
    pay(amount: number): void {
      console.log(`Paid ${amount} using credit card`);
    }
  }
  // 페이팔 결제 구현
  class Paypal implements PaymentMethod {
    pay(amount: number): void {
      console.log(`Paid ${amount} using Paypal`);
    }
  }
  // 은행 이체 결제 구현
  class BankTransfer implements PaymentMethod {
    pay(amount: number): void {
      console.log(`Paid ${amount} using Banktransfer`);
    }
  }
  // 결제 방법 팩토리
  class PaymentFactory {
    static createPaymentMethod(method: string): PaymentMethod {
      switch (method) {
        case 'creditcard':
          return new CreditCard();
        case 'paypal':
          return new Paypal();
        case 'BankTransfer':
          return new BankTransfer();
        default:
          throw new Error('지원하지 않음');
      }
    }
  }

  // 클라이언트 코드

  const paymentMethod = PaymentFactory.createPaymentMethod('paypal');
  paymentMethod.pay(100);

  const anotherpaymentMethod = PaymentFactory.createPaymentMethod('creditcard');
  paymentMethod.pay(200);


}

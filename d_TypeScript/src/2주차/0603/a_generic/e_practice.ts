// e_practice.ts
{
  //! 제네릭, 클래스, 배열 메서드를 활용한 회원 관리 프로그램 구현
  
  // 요구사항 정리(비즈니스 로직)
  
  //? 회원 정보
  // : name(이름), age(나이), active(활성 상태)의 속성을 가짐
  // - active 속성은 기본값으로 true값을 가짐(회원이 기본적으로 활성 상태)
  
  //? 회원 관리 프로그램
  // : 회원을 추가(addMember)
  // : 회원을 검색(findMember)
  // : 회원을 제거(removeMember)
  // : 활성화된 회원만 필터링(filterActiveMember)
  
  // - 기능 추가
  // 1. Member 클래스 확장
  // : Member 클래스를 상속받는 VIPMember 클래스를 정의
  // - rewardPoints(보상점수) 속성을 가짐
  //   : 생성자를 통해 초기화 가능 (Member 클래스의 속성은 super())
  
  // 2. 회원 나이 평균 계산하기
  // : Membership 클래스에 getAverageAge 메서드를 추가
  // - 현재 목록에 있는 모든 회원들의 나이 평균을 계산하여 반환
  
  // 3. 비활성 회원 검색 기능을 추가
  // : Membership 클래스에 filterInactiveMembers 메서드를 추가
  // - 활성 상태가 아닌(active 속성값이 false) 회원들만 필터링하여 반환

  class Member {
    constructor (
      public name: string,
      public age: number,
      public active: boolean = true
    ) {}
  }

  class VIPMember extends Member {
    constructor (name: string, age: number, public rewardPoints: number, active: boolean = true) {
      super(name, age, active);
      this.rewardPoints = rewardPoints;
    }
  }

  class Membership<T extends Member>{
    private members: T[] = [];

    addMember(member: T) {
      this.members.push(member);
    }

    findMember(name: string): T | undefined {
      return this.members.find(member => member.name === name);
    }

    removeMember(name: string): void {
      const index = this.members.findIndex(member => member.name === name); 
      if (index !== -1) {
        this.members.splice(index,1);
      }
    }

    filterActiveMembers(): T[] {
      return this.members.filter(member => member.active);
    }

    filterInteractiveMembers(): T[] {
      return this.members.filter(member => !member.active);
    }

    getAverageAge() {
      if (this.members.length === 0) return 0;

      const totalAge = this.members.reduce((acc, member) => acc + member.age, 0);

      return totalAge / this.members.length;
    }





  }

  let membership = new Membership<Member>();

  let memberA = new Member('박용재', 25);
  membership.addMember(memberA);
  membership.addMember(new Member('유해진', 34, false));
  membership.addMember(new Member('류준열', 25));
  membership.addMember(new Member('강동원', 30, false));

  // VIP 멤버

  membership.addMember(new VIPMember('윤가이', 22, 500));
  membership.addMember(new VIPMember('김소현', 27, 100,false));
  membership.addMember(new VIPMember('고윤정', 32, 220));


  console.log(membership.findMember('류준열'));
  // Member { name: '류준열', age: 25, active: true }

  console.log(membership.findMember('김유정'));
  // undefined

  let activeMembers = membership.filterActiveMembers();
  console.log(activeMembers);
  // [
  // Member { name: '박용재', age: 25, active: true },
  // Member { name: '류준열', age: 25, active: true }
  // ]

  membership.removeMember('박용재');
  console.log(membership.findMember('박용재'));
  // undefined

  console.log(membership.getAverageAge());

  let interacticeMembers = membership.filterInteractiveMembers();
  console.log(interacticeMembers);

  let vipMembership = new Membership<VIPMember>();
  vipMembership.addMember(new VIPMember('이정재', 30, 1000));
  vipMembership.addMember(new VIPMember('황정민', 36, 600, false));
  vipMembership.addMember(new VIPMember('이병헌', 30, 200));
  vipMembership.addMember(new VIPMember('손승헌', 30, 600,false));
  
  console.log(vipMembership.getAverageAge());
  console.log(vipMembership.filterActiveMembers());
  console.log(vipMembership.filterInteractiveMembers());
}
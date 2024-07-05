import React from "react";
/*
! Props를 사용하는 사용자 프로필 컴포넌트 만들기
? 요구 사항
- UserProfile 컴포넌트를 만드세요.
- 이 컴포넌트는 user 객체를 props로 받아야 하며, user 객체는 name, email, age 속성을 포함해야 합니다.
- 이 컴포넌트는 사용자의 이름(h1), 이메일(p), 나이(p)를 보여주는 간단한 UI를 렌더링해야 합니다.

! 조건부 렌더링을 사용하여 할인 메시지 표시하기
? 요구 사항
- DiscountMessage 컴포넌트 생성
- isDiscountActive라는 boolean props를 전달 받기
- 할인이 활성화되어 있으면 "할인 중!"이라는 메시지를 표시하고, 그렇지 않으면 "현재 할인되지 않음."이라는 메시지를 표시 
>> 삼항 연산자를 사용

! 다중 조건 필터링 및 정렬
? employees 배열에는 여러 직원의 정보가 저장
- role이 'developer'이고, experience가 3년 이상인 직원을 찾아 그들의 이름과 경력을 <li>로 표시하되, 경력에 따라 내림차순으로 정렬
- 각 <li>에는 직원의 id를 키로 사용

const employees = [
  { id: 1, name: '이승아', role: 'developer', experience: 5 },
  { id: 2, name: '정주연', role: 'designer', experience: 2 },
  { id: 3, name: '전예찬', role: 'developer', experience: 3 },
  { id: 4, name: '이도경', role: 'manager', experience: 7 },
  { id: 5, name: '정혜윤', role: 'developer', experience: 1 }
];

*/

//! User 인터페이스 정의
interface User {
  name: string;
  email: string;
  age: number;
}

//! UserProfile 컴포넌트의 props 인터페이스를 정의
interface UserProfileProps {
  user: User;
}

//! DiscountMessage 컴포넌트의 props 인터페이스 정의
interface DiscountMessageProps {
  isDisCountActive: boolean;
}

//! DiscountMessage 컴포넌트를 정의
function DiscountMessage({ isDisCountActive }: DiscountMessageProps) {
  return (
    <div>
      {/* 
      삼항연산자를 사용 >> 할인 메시지를 조건부로 표시 
        - true : strong 태그에 '할인중'
        - false : '현재 할인되지 않음' 텍스트
      */}

      {isDisCountActive ? "할인중" : "현재 할인하지 않음"}
    </div>
  );
}

//! UserProfile 컴포넌트를 정의
function UserProfile({ user }: UserProfileProps) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

function FilteredEmployeeList() {
  const employees = [
    { id: 1, name: "이승아", role: "developer", experience: 5 },
    { id: 2, name: "정주연", role: "designer", experience: 2 },
    { id: 3, name: "전예찬", role: "developer", experience: 3 },
    { id: 4, name: "이도경", role: "manager", experience: 7 },
    { id: 5, name: "정혜윤", role: "developer", experience: 1 },
  ];

  //? role이 developer이고 experience가 3 이상인 직원들을 필터링

  const filteredAndSorted = employees
    .filter(
      (employee) => employee.role === "developer" && employee.experience >= 3
    )
    .sort((a, b) => b.experience - a.experience) // 내림차순 정리
    .map((employee) => (
      <li>
        {employee.name} ({employee.experience})
      </li>
    ));

  return <ul>{filteredAndSorted}</ul>;
}

export default function Practice0625() {
  const user: User = {
    name: "박용재",
    email: "example@gmail.com",
    age: 26,
  };

  return (
    <div>
      <UserProfile user={user} />

      <hr />
      <DiscountMessage isDisCountActive={true} />

      <hr />
      <FilteredEmployeeList />
    </div>
  );
}

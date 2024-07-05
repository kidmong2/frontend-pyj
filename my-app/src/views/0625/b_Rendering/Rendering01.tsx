import React from "react";
import { FaStar } from "react-icons/fa";

interface ItemType {
  // 여행을 위한 짐 싸기
  // 짐 항목의 이름, 준비 여부를 props로 전달 받음
  name: string;
  isPacked: boolean;
}

function Item({ name, isPacked }: ItemType) {
  //! if 조건문을 사용한 조건부 렌더링
  // isPacked가 true의 값인 경우: 짐 싸기 완료
  // if (isPacked) {
  //   return <li className='item'>{name} 완료  ✔️</li>
  // } else {
  //   return <li className='item'>{name} 미완료 ❌</li>
  // }

  // 조건부로 아무것도 반환하지 않는 경우: null 반환
  // return null;

  //! 삼항 연산자를 사용한 조건부 렌더링*****
  // return (
  //   <li className='item'>
  //     {/* HTML 영역 내에서 JS 문법 사용시: {} 사용 */}
  //     {isPacked ? name + ' ✔️' : name + ' ❌'}
  //   </li>
  // );

  //! 논리 연산자(&&)를 사용한 조건부 렌더링*****
  return (
    <li className="item">
      {/* 
        && 연산자
        : A && B 둘 다 true이야만 true 반환

        >> A 값이 false인 경우 B의 값 출력? (X)
        : B 자체를 읽지 않는다
        >> A 값이 true인 경우 B의 값 출력? (O)
        : B 읽는다
      */}
      {name} {isPacked && "✔️"}
    </li>
  );
}

// react-icons 외부 라이브러리 사용
// : 리액트에서 다양한 아이콘을 사용하기 위한 라이브러리
// npm install react-icons
export default function Rendering01() {
  const score = 10;
  const stars: JSX.Element[] = [];

  for (let i = 0; i < score; i++) {
    stars.push(<FaStar key={i} />);
  }

  return (
    <section>
      <p>여행용 짐 목록</p>
      <ul>
        <Item name="과자" isPacked={true} />
        <Item name="음료수" isPacked={true} />
        <Item name="김밥" isPacked={false} />
      </ul>

      <div style={{ margin: "20px", border: "2px solid black" }}>
        {/*
        score 점수기
        : 0 이상인 경우 별이 출력, 미만인 경우 출력 X
        
      */}
        {score >= 0 && <FaStar />}

        <div>{stars}</div>
      </div>
    </section>
  );
}

import React from "react";

/*
! JSX(TSX)
: JS 파일 내에서 HTML과 유사한 마크업을 작성할 수 있도록 해주는 JS의 구문 확장 문법

? 사용 목적
  : 선언적 뷰(UI를 직관적으로 설계)
  : 불필요한 DOM 설정이 필요 X

? 특징
  : JS + HTML(XML) 형태로 엄격한 문법 체계를 가짐
  : JSX 파일 내에서 Babel을 사용하여 JS로 변환하려면 XML 문법을 준수해야 만 가능

? JSX 문법 규칙
1. 단일 루트 노드
  : 하나의 '컴포넌트'는 단일 루트 노드만 반환
  단일 루트 노트
  - 최상단의 루트 태그가 존재해야 한다.


2. 태그 닫기
  : 태그는 반드시 닫혀있어야 한다.
  : input, br(줄바꿈), hr(수평선), img 태그 사용 시 주의!
  : 닫히는 꺽쇠괄호에 /가 첨부되어 있어야 한다.

3. 대소문자 구분
  : 태그 내의 이름이 대소문자로 구분
  : 소문자 - 'HTML 요소'로 인식
  : 대문자 - 사용자 정의 '컴포넌트'로 인식

4. HTML 코드를 JSX로 변환 시 주의점
- 대부분 lowercamelCase로 작성
  : backgroundColor, fontSize, borderRadius
- className 속성을 className으로 설정
  : HTML에서 코드를 가져오는 경우
  : class 속성명을 변경
  >> ctrl + f (찾기)
*/

function Div() {
  return (
    // Fragment : 아무 의미 없는 태그 - 요소를 묶는 용도로 사용
    <>
      <div className="hello"></div>
      <div className="hello"></div>
      <div className="hello"></div>
    </>
  );
}

export default function JSX01() {
  return (
    <>
      <div className="container">
        <div className="inner">
          <p className="para">안녕</p>
          <p className="para">안녕</p>
          <p className="para">안녕</p>
          <p className="para">안녕</p>
          <p className="para">안녕</p>
        </div>
      </div>

      <Div />
      {/* 첫번째 {} : 자바스크립트 사용할거에요 - 두번째 {} : css를 객체로 가져올겁니다 */}
      {/* JSX02.tsx 파일 참고 */}

      <p style={{
        fontSize: '20px',
        color: 'blue',
        backgroundColor: 'gray'
      }}>안녕하세요!</p>

      <input type="text" />
      <br />
      <hr />
    </>
  );
}

import React, { useState } from "react";

//! 여러 개의 입력 상태 값 처리
// : input에 name을 설정하여 이벤트가 발생했을 때 해당 값을 참조
// : useState에서는 문자열이 아니라 객체 형태의 상태를 관리

//! 리액트 상태에서 객체를 수정해야 할 때는
// input[name] = value;
// : 위 처럼 직접 수정 X

// setInput({ ...inputs, [name]: value })
// : 위 처럼 새로운 객체를 만들어서 새로운 객체에 변화를 주고 이를 상태로 사용

const userA = {
  name: '박용재',
  age: 28
}

// {...userA, [name]: '김채원'}
// >> {name: '박용재', age: 28, [name]: '김채원'}
// >> {age: 28, [name]: '김채원'}


/*
- 스프레드 연산자
- 비구조화 할당
*/ 

interface Input {
  id: string;
  password: string;
}

export default function State03() {

  let initialValue = {
    id: '',
    password: ''
  }

  //? inputs 현재 상태값
  const [inputs, setInputs] = useState<Input>(initialValue);
  // const [id, setId] = useState();
  // const [password, setPassword] = useState();

  //? 비구조화 할당을 통해 값 추출
  // : 배열이나 객체의 속성을 변수로 쉽게 추출하는 표현식
  const {id, password} = inputs;
  // const id = inputs.id;
  // const password = inputs.password;

  //! 폼 제출 함수
  // : 기본동작을 중지, 입력 데이터를 콘솔에 출력
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 폼의 기본 제출 동작 중지
    console.log('폼 데이터가 제출되었습니다', inputs);
  }

  //! 입력 처리 함수
  // : 입력 필드의 변경을 감지하고 상태를 업데이트하는 함수를 구현
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 이벤트가 발생한 필드(DOM 요소)에서 name과 value를 추출
    // : 여러 개의 input을 하나의 이벤트 핸들러로 처리하기 위해서는 해당 필드에
    // : name과 value의 속성이 반드시 존재해야 함

    //!!! 비구조화 할당
    const {name, value} = e.target;
    // >> name을 key값으로 value를 속성값으로 Input 타입을 가지는 객체의 값 수정이 가능
    
    //? 값 수정을 위한 set설정 함수 사용
    setInputs({
      // 기존 상태를 복사해서 가져옴 >> Input 타입
      // 스프레드 연산자를 통해 (...)
      ...inputs, 
      // id: '',
      // password: ''

      //!!!!! name 키를 가진 값을 value로 설정 !!!!!!
      //: 변경 된 필드의 값만을 업데이트
      // >> id: '업데이트값' | password: '업데이트값
      [name]: value

    });
    
  }

  //! 폼 리셋 함수
  // : 모든 입력 필드를 초기 상태로 리셋하는 함수
  const handleResetClick = () => {
    setInputs({
      id: '',
      password: ''
    });
  }


  
  return (
    <>
      <h5 style={{}}>
        여러 개의 입력 상태 관리
      </h5>
      <form onSubmit={handleSubmit}>
        {/* form 을 활용하여 input 내용을 서버에 전송함, 그 이후에 화면 재렌더링 */}
        <input 
          type="text" 
          placeholder="아이디"
          // inputs 객체의 속성명과 일치
          name="id"
          // inputs 객체에서 구조분해할당 된 변수
          value={id}
          // 사용자의 입력(변화)을 반영하는 이벤트
          onChange={handleInputChange}
        />
        <p>{id}</p>

        <input 
          type="text" 
          placeholder="비밀번호"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <p>{password}</p>

        <button type='button' onClick={handleResetClick}>초기화</button>
        <button type="submit">전송하기</button>
        
      </form>
    </>
  );
}

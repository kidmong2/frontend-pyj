import React from 'react'

//! 컴포넌트에 이벤트 핸들러를 전달하여 동작을 커스터마이징하는 예제
// : ClgButton 컴포넌트를 정의하여, 다른 메시지를 전달받아 버튼 클릭 시 콘솔에 출력


interface ClgButtonProps {
  message: string;
  children: React.ReactNode;
}

// 두 버튼에서 다른 메시지 값을 prop로 전달받아 출력
function ClgButton({message, children}: ClgButtonProps) {
  return (
    <button onClick={() => console.log(`${message}`)}>{children}
    </button>
  );
}

// Handler02 컴포넌트에서 ClgButton을 사용하여 두 개의 버튼을 렌더링
// : 각 버튼은 다른 메시지를 prop으로 전달받아 출력
export default function Handler02() {
  return (
    <div>
      <ClgButton message='A를 동작'>A를 동작시킵니다</ClgButton>
      <ClgButton message='B를 동작'>B를 동작시킵니다</ClgButton>
    </div>
  )
}

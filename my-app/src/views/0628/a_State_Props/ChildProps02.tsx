import React from 'react'
import { userType } from './StateProps02';


// Props에 대한 타입 정의

interface childComponentProps {
  userInfo: userType;
  onUpdate: (newInfo: userType) => void;
}

export default function ChildProps02({userInfo, onUpdate}: childComponentProps) {

  let newData: userType = {
    userName: '최예나',
    height: 166
  }

  const updateInfo = () => {
    // 부모로부터 전달받은 상태 업데이트를 사용
    onUpdate(newData);
  }

  return (
    <>
      <p>사용자 이름: {userInfo.userName}</p>
      <p>사용자 키: {userInfo.height}</p>
      <button onClick={updateInfo}>사용자 정보 업데이트</button>
    </>
  )
}

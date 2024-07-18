import React, { useState } from 'react'
import { useAuthStore } from './stores/auth.store'
import { log } from 'console';
import { useMemberStore } from './stores/user.store';
import { useCountStore } from './Zustand01';

//! 상태 정의 및 스토어 생성
// : 회원 정보 상태 & 사용자 인증 상태

//! UI 컴포넌트
// 회원 관리 컴포넌트 - 회원 목록 표시, 회원 추가, 수정, 삭제 기능
// 로그인 컴포넌트 
// 홈 화면 컴포넌트 - 로그인 완료 시 보여질 홈 화면

//# 1. 로그인 컴포넌트
const Login = () => {
  const login = useAuthStore((state) => state.login);

  const [username, setUsername] = useState<string>('');

  const handleLogin = () => {
    login(username);
  }

  return (
    <>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={handleLogin}>로그인 버튼</button>
    </>
  )
}

//# 2. 회원 관리 컴포넌트
export function MemberManager() {
  const { members, addMember, updateMember, deleteMember } = useMemberStore();

  const [newMemberName, setNewMemberName] = useState<string>('');

  // 인덱스 서명 문법
  // >> [key: number]: string
  const [editMemberName, setEditMemberName] = useState<{[id: number]: string}>({});

  const handleAddMember = () => {
    if (newMemberName) {
      // 아이디값까지 객체화해서 넘겨야함
      const newMember = { id: Date.now(), name: newMemberName};

      addMember(newMember);
      setNewMemberName('');
    }
  }

  const handleUpdateMember = (id: number) => {
    if (editMemberName[id].trim() === '') {
      return;
    }

    updateMember(id, editMemberName[id]);
  }

  const handleDeleteMember = (id: number) => {
    deleteMember(id);
  }

  return (
    <div>
      <hr />
      <input type="text" value={newMemberName} onChange={(e) => setNewMemberName(e.target.value)} placeholder='Enter Member Name' />
      <button onClick={handleAddMember}>Add Memeber</button>

      <ul>
        {members.map((member) => (
          <li key={member.id}>
            {member.name}
            <input 
              type='text'
              // 객체의 속성값 호출 >> 점 연산자 or 대괄호 표기법
              value={editMemberName[member.id] || ''} 
              onChange={(e) => setEditMemberName({
                ...editMemberName,
                [member.id]: e.target.value
              })} 
              placeholder='새 멤버 이름' />
              <button onClick={() => handleUpdateMember(member.id)}>수정</button>

              <button onClick={() => handleDeleteMember(member.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  )
}


//# 메인 컴포넌트
// 로그인 된 회원이 존재하지 않는 경우
// : login 화면 만 출력

// 로그인 된 회원이 존재하는 경우
// : login 화면 출력 X
// >> 로그아웃 버튼 / 회원 정보 관리 페이지가 생성
export default function Zustand02() {
  const {count, increment, decrement} = useCountStore();

  const user = useAuthStore((state) => state.user);

  const logout = useAuthStore((state) => state.logout);

  if(!user) {
    return <Login />
  }

  return (
    <>
      <hr />
      <h3>Zustand02</h3>
      <p>{count}</p>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
      <p>Welcome!! {user}</p>
      <button onClick={logout}>로그아웃</button>
      <MemberManager />
    </>
  )
}
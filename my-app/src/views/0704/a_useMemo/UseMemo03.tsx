import React, { useMemo, useState } from 'react'

const hardCalculate = (num: number) => {
  console.log('어려운 계산');

  for(let i=0; i<99999999; i++) {};
  return num + 10000;
}

const easyCalcultate = (num: number) => {
  console.log('쉬운 계산');

  return num + 1;

}

export default function UseMemo03() {
  const [hardnum, setHardNum] = useState(1);
  const [easynum, setEasyNum] = useState(1);

  // 계산 결과를 저장하는 함수
  // const hardSum = hardCalculate(hardnum);
  const easySum = easyCalcultate(easynum);
  
  // useMemo를 사용하여 hardNumber가 변경될 때만 hardCalculate 함수 실행
  const hardSum = useMemo(() => {
    return hardCalculate(hardnum)
  }, [hardnum])

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input type="text" value={hardnum} onChange={(e) => setHardNum(parseInt(e.target.value))} />
      <span>+ 10000 = {hardSum}</span>
      
      <h3>쉬운 계산기</h3>
      <input type="text" value={easynum} onChange={(e) => setEasyNum(parseInt(e.target.value))} />
      <span>+ 1 = {easySum}</span>
      
    </div>
  )
}
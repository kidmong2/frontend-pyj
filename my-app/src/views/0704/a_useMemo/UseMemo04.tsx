import React, { useEffect, useMemo, useState } from 'react'

export default function UseMemo04() {
  const [number, setNumber] = useState<number>(1);
  const [islotte, setIslotte] = useState<boolean>(true);

  // const withoutMemo = {
  //   loveTeam: islotte ? '롯데' : '기아'
  // };

  const withMemo = useMemo(() => {
    return {
      loveTeam: islotte ? '롯데' : '기아'
    }
  }, [islotte]);

  useEffect(() => {
    console.log('useEffect 호출 (useMemo 사용)');
  }, [withMemo])

  // useEffect(() => {
  //   console.log('useEffect 호출 (useMemo 사용 X)');

  // },[withoutMemo])



  return (
    <div>
      <h2>1년에 야구장을 몇 번 가시나요?</h2>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))}/>

      <h2>응원하는 야구팀은?</h2>
      <p>야구팀: {withMemo.loveTeam}</p>
      <button onClick={()=> setIslotte(!islotte)}>변경</button>

    </div>
  )
}
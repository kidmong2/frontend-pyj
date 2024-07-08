import React, { useMemo, useState } from "react";

interface Item {
  id: number;
  value: number;
}

export default function UseMemo() {
  const [data, setData] = useState<Item[]>([
    {
      id: 1,
      value: 10,
    },

    {
      id: 2,
      value: 20,
    },

    {
      id: 3,
      value: 30,
    },
  ]);

  // threshold: 한계점
  // 데이터 중 한계점을 넘는 값만을 필터링
  const [threshold, setThreshold] = useState<number>(15);

  //? filteredData 변수에 data 배열에서 value값이 threshold보다 큰 값을 필터링하여 새로운 배열에 저장
  // const filteredData = data.filter(item => item.value > threshold);
  const filteredData = useMemo(() => {
    return data.filter(item => item.value > threshold);
  }, [data, threshold]);

  return (
  <div>
    <input type="text" value={threshold} onChange={(e) => setThreshold(Number(e.target.value))} />
    <ul>
      {filteredData.map(item => (
        <li key={item.id}>{item.value}</li>
      ))}
    </ul>
  </div>
  )
}

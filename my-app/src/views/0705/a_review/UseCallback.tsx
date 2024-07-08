import React, { useCallback, useState } from "react";

interface ButtonProps {
  onClick: () => void;
}

const Button = ({ onClick }: ButtonProps) => {
  console.log("버튼 컨포넌트가 렌더링 되었습니다.");

  return <button onClick={onClick}>클릭해주세요</button>;
};

export default function UseCallback() {
  const [count, setCount] = useState<number>(0);
  const [input, setInput] = useState<string>("");

  const handleUpClick = useCallback(() => {
    console.log('이벤트 핸들러 전달');
    setCount((PrevCount) => PrevCount + 1);
  }, []);

  return (
    <div>
      <p>클릭 횟수: {count}</p>
      <Button onClick={handleUpClick} />

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

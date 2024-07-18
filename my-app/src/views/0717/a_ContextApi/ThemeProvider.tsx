import React, { ReactNode, createContext, useContext, useState } from "react";

//! 컨텍스트 생성
//? 1. 테마 타입을 정의
type Theme = "dark" | "light";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

//? 2. ThemeContext 생성 및 초기값 설정
// : createContext() 함수 사용 - react에 포함

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

//! Provider 컴포넌트 생성
export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  // 테마 변경함수
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const contextValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

//! Consumer 컴포넌트 생성
export function ThemeConsumer() {
  
  const { theme, toggleTheme } = useContext<ThemeContextType>(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>테마 전환</button>
      <div
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
        }}
      >
        <div>
          <h1>안녕하세요 테마 스위치 앱 입니다.</h1>
          <p>해당 내용들은 ThemeProvider의 컴포넌트들 입니다.</p>
        </div>
      </div>
    </div>
  );
}

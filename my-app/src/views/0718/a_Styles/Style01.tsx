import React from 'react'

//# 1. 인라인 스타일
// : 인라인 스타일은 리액트 컴포넌트에 직접 스타일을 지정하는 방법
export default function Style01() {
  const divStyle = {
    backgroundColor: 'lightblue',
    padding: '20px',
    borderRadius: '5px'
  }

  const Para = {
    backgroundColor: 'lightcoral',
    color: 'black'
  }

  return (
    <div style={divStyle}>
      This is an example 
    <p style={Para}>This is a Paragraph</p>
    </div>
  )
}

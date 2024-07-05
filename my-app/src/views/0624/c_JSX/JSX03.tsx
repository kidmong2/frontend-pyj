import React from 'react'




export default function JSX03() {
  // const url = 'https://cdn.pixabay.com/photo/2024/06/12/11/11/sketch-8825072_1280.jpg';

  const baserUrl = 'https://cdn.pixabay.com/photo/';

  const human = {
    date: '2024/06/12/',
    description: '11/11/',
    imageId: 'sketch-8825072_1280',
    name: '우산쓴사람',
    theme: {
      backgroundColor: 'gray',
      color: 'yellow'
    },
    imageTheme: {
      width: '200px',
      height: '150px'
    }
  };



  return (
    <div style={human.theme}>
      <p>{human.name}'s Picture </p>
      <img 
        src={baserUrl + human.date + human.description + human.imageId + '.jpg'} 
        alt={human.name}
        width = {human.imageTheme.width}
        height = {human.imageTheme.height}
        />
    </div>
  )
}

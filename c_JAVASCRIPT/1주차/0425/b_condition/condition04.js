const select = document.querySelector('select');
const para = document.querySelector('p');

select.onchange = setWeather;

function setWeather () {
  const choice =select.value;
  
  switch (choice) {
    case 'sunny' :
      para.textContent = '맑은 하루입니다.';
      console.log('맑은 하루');
      break;    
    case 'rainy' :
      para.textContent = '비가 내립입니다.';
      console.log('비가 내림');
      break;
    case 'snowing' :
        para.textContent = '눈이 내립니다.';
        console.log('눈이 내림');
        break;
    case 'overcast' :
      para.textContent = '흐린 하루입니다.';
      console.log('흐린 하루');
      break;
    default :
      para.textContent = '날씨를 선택해주세요.';
    
  }
}
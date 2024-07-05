/*
  thumb-bar의 이미지를 클릭
  : 해당 이미지로 full-img 변경

  ! button 태그에 클릭 이벤트가 발생한 경우
  1. Darken 버튼 클릭 시
    (버튼의 class 속성이 dark로 지정)
  : 버튼의 textContent가 '라이트 모드'로 변경
  : overlay의 배경 색이 'rgba(0, 0, 0, 0.5);로 지정

  2. 라이트 모드 버튼 클릭 시
    (dark이 아닐 경우)
*/

// 1) html 요소 선택

const thumBar = document.querySelector(".thumb-bar");
const displayedImage = document.querySelector(".displayed-img");
const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// 이미지 파일 이름 배열 선언

const images = [
  "cat01.jpg",
  "cat02.jpg",
  "dog01.jpg",
  "dog02.jpg",
  "dog03.jpg",
];

// 각각의 이미지에 대한 대체 텍스트를 저장하는 객체 선언

const alts = {
  "cat01.jpg": "고양이 1",
  "cat02.jpg": "고양이 2",
  "dog01.jpg": "강아지 1",
  "dog02.jpg": "강아지 2",
  "dog03.jpg": "강아지 3",
};

// 2) 썸네일 바에 이벤트 리스너 추가

// thumBar.addEventListener("click", function (e) {
  
//   // 클릭된 요소가 이미지일 경우

//   // target VS currentTarget

//   // target : 이벤트가 실제로 발생한 요소를 가리킴. 버튼을 클릭할시 해당 클릭된 버튼을 의미
//   // currentTarget : 현재 이벤트 핸들러가 연결된 요소를 가리킴. 클릭된 버튼의 부모 요소를 가리킴

//   if (e.target.tagName === "IMG") {
//     // displayedImage의 src와 alt를 업데이트 ->
//     // : 썸네일 사진 변경
//     const imgSrc = e.target.src;
//     displayedImage.src = imgSrc;
//     // imgSrc = images/cat01.jpg
//     displayedImage.alt = alts[imgSrc.split("/").pop()];
//     // >> 이미지 파일 이름 추출 및 대체 텍스트 설정
//   }
// });

//! ---------- DOM 학습 후 ------------ !//
//? 썸네일 이미지를 동적으로 생성하고 클릭 이벤트 추가

images.forEach((image) => {
  const newImage = document.createElement('img');

  // 생성된 요소에 속성 추가
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', alts[image]);

  thumBar.appendChild(newImage);

  newImage.addEventListener('click', () => {
    displayedImage.src = `images/${image}`;
    displayedImage.alt = alts[image];
  });
});



// 3) 다크/라이트 버튼의 기능 구현

// btn.addEventListener("click", function () {
//   // 현재 버튼의 클래스에 dark가 있는지 확인
//   // : html 객체에 클래스 요소는 classList 속성으로 가져옴
//   if (btn.classList.contains("dark")) {
//     // 다크 모드 -> 라이트 모드
//     btn.textContent = "라이트 모드";
//     overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
//     btn.classList.remove("dark");
//   } 
//   else {
//     // 라이트 모드 -> 다크 모드
//     btn.textContent = "다크 모드";
//     overlay.style.backgroundColor = "rgba(0,0,0,0)";
//     btn.classList.add("dark");
//   }
// });

//! --------- DOM 학습 후 ------------ !//

btn.addEventListener('click', () => {
  //? 속성 값 가져오기 : getAttribute('속성명')
  const className = btn.getAttribute('class');

  if (className == 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = '라이트 모드';
    overlay.style.backgroundColor = rgba(0,0,0,0.5);
  }
  else {
    btn.setAttribute('class', 'dark');
    btn.textContent = '다크 모드';
    overlay.style.backgroundColor = '';
  }
})
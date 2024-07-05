function print({title, year, reviewers}) {

  const review = reviewers.toString();

  console.log('제목: ' + title);
  console.log('연도: ' + year);
  console.log('리뷰어: ' + reviewers);
  console.log('리뷰어: ' + reviewers.join(','));
  

  // 코드를 입력하세요 ...
  // 매개변수도 입력해야해요~
}

print({
  title: '프론트엔드',
  year: 2022,
  reviewers: ['테드', '찰리', '마커스'],
});

// 출력 결과 :
// 제목 : 프론트엔드
// 연도 : 2022
// 리뷰어 : 테드,찰리,마커스




//! ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ !//





function print2({title, year, reviewers}) {

  let [a, ...b] = reviewers;
  
  console.log('제목: ' + title);
  console.log('연도: ' + year);
  console.log('첫번째 리뷰어: ' + a);

  // 코드를 입력하세요 ...
  // 매개변수도 입력해야해요~
}

print2({
  title: '웹앱',
  year: 2023,
  reviewers: ['테드', '찰리', '마커스'],
});

// 출력 결과 :
// 제목 : 웹앱
// 연도 : 2023
// 첫 번째 리뷰어 : 테드





function print3({title, year, reviewers}) {

  let [a] = reviewers;

  console.log('제목: ' + title);
  console.log('연도: ' + year);
  console.log(a ? '리뷰어:' + reviewers : '리뷰어: 리뷰어 미정');
  

  // 코드를 입력하세요 ...
  // 매개변수도 입력해야해요~
}

print3({
  title: '웹앱',
  year: 2023,
  reviewers: []
});





/*
! 요구사항 정리

1. 사용자가 "Fetch User Data" 버튼을 클릭
2. "Loading user data" 메시지가 화면에 표시
3. 실제 데이터 요청이 실행되고, 완료되면 사용자 데이터가 화면에 표시
4. 요청이 실패하거나 문제가 발생하면, 에러 메시지가 화면에 표시


*/ 

//# 'fetchUserData' id를 가진 HTML 요소에 클릭 이벤트 리스너 추가
// DOM 요소에 대한 null | undefined 방지로 ! 기능 구현
document.getElementById('fetchUserData')!.addEventListener('click', async() => {
  function fetchUser(userId: number) {

  }
});




//* -----DOM 요소 지정-----
//? 1. 로딩 메시지 OR 사용자 데이터 OR 에러메시지를 출력할 DOM 요소 가져오기 - userDataDiv
// - 비동기 작업 처리 중: 로딩 메시지
// - 비동기 작업 처리 완료: 사용자 데이터
// - 비동기 작업 처리 실패: 에러 메시지

const userDatadiv = document.getElementById('userdata');



//? 2. 사용자 데이터 id를 입력받을 input 요소 가져오기 - userIdElement

const userIdElement = document.getElementById('userId');


//? 3. 해당 DOM 요소가 존재하면 input태그의 값(value)을, 존재하지 않을 경우 빈 문자열을 반환
// - userIdElement가 null이 아님을 확인하고, 그 값을 가져오기

function getId() {
  if (userIdElement instanceof HTMLInputElement) {
    return userIdElement.value;
  }
  else {
    return '';
  }
}



//* -----변수 지정-----
//? 4. 사용자 데이터를 가져올 JSONPlaceholder API의 URL을 담을 변수 지정 - apiUrl
// `https://jsonplaceholder.typicode.com/users/${userId}`;

const apiUrl = fetch('https://jsonplaceholder.typicode.com/users/');




//* -----로딩 메시지 표시-----



// 데이터 요청의 결과에 따라 해당 요소의 내용이 변화 
//       (JS/TS로 구현)
//       - 비동기 작업 처리중 : 대기 메시지 출력
if (userDatadiv) {
  userDatadiv.innerText = 'Loading User Data...';
}
//         : Loading User Data...

//       - 비동기 작업 처리 성공 : 사용자 데이터 출력

//         : id, name, email, username, address

//       - 비동기 작업 처리 실패 : 에러 메시지 출력

//         : Error: User data could not be retrieved.




//* try-catch 블럭을 사용하여 비동기 작업 처리(데이터 불러오기)


//? async / await 사용
// - async의 경우 이벤트 리스너의 콜백함수로 설정
// - await의 경우 fetch() 작업으로 명시

async function fetchUser(userId: number) {
  try {
    const fetchResponse = await fetch(`${apiUrl}/${userId}`);

    //? 사용자의 응답이 올바르지 못할 경우
    // if(!fetchResponse.ok)
    // : 사용자 에러 발생

    if (!fetchResponse.ok) {
      throw new Error('사용자 에러 발생');
    }
    

    //? 가져온 데이터를 json() 타입으로 변환
    const userData = fetchResponse.json();



  }
  catch() {
    
  }




//? 사용자 데이터 표시 userDataDiv의 내부 HTML
// <h2>User Details</h2>
// <p>Id: ${user.id}</p>
// <p>Name: ${user.name}</p>
// <p>Email: ${user.email}</p>
// <p>Username: ${user.username}</p>
// <p>Address: ${user.address.street}, ${user.address.city}</p>

//? 비동기 작업 처리 중 오류 발생 시
// userDataDiv에 에러 표시
  
}



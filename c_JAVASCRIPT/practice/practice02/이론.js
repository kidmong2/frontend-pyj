//! 비동기 함수

// 1. 콜백 함수
function fetchData(callback) {
  setTimeout(() => {
    callback('Data load');
  }, 1000);
}

fetchData(data => {
  console.log(data);
})



// 2. 프로미스 

function pFetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Dataload');
    });
  })
}

pFetchData().then(data => {
  console.log(data); // data는 resolve 성공의 데이터
}).catch(error => {
  console.log(error);
})


// 3. async, await

async function aFetchData() {
  try {
    // fetch('url') 함수
    // : Promise 객체로 반환
    // const response = await fetch('url');
    // const data = response.json();

    
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('data LOAD');
      }, 1000);
    });

    console.log(data);
  }
  catch(error) {
    console.log(error);
  }
}

aFetchData();
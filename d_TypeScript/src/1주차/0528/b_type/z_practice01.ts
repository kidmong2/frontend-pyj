{
  // 1. 상태 및 데이터 타입 정의
  // : 사용자 정보를 처리하는 API 응답 처리
  // >>  사용자 정보를 나타내는 타입과 API 응답 타입을 정의
  type User = {
    id: number;
    name: string;
    email:string
  }

  type ApiResponse = {
    status: 'loading' | 'success' | 'error' ;
    data?: User;
    message?: string;
    }


  // 2. API 응답 처리 함수 구현
  // : API 응답에 따라 다른 작업을 수행하는 함수를 구현
  // >> ApiResponse 타입의 객체를 매개변수로 받아 그 상태에 따라 적절한 로그를 출력하고, 필요한 작업을 수행

    function processApiResponse(response: ApiResponse) {
      switch(response.status) {
        case 'loading':
          console.log('데이터 로딩 중...');
          break;

        case 'success':
          if(response.data) {
            console.log('데이터 전달 완료', response.data);
            displayUserData(response.data);
          }
          else {
            console.log('데이터 전달은 성공했지만 찾을 수 없습니다.');
          }
          break;

        case 'error':
          console.log('에러가 발생했습니다', response.message);
          break;
      }
    }

    function displayUserData(user: User) {
      console.log(`USER ID: ${user.id}`);
      console.log(`USER NAME: ${user.name}`);
      console.log(`USER EMAIL: ${user.email}`);
    }

  // 3. 함수 사용 예
  // : API에서 사용자 데이터를 요청하고 그 응답을 processApiResponse 함수를 통해 처리
  // >> 데이터 요청을 시뮬레이션하는 예제
  function fetchDatafromApi(): ApiResponse {
    return {
      status: 'success',
      data: {
        id: 1,
        name: '최예나',
        email: 'eee0303'
      },
      message: '데이터가 성공적으로 전달되었습니다.'
    }
  }


  // API 응답 처리

  const response = fetchDatafromApi();
  processApiResponse(response);


}

//& import와 export 문법

// - ES6 모듈 시스템은 JavaScript의 표준 모듈 시스템으로, 코드를 모듈화하여 관리하고, 재사용성과 유지보수성을 높이기 위해 설계

//! 1. export 문법
// 모듈에서 다른 파일로 함수, 변수, 클래스 등을 내보낼 때 export 키워드를 사용
// : 내보내기는 두 가지 방식으로 수행 가능
// >> 이름을 붙여 내보내기와 기본 내보내기

//? 이름을 붙여 내보내기 (Named Exports)
// 이름을 붙여 내보내기는 하나의 모듈에서 여러 항목을 내보내기 가능
// : 각 항목은 고유한 이름으로 참조

//? 기본 내보내기 (Default Exports)
// 기본 내보내기는 모듈당(파일당) 하나의 항목만 내보낼 수 있으며, default 키워드를 사용
// : 주로 한 모듈에 하나의 주요 기능이 있는 경우에 적합

//! 2. import 문법
// 다른 모듈에서 내보낸 기능을 사용하기 위해 import 문을 사용
// : 이름을 붙여 내보낸 항목과 기본 내보낸 항목을 가져오는 방법이 상이

// import 모듈명 from 파일명 ;

// 이름 붙여 가져오기
// import {모듈명} from 파일명 ;
import { PI, multiply} from './example02.mjs';

console.log(PI);
console.log(multiply(2,3));

// 기본 가져오기
// import 모듈명 from 파일명 ;
import sum from './example02.mjs';

console.log(sum(2,3));

//! 3. 기본 내보내기와 이름을 붙여 내보내기의 차이점

//? 가져오기 구문의 차이
// - 기본 내보내기는 모듈에서 하나의 기본 값만 내보내며, 가져올 때는 중괄호 {} 없이 가져옴

// - 이름을 붙여 내보내기는 여러 값을 내보낼 수 있으며, 각각의 값을 중괄호 {}를 사용하여 명시적으로 가져옴

//? 특징
// 유연성
// : 이름을 붙여 내보내기는 한 모듈에서 여러 값을 내보내고 이를 선택적으로 가져올 수 있어 유연성이 뛰어남
// : 기본 내보내기는 주로 모듈의 '메인' 기능을 표현할 때 사용됩

// 명명 규칙
// : 이름을 붙여 내보내기는 내보낼 때 정의한 이름을 가져올 때 사용
// (단, as 구문을 사용하여 이름을 변경할 수 있음)
// : 기본 내보내기는 가져올 때 어떤 이름을 사용 가능
// : 가져오는 측에서 이름을 자유롭게 지정 가능

//! +) import as 구문
// : 모듈에서 특정 기능을 가져올 때 해당 기능에 별칭(alias)을 부여
// : 코드 내에서 원래 이름 대신 별칭을 사용하여 해당 기능을 참조 가능

//? 기본 사용법
// 모듈에서 단일 항목을 가져와 별칭으로 사용
import {myfunction01 as mf1} from './example02.mjs'

//? 다중 항목 가져오기
// 여러 기능을 가져오면서 각각에 별칭을 지정 가능
mf1();


//? 전체 모듈을 별칭으로 가져오기
// 모듈 전체를 하나의 별칭으로 가져와서 모듈 내의 모든 기능을 그 별칭을 통해 접근 가능

import {myfunction01 as mf01, myfunction02 as mf02} from './example02.mjs'

mf01();
mf02();



import * as exam from './example02.mjs';

console.log(exam.PI);
console.log(exam.multiply(2,3));

exam.myfunction01();
exam.myfunction02();
// mathUtils 모듈에서 여러 함수를 사용


// 이름 붙여 가져오기 : import {모듈명} from 파일명 ;


// 기본 가져오기 : import 모듈명 from 파일명 ;
import {add} from './mathUtils.js';
import subtraction from './mathUtils.js';
import {multiply as mp} from './mathUtils.js';


// 별칭으로 가져오기 (모듈)

// 별칭으로 가져오기 (파일)

import * as math from './mathUtils.js';


console.log(add(10,0));
console.log(subtraction(10,0));
console.log(mp(10,0));
console.log(divide(10,2));
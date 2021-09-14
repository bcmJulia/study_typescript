/* eslint-disable @typescript-eslint/no-unused-vars */

// javascript 원시형타입
let numValue: number;
let stringValue: string;
let booleanValue: boolean;
let undefinedValue: undefined;
let nullValue: null;

// 객체형타입
let objValue: object;

// es6 새로운 원시형타입
let symbolValue: symbol;

// 값 할당
numValue = 3.3;
stringValue = 'hello';
stringValue = `
hello ${numValue}
`;                              // Template Literal (back-tick) :: 개행가능, 문자열 보간기능 사용가능 (string interpolation)
booleanValue = true;
undefinedValue = undefined;     // null 할당 가능 ::: undefined, null 모든 타입의 하위 타입이라서 상위 타입으로 정의된 변수에 할당이 가능하다. number, string 타입으로 값 할당 가능하다.
nullValue = null;
objValue = { name : 'julia' };  // 원시형타입 값을 제외한 어떠한 형태의 객체 값들 할당 가능
symbolValue = Symbol();         // Symbol 함수 호출하면 유니크한 값이 생성됨. 객체의 property로 쓰이게됨. 하나의 객체를 정의할 때 property key로 쓰게 됨.
// {
//     symbolValue : 'hello',
// }


// 배열 타입 정의
let nameList: string[];            // 문자열, 숫자 섞어서 배열이 이루어지는 경우는 let nameList: any[]; 
// nameList = [1, 3, 5];           // 'number' 형식은 'string' 형식에 할당할 수 없습니다.ts(2322)
nameList = ["1"];
// nameList.push(3);               // 'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)
nameList.push("3");


// 인라인 타입 ::: 변수 선언과 동시에 인라인으로 타입을 정의 ::: 매번 타입을 인라인으로 정의할 수 없기 때문에 type, interface, class를 통해서 타입을 정의할 수 있음.
let user1: { name: string, score: number };
user1 = {
    name: 'julia',
    score: 20,
};


// tuple type ::: 서로 다른 타입을 함께 가질 수 있는 배열 (튜플 타입을 사용하면, 요소의 타입과 개수가 고정된 배열을 표현)
let tuple2: [number, string];
// tuple2 = [1, 2];                 // 'number' 형식은 'string' 형식에 할당할 수 없습니다.ts(2322)
tuple2 = [1, 'julia'];
// tuple2[0].substr(1);             // 'number' 형식에 'substr' 속성이 없습니다.ts(2339)


export {}
// '--isolatedModules'에서는 'basicType.ts'을(를) 컴파일할 수 없는데 전역 스크립트 파일로 간주되기 때문입니다. 모듈로 만들려면 가져오기, 내보내기 또는 빈 'export {}' 문을 추가하세요.ts(1208)
// Typescript는 기본적으로 import/exports가 없는 파일을 레거시 취급을 한다. 타입스크립트가 이러한 파일들은 모듈이 아니기 때문에 전역 네임스페이스에 병합한다.
// tsconfig.json에서 isolatedModules 옵션을 false하거나 export {} 로 아무것도 가져오지 않고 파일을 모듈로 만들어서 해결 할 수 있다.
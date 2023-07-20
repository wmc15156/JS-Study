var num = 2;
var kind;

if(num > 0) {
    kind = '양수';
}

console.log(kind); // 양수

console.clear();


if (num > 0) {
    kind = '양수';
} else {
    kind = '음수';
}


console.log(kind); // 양수
console.clear();

if(num > 0) {
    kind = '양수';
} else if(num < 0) {
    kind = '음수';
} else {
    kind = '영'
}

console.log(kind);
console.clear();

// 코드 블록 내의 문이 하나라면 중괄호 생략 가능
var num = 2;
var kind;

if(num > 0) kind = '양수';
else if(num < 0) kind = '음수';
else kind = '영';


console.log(kind);
console.clear();

var x = 2;
var result;

if (x % 2) {
    result = '홀수';
} else {
    result = '짝수';
}
console.log(result); // 짝수


/*
* 삼항연산자로 표현 가능
* 삼항연산자는 값으로 평가되는 표현식
* 삼항 조건 연산자 표현식은 값처럼 사용할 수 있기 때문에 변수에 할당 가능
* if else문은 변수 할당 x
* */
var x = 2;
var result = x % 2 ? '홀수' : '짝수';
console.log(result);


console.clear();


### 9.1 타입변환
자바스크립트의 모든 값은 타입이 있다. 개발자의 의도에 따라 다른 타입으로 변환이 가능하며, 이걸 명시적 타입 변환또는 타입 캐스팅이라 한다.

```js
var x = 10;
var str = x.toString();
console.log (typeof str); // string '10';

// 변수의 값이 바뀌는건 아니다.
console.log(typeof x) // number 10
```
개발자의 의도와는 다르게 표현식을 평가하는 도중에 자바스크립트 엔진에 의해 암묵적으로 타입이 변환되기도 하는데, 이를 암묵적 타입 변환 또는 타입 강제 변환이라 한다.

```js
var x = 10;
var str = x + '';
console.log(typeof str, str); // string 10

// x변수의 값이 변경된 것은 아니다.
console.log(typeof 10, x); //number 10
```
명시적 타입 변환이나 암묵적 타입 변환이 기존 원시 값을 직접변경 하는것은 아니다. 원시 값은 변경 불가능한 값이므로 변경 할 수 없다.
타입 변환이란 기존 원시값을 사용해 다른 타입의 새로운 원시 값을 생성하는것이다.


자바스크립트 엔진은 표현식을 에러 없이 평가하기 위해 피연산자의 값을 암묵적 타입 변환해 새로운 타입의 값을 만들어 단 한 번 사용하고 버린다.

### 9.2 암묵적 타입변환
```js
'10' + 2 // '102';
5 * '10' // 50;
!0 // true
if (1) {}
```
암묵적 타입 변환이 발생하면 문자열, 숫자, 불리언과 같은 원시 타입 중 하나의 타입을 자동 변환한다.

자바스크립트 엔진은 문자열 연결 연산자 표현식을 평가하기 위해 문자열 연결 연산자의 피연산자 중에서 문자열 타입이 아닌 피연산자를 문자열 타입으로 암묵적 타입 변환한다.
```js
1 + '2' // '12'
0 + '' // '0'
NaN + '' // 'NaN'
Infinity + '' // 'Infinity'
true + '' // 'true'
null + '' // 'null'
[] + '' // ''
[10, 20] // '10,20'
(function (){}) + '' // '(function (){})'
```
### 9.2.2 숫자의 타입 변환

```js
1 - '1' // 0
1 * '50' // 50
1 / 'one' // NaN

'1' > 0 // true
```
자바스크립트 엔진은 산술연산자 표현식을 평가하기 위해 산술 연산자의 피연사자중에서 숫자 타입이 아닌 피연사를 숫자 타입으로 변경
피연산자를 숫자타입으로 변환할 수 없는 경우는 산술 연산을 수행할 수 없으므로 표현식의 평가 결과는 NaN이 된다.
또 비교 연산자 표현식을 평가하기 위해 비교 연산자의 피연사자 중에서 숫자 타입이 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환을 한다.

+단항 연산자는 피연사자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적 타입변환을 한다.
빈문자열, 빈배열, null, false는 0으로 변환 
```js
+'' // 0
+'0' // 0
+'1' // 1
+true // 1
+null // 0
+'string' // NaN
+undefined // NaN
+[] // 0
+[10, 20] // NaN
```

### 9.2.3 불리언 타입으로 변환
if문이나 for 문과 같은 제어문 또는 삼항 조건 연산자의 조건식은 불리언 값, 즉 논리적 참/거짓으로 평가 되어야 하는 표현식
자바스크립트 엔진은 조건식의 평과 결과를 불리언 타입으로 암묵적 타입 변환한다.
자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값 또는 Falsy값으로 구분한다. 제어문의 조건식과 같이 불리언 값으로 평가되어야 할 문맥에서 Truthy 값은 true로 Falsy값은 false로 암묵적으로 타입변환한다.

Falsy 값
- false
- undefined
- null
- 0, -0
- NaN
- ''

### 9.3 명시적 타입 변환
개발자의 의도에 따라 명시적으로 타입 변환

### 9.3.1 문자열 타입으로 변환
```js
String(1);
String(true)
(1).toString();
1 + '' // '1'
```

### 9.3.2 숫자 타입으로 변환
```js
Number('0') // 0;
Number(true) // 1;
parseInt('0') // 0
+'0' // 0
'0' * 1 // 0
true * 1 // 1;
```

### 9.3.3 불리언 타입으로 변환
```js
Boolean('x'); // true
Boolean(null) // false
Boolean(undefined) // false
Boolean(1) // true
Boolean([]) // true
Boolean({}) // true
```

```js
!!'x' // true
!!NaN // false
!!0; // false
!![] // true
!!null // false
```

## 9.4 단축 평가

### 9.4.1 논리 연산자를 사용한 단축 평가
```js
'Cat' && 'Dog' // 'Dog'
// 논리 연산의 결과를 결정하는 두 번째 피연산자를 반환한다.
```
논리곱 연산자는 두 개의  피연사자가 모두 true로 평가 될때 true로 반환한다. 논리곱 연산자는 좌항에서 우항으로 평가가 진행된다.


```js
'Cat' || 'Dog' // 'Cat'
// 논리 연산의 결과를 결정하는 첫번째 피연산자를 반환한다.
```
논리합 연산자는 피연산자 중 하나만 true로 평가되어도 true를 반환한다.

단축 평가는 표현식을 평가하는 도중에 결과가 확정 된 경우 나머지 평가과정을 생략하는것을 말한다.

```js
true || anything // true
false || anything // anything
true && anything // anything
false || anything // false
```

단축 평가를 사용하면 if문을 대처할 수 있다. 어떤 조건이 Truthy값일때 무언가를 해야한다면 논리곤 연산자 표현식으로 if문을 대처 할수 있다.

```js
var done = true;
var message = '';

message = done && '완료';
```
조건이 Falsy 값일때 무언가를 해야된다면 논리합 연산자 표현식으로 if문을 대처 할수 있다.

```js
var done = false;
var message = '';

message = done || '미완료';
```

객체를 가리키는 기대하는 변수의 값이 객체가 아니라 null 또는 undefined일 경우 객체의 프로퍼티를 참조하면 타입에러 발생
```js
var elem = null;
var value = elem.value // TypeError

var elem = null;
var value = elem && elem.value; // null;

function getStringLength(str) {
    str = str || '';
    return str.length
}

function getStringLength(str = '') {
    return str.length;
}

```

### 9.4.2 옵셔널 체이닝 연산자
ES11(ECMAScript 2020)에서 도입된 옵셔널 체이닝 연산자?.는 좌항의 피연산자가 Null 또는 undefined 인경우 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
```js
var elem = null;

var value = elem?.value; // undefined
```

```js
// 옵셔널 체이닝 없을때

var elem = null;
var value = elem && elem.value; // null;
```

하지만 옵셔널 체이닝 연산자 ?.는 좌항 피연산자가 Falsy 값이라도 null, undefined가 아니면 우항의 프로퍼티를 참조한다.

```js
var str = '';

var lenght = str?.length // 0
```


### 9.4.3 null 병합 연산자
ES11에서 도입된 null 병합 연산자 ?? 는 좌항의 피연산자가 null, undefined인 경우 우항의 피연산자를 반환하고 그렇지 않으면 좌항의 피연산자를 반환한다.
```js
var foo = null ?? 'default string';
```

null 병합 연산자 ??는 변수에 기본값을 설정할 때 유용하다. 이전에는 || 논리합 연산자로 기본값 설정을 했다.
```js
var foo = '' || 'default string'; // 'default string'
var foo = '' ?? 'default string'; // '';
```

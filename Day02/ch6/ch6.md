## 6. 데이터 타입
![스크린샷 2023-07-13 오후 7.09.37.png](..%2F..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2F0l%2Fxt1n2hw95pbck3jvgpk9lp840000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_GAQCHh%2F%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202023-07-13%20%EC%98%A4%ED%9B%84%207.09.37.png)

### 6.1 숫자 타입
C나 자바의 경우 정수, 실수를 구분해서 다양한 숫자타입을 제공하지만 자바스크립트는 모든 수를 실수로 처리하며, 정수만 표현하기 위한 데이터 타입이 별도로 존재하지 않는다.

```js
var integer = 10;
var double = 3.14;
var negative = -20;
```
정수,실수,2진수,8진수, 16진수 리터럴은 모두 메모리에 배정밀도 64비트 부동소수점 형식의 2진수로 저장된다. 별도의 데이터 타입을 제공하지 않기 때문에 이들 값을 참조하면 모두 10진수로 해석된다.

```js
var binary = 0b01000001;
var octal = 0o101;
var hex = 0x41;


console.log(binary); //65
console.log(octal); // 65
console.log(hex); // 65

console.log(1 === 1.0) // 숫자타입은 모두 실수로 처리
```
숫자타입은 추가적으로 세가지 특별값이 있다.
- Infinity
- -Infinity
- NaN(not-a-number)

### 6.2 문자열 타입
문자열 타입은 텍스트 데이터를 나타내는데 사용한다. "", '', ``로 텍스트를 감싸면 문자열이 된다.

```js
var string;
string = 'string';
string = "string";
string = `string`;
```

### 6.3 템플릿 리터럴
템플릿 리터럴 이라고 하는 새로운 문자열 표기법이 ES6부터 도입되었고 멀티라인, 표현식 삽입, 태그드 템플릿등 편리한 문자열 처리기능을 제공한다.

```js
var str = `Hello`;

var template = `<ul> 
    <li><a>Home</a></li>
</ul>`

var first = "Hyun-jin";
var last = "Kim";

console.log(`My name is ${first} ${last}`);
```

### 6.4 불리언 타입
불리언 타입은 논리적 참, 거짓을 나타내는 true, false 뿐이다.

### 6.5 undefined
undefined 타입의 값은 undefiend가 유일하다.
개발자가 의도적으로 undefined를 변수에 할당한다면 혼란을 줄 수 있으므로 권장하지 않는다.

### 6.6 null 타입
null 타입의 타입의 값은 null이 유일하다.
프로그래밍 언어에서 null은 변수에 값이 없다는 것을 의도적으로 명시할때 사용한다. 변수에 null을 하당하는 것은 변수가 이전에 참조하던 값을 더 이상 참조하지 않겠다는 의미.

### 6.7 심벌 타입
심벌은 ES6에서 추가된 7번째 타입으로 변경 불가능한 원시타입의 값. 심벌값은 다른 값과 중복 되지 않는 유일무이한 값이다.
심벌은 Symbol 함수를 호출해 생성

```js
var key = Symbol('key');
console.log(typeof key); symbol

var obj = {};

obj[key] = 'value';
console.log(obj[key]);
```
![스크린샷 2023-07-13 오후 7.32.47.png](..%2F..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2F0l%2Fxt1n2hw95pbck3jvgpk9lp840000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_t8G3PG%2F%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202023-07-13%20%EC%98%A4%ED%9B%84%207.32.47.png)

### 6.9 데이터 타입의 필요성
- 값을 저장할때 확보해야 하는 메모리공간의 크기를 결정하기 위해
- 값을 참조할 때 한번에 읽어 들여야 할 메모리 공간의 크기를 결정하기위해
- 메모리에서 읽어 들인 2진수를 어떻게 해석할지 결정하기 위해

### 6.10 동적 타이핑

#### 6.10.1 동적 타입 언어와 정적 타입언어
정적언어
- C나 자바 같은 정적타입 언어는 변수를 선언할 때 변수에 할당할 수 있는 데이터타입을 사전에 선언해야함
- 변수에 선언한 타입맞는 값만 할당 할 수 있다.

동적언어
- 변수를 선언할때 타입을 선언하지 않고, 어떠한 데이터 타입의 값이라도 자유롭게 할당 가능

정적 타입 언어는 변수 선언 시점에 변수의 타입이 결정되고 변수의 타입을 변경 할 수 없다. 
자바스크립트 같은 동적언어는 할당에 의해 타입이 결정이 되고 재할당에 의해 타입은 언제든 변경이 가능

주의 사항
- 변수는 꼭 필요한 경우에 한해 제한적으로 사용한다.
- 변수의 유효 범위는 최대한 좁게 만들어 변수의 부작용을 억제해야 한다.
- 전역변수는 최대한 사용하지 않도록 한다.
- 변수보다는 상수를 사용(const)
- 변수 이름은 변수의 목적이나 의미를 파악할 수 있도록 네이밍한다.



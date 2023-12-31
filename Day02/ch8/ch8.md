## 8.제어문

### 8.1 블록문
- 블록문은 0개 이상의 문을 중괄호로 묶은것
- 자바스크립트는 블록문을 하나의 실행 단위로 취급하고 블록문은 단독으로 사용할 수도 있으나 일반적으로 제어문이나 함수를 정의 할때 사용하는것이 일반적이다.


### 8.2 조건문
- 주어진 조건식의 평가 결과에 따라 코드 블록의 실행을 결정합니다. 조건식은 불리언 값으로 평가될 수 있는 표현식.
- if 문의 조건식은 불리언 값으로 평가되어어야 한다.if 문의 조건식이 불리언 값이 아닌 값으로 평가되면 자바스크립트 엔진에 의해 암무적으로 불리언 값으로 강제 변환되어 실행할 코드 블록을 결정한다.




```js
if(조건식) {
    // 조건식1 참이면 이코드 블록 실행
} else if(조건식) {
    // 조건식2 참이면 이코드 블록 실행
} else {
    // 조건식1과 조건식2 모두거짓이면 이 코드 블록 실행
}
```

### 8.2.2 Switch
- switch문은 주어진 표현식을 평가하여 그 값과 일치하는 표현식 갖는 case문으로 실행 흐름을 옮긴다.
- 일치하는 case문이 없다면 실행순서는 defatul문으로 이동한다. default문은 선택사항으로, 사용할 수도 있고 사용하지 않을 수 있다.


```js
switch (표현식) {
    case 표현식1:
        switch 문의 표현식과 표현식1이 일치하면 실행될 문;
        break;
    case 표현식2
        switch 문의 표현식과 표현식2가 일치하면 실행될 문;
        break;
        
    default:
        switch 문의 표현식과 일치하는 case문이 없을 때 실행될문
}
```

### 8.3 반복문
- 반복문은 조건식의 평가 결과가 참인 경우 코드 블록을 실행
- for문, white문, do ...while문

### 8.3.1 for문
- for문은 조건식이 거짓으로 평가 될때까지 코드블록을 반복 실행.
```js
for(변수 선어문 또는 할당문; 조건식; 증감식) {
    // 조건식이 참이면 실행.
}
```

### 8.3.2 While문
- while문은 주어진 조건식의 평가 결과가 참이면 코드블록을 계속해서 반복 실행한다.
- for문은 반복횟수가 명확할떄 while문은 반복 횟수가 불명확할때 주로 사용.

### 8.3.3 do...while문
- do...while문은 코드 블록을 먼저 실행하고 조건식을 평가. 따라서 코드블록은 무조건 한번이상 실행.


### 8.4 break문

- 레이블문, 반복문 또는 switch문의 코드 블록을 탈출한다. 이 외에 다른곳에서 사용하면 문법에러 발생
- 레이블문 식별자 붙은문을 말한다.
- 레이블문은 for문 외부로 탈출할 때 유용하지만 그 밖의 경우는 일반적으로 권장하지 않음.

![스크린샷 2023-07-13 오후 2.40.27.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2F0l%2Fxt1n2hw95pbck3jvgpk9lp840000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_MN6cpP%2F%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202023-07-13%20%EC%98%A4%ED%9B%84%202.40.27.png)


### 8.5 continue문
- 반복문의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 실행 흐름을 이동 시킨다. break문처럼 탈출하지는 않는다.
- 

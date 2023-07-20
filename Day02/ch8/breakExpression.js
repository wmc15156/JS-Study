// label문

foo: {
    console.log(1);
    break foo;
    console.log(2);
}

console.log('Done');

console.clear();

// 중첩된 for문의 내부 for문에서 break문을 실행하면 내부 for문을 탈출하여 외부 for문으로 진행
// 이때 내부 for문이 아닌 외부 for문을 탈출할려면 레이블 문을 사용

outer: {
    for(var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if(i + j === 3) break outer;
            console.log(`inner [${i}] [${j}]`);
        }
    }
}
console.clear();
var string = 'Hello World';
var search = 'l';
var index;

for (var i=0; i < string.length; i++) {
    if(string[i] === search) {
        index = i;
        break;
    }
}

console.log(index);

console.clear();

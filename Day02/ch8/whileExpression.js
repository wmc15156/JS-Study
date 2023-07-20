var count = 0;

while (count < 3) {
    console.log(count); // 0 1, 2
    count++;
}

// while(true) {}

// 무한루프 탈출방법 => 탈출 조건을 만들고 break문으로 탈출한다.

console.clear();
var count2 = 0;
while(true) {
    console.log(count2);
    count2++;
    if(count2 === 3) break;
}

console.clear();
var count3 = 0;

do {
    console.log(count3); // 0
    count3++;
} while(count3 < 3) // 최초 한번 실행 후 while true이면 계속 실행

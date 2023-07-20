// for (var i=0; i < 3; i++) {
//     console.log(i) // 0 1,2
// }

// 무한루프
// for(;;) {
//     console.log('무한 루프');
// }

console.clear();

for (var i = 1; i <= 6; i++) {
    for (var j = 1; j <= 6; j++) {
        if(i + j === 6) console.log(`[${i}] [${j}]`)
    }
}

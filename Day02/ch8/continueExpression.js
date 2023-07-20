var string = 'Hello World';
var search = 'l';
var count = 0;

for (var i=0; i < string.length; i++) {
    if(string[i] !== search) continue;
    count ++;
}

console.log(count, 'first');
// console.clear();
//
// // if문 내에서 실행해야 할 코드가 한줄이면 continue 문을 사용할때 보다 간결하고 가독성이 좋음.
for (var i = 0; i < string.length; i++ ) {
    if(string[i] === search) count++;
}


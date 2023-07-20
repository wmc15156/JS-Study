let color = "black";

// break문이 없으면 폴 스루(fall through)가 일어남

// switch (color) {
//     case "red":
//         console.log("Color is red");
//     case "blue":
//         console.log("Color is blue");
//     case "green":
//         console.log("Color is green");
//     default:
//         console.log("Unknown color");
// }

switch (color) {
    case "red":
        console.log("Color is red");
        break;
    case "blue":
        console.log("Color is blue");
        break;
    case "green":
        console.log("Color is green");
        break;
    default:
        console.log("Unknown color");
}



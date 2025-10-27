// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month="march"
switch (month) {
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("february");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

//if we do not use break statement, all cases get executed even after the condition is matched

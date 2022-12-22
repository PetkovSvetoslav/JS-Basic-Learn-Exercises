function bk(input) {
let startNum = "" + input[0];
let endNum = "" + input[1];
let startPart1 = Number(startNum[0]);
let startPart2 = Number(startNum[1]);
let startPart3 = Number(startNum[2]);
let startPart4 = Number(startNum[3]);
let endPart1 = Number(endNum[0]);
let endPart2 = Number(endNum[1]);
let endPart3 = Number(endNum[2]);
let endPart4 = Number(endNum[3]);
let buff = "";
for (let a = startPart1; a <= endPart1; a++) {
    for (let b = startPart2; b <= endPart2; b++) {
        for (let c = startPart3; c <= endPart3; c++) {
            for (let d = startPart4; d <= endPart4; d++) {
if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0) {
    buff += "" + a + b + c + d + " ";
}


            }
        }
    }

}
console.log(buff);
}
bk(["2345","6789"])
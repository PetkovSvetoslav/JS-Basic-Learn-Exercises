function dvd(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    let printline = "";
for (let i = first; i <= second; i++) {
let num = i + "";
let oddsum = 0;
let evensum = 0;
for (let j = 0; j <= num.length; j++) {
let numDig = Number(num.charAt(j));
if (j % 2 == 0) {
    evensum += numDig;
} else {
    oddsum += numDig;
}
}
if ( evensum === oddsum) {
    printline += `${i} `
}

}
console.log(printline);
}
dvd(["100000","100050"]);
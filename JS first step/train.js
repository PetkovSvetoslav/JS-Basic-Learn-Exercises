function train(input) {
let n = Number(input[0]);
let name = "";
let index = 1;
let otsenka = 0;
let sum = 0;
let sumEnd = 0;
let count = 0;
while (name !== "Finish") {
    name = input[index];
    
// // let sumi = Number(input[index++]);
// // index++;
for(let i = 0; i <=n; i++) {
    let sumi = Number(input[index++]);
 sum += sumi; 
 count++;
 }  
 sumEnd = sum / n;
    
if (name === "Finish") {
    otsenka = sum / count;
    console.log(`Student's final assessment is ${otsenka.toFixed(2)}.`);
} else { 
    console.log(`${name} - ${sumEnd.toFixed(2)}`);
 }
 if (name === "Finish") {
    break; }
 
}

}
train(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])
;
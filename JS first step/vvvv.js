function vvvv(input) {
// let index = 0;
let distance = input[0];
// index++;
// let index = 1;
let budjet = Number(input[1]);
// index++;
let index = 2;
let b = input[index];
index++;
let sum = 0;

if (distance === "End") { break;
 } 
while (sum < budjet) {
    let g = Number(b);
sum += g;
if (sum >= budjet) {
    console.log(`Going to ${distance}!`);
    break;
} 
b = input[index];
index++;
}
// if (sum >= budjet) {
//     console.log(`Going to ${distance}!`);
// } 
// if (distance === "End") { break;
//  } 


}
vvvv(["Greece","1000","200","200","300","100","150","240","Spain","1200","300","500","193","423","End"])
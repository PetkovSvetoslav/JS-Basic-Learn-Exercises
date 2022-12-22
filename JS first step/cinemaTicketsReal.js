function snm(input) {
    let index = 0;
let name = input[index];
index++;
let studentTickets = 0;
let standartTickets = 0;
let kidsTickets = 0;
while (name !== "Finish") {
let freeS = Number(input[index]);
index++;
let counter = 0;
let comand = input[index];
index++;
while (comand !== "End") {
let type = comand;
if (type === "student") {
    studentTickets++;
} else if (type === "standard") {
    standartTickets++;
} else if (type === "kid") {
    kidsTickets++;
}
counter++;
if (freeS == counter) { break; }
comand = input[index];
index++;
}
let procent = counter / freeS * 100;
console.log(`${name}: ${procent}% full.`);
name = input[index];
index++;
}
let alltickets = studentTickets + standartTickets + kidsTickets;
console.log(`Total tickets: ${alltickets}`);

console.log(`${(studentTickets / alltickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standartTickets / alltickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidsTickets / alltickets * 100).toFixed(2)}% kids tickets.`);
}
snm(["Taxi","10","standard","kid","student","student","standard","standard","End","Scary Movie","6","student","student","student","student","student","student","Finish"]);
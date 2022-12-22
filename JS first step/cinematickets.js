function cnm(input) {
    let index = 0;
    let name = input[index];
    index++;
let count = 0;
while (name !== "End") {
    let free = Number(input[index]);
    index++;
count++;
let studentTickets = 0;
let standartTickets = 0;
let kidsTickets = 0;
switch (name) {
    case "student": studentTickets++; break;
    case "standard": standartTickets++; break;
    case "kid": kidsTickets++; break;
}
if ((name - count) !== 0) {
let persont = free / (studentTickets + standartTickets + kidsTickets);
let alltickets = studentTickets + standartTickets + kidsTickets;
    console.log(`${name} - ${persont.toFixed(2)}% full.`)
} else if (name === "Finish") {
    console.log(`Total tickets: ${alltickets}`);
    console.log(`${free / studentTickets}% student tickets.`);
    console.log(`${free / standartTickets}% standard tickets.`);
    console.log(`${free / kidsTickets}% kids tickets.`);
}
name = input[index];
index++;
}
}
cnm(["Taxi","10","standard","kid","student","student","standard","standard","End","Scary Movie","6","student","student","student","student","student","student","Finish"]);
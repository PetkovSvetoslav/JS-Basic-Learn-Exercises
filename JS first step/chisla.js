function ggg(input) {

    let index = 0;
    let sumSimple = 0;
    let sumComplex = 0;
    let current = input[index];
    let isKomplex = false;
    while (current !== "stop") {
        let num = Number(current);
        if (num < 0) {
            console.log("Number is negative.");
            index++;
            current = input[index];
            continue;
        } else {
for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        isKomplex = true; break;
    }
}
        }
        if (isKomplex) {
            sumComplex += num;
            isKomplex = false;
        } else { 
            sumSimple += num;
        }
        
        index++;
        current = input[index];
    }
console.log(`Sum of all prime numbers is: ${sumSimple}`);
console.log(`Sum of all non prime numbers is: ${sumComplex}`);
}
ggg(["3","9","0","7","19","4","stop"]);
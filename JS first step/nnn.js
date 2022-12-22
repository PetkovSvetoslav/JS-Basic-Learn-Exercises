function ggg(input) {
    let n = Number(input[0]);
    let h = Number(input[1]);
    let g = Number(input[2]);
    let sum = false;
    let r = 0;
    for (x = n; x<= h; x++) {
        for (y = n; y<= h; y++) {
            r++;
        if (x + y === g) {
            sum = true;
            console.log(`Combination N:${r} (${x} + ${y} = ${g})`);
            break;
        }
        }
        if(sum) { break; 
        }
    }
if (!sum) { console.log(`${r} combinations - neither equals ${g}`); 
}

}
ggg(["1","10","5"]);
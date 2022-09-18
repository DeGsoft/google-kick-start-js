'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readline() {
    return inputString[currentLine++];
}

function main() {
    var T;
    T = parseInt(readline());
    for (var test_no = 1; test_no <= T; test_no++) {
        process.stdout.write('Case #' + test_no + ': ');
        solve();
    }
}

function solve() {
    let N = readline().split('').map(x => parseInt(x));
    let V = readline().split(' ').map(x => parseInt(x));
    const length = V.length;
    let record = 0;
    let lastRecord = 0;
    for (let i = 0; i < length; i++) {       
        if (((i === 0) || (V[i] > lastRecord)) && ((i === length-1) || (V[i] > V[i+1]))) 
            record++;  
        if (V[i] > lastRecord) lastRecord = V[i];        
    }
    process.stdout.write(record + '\n');
}
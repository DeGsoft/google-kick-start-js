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
    var [N, M] = readline().split(' ').map(x => parseInt(x));
    var C = readline().split(' ').map(x => parseInt(x));
    process.stdout.write(C.reduce((acc,cur) => acc + cur, 0) % M + '\n');
  }
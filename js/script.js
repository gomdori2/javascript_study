// 이중 for 문
// let x = 2;
// let result;
// for (let y = 1; y <= 9; y++) {
//   result = x * y;
//   console.log(`${x} x ${y} = ${result}`);
// }

let resultAll;
for (let x = 2; x <= 9; x++) {
  for (let y = 1; y <= 9; y++) {
    result = x * y;
    console.log(`${x} x ${y} = ${result} \r`);
  }
}

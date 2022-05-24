// function minNum(x, y, z) {
//   if ((x, y, z <= 100)) {
//     let minNumber;
//     if (x < y) {
//       minNumber = x;
//     } else {
//       minNumber = y;
//     }
//     if (z < minNumber) {
//       minNumber = z;
//     }
//     return minNumber;
//   }
//   return minNumber;
// }

// console.log(4, 8, 16);

const findMinNumber = (x, y, z) => {
  return Math.min(x, y, z);
};
console.log(findMinNumber(2, 4, 6));

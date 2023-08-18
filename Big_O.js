// without efficiancy
const sumUptoOne = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};
// console.log(sumUptoOne(2));

// with efficiancy
const sumUptoTwo = (n) => {
  return (n * (n + 1)) / 2;
};
console.log(sumUptoTwo(2));

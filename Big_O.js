// Exmple 01
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
// console.log(sumUptoTwo(2));

//example 02
const shoutOutV1 = (n) => {
  for (let i = 0; i < n; i++) {
    console.log("What's up?");
  }
};
const shoutOutV3 = (n) => {
  let total = 0;
  for (let i = 0; i < n; i++) {
    console.log("What's up?");
    return (total += i);
  }
}; //

const shoutOutV2 = (n) => {
  for (let i = 0; i < 4; i++) {
    console.log("What's up?");
  }
};
shoutOutV2(4);

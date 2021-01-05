const largestNumber = (n) => {
  if (n < 1 || n > 9 || !Number.isInteger(n)) {
    console.log("Enter integer number from 1 to 9");
    return;
  }
  let outputNumber = "";
  for (i = 0; i < n; i++) {
    outputNumber = outputNumber + 9;
  }
  console.log(outputNumber);
};

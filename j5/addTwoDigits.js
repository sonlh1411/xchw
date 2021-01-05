const addTwoDigits = (n) => {
  if (n < 10 || n > 99 || !Number.isInteger(n)) {
    console.log("Enter two integer digits");
    return;
  }
  console.log(parseInt(n / 10) + parseInt(n % 10));
};

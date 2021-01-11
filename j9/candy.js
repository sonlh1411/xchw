function candies(n, m) {
  if (n < 1 || n > 10 || !Number.isInteger(n)) {
    console.log("Please enter valid number of children");
    return;
  }
  if (m < 2 || m > 100 || !Number.isInteger(m)) {
    console.log("Please enter valid number of candies");
    return;
  }
  let candiesPerChild = parseInt(m / n);
  console.log("Candies eaten: " + candiesPerChild * n);
}

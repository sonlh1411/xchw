function seatsInTheater(nCols, nRows, col, row) {
  if (
    nCols < 1 ||
    nCols > 1000 ||
    nRows < 1 ||
    nRows > 1000 ||
    !Number.isInteger(nCols) ||
    !Number.isInteger(nRows)
  ) {
    console.log("Enter valid Column and Row");
    return;
  }
  if (
    col < 1 ||
    col > 1000 ||
    row < 1 ||
    row > 1000 ||
    !Number.isInteger(col) ||
    !Number.isInteger(row)
  ) {
    console.log("Enter valid Column and Row");
    return;
  }
  console.log((nCols - col + 1) * (nRows - row));
}
seatsInTheater(16, 11, 5, 3);

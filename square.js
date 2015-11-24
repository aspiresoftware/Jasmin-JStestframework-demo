function square (number) {
  number = parseFloat(number, 10);
  if (number) {
    return Math.pow(number, 2);
  } else {
    return null;
  }
}
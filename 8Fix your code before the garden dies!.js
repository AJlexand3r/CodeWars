function rainAmount(mm) {
  if (isNaN(mm)) {
    return "Please enter a valid number";
  } else if (mm >= 40) {
    return "Your plant has had more than enough water for today!";
  } else {
    return "You need to give your plant " + (40 - mm) + "mm of water";
  }
}
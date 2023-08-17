function distinct(a) {
  const uniqueArr = a.filter((elem, index) => {
    return a.indexOf(elem) === index;
  });
  return uniqueArr;
}
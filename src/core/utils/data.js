const dataSort = (a, b) => {
  if (a.idSerie < b.idSerie) {
    return -1;
  }
  if (a.idSerie > b.idSerie) {
    return 1;
  }
  return 0;
};

export { dataSort };

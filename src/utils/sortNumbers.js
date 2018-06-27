export const ascendantSort = (a, b) => {
  if (isNaN(a)){
    return 1;
  } else if (isNaN(b)){
    return -1;
  } else {
    return a - b;
  }
}

export const descendantSort = (a, b) => {
  if (isNaN(a)){
    return 1;
  } else if (isNaN(b)){
    return -1;
  } else {
    return b - a;
  }
}
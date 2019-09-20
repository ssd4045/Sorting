function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const mid = array.length / 2 ? 1 : 0;
  const [left, right] = [array.slice(0, mid), array.slice(mid)];

  return orderDisassembledArrays(
                mergeSort(left), mergeSort(right)
            );
}

function orderDisassembledArrays(left, right) {
  let retArray = [],
    leftIndex = 0,
    rightIndex = 0;

  do {
    if (left[leftIndex] < right[rightIndex]) {
      retArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      retArray.push(right[rightIndex]);
      rightIndex++;
    }
  } while (leftIndex < left.length && rightIndex < right.length);

  return retArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

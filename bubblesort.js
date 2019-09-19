let arr = [6, 3, 2, 5, 7, 1, 8, 4];
function bubbleSort(array) {
  let workArray = array;

  for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < array.length - 1; x++) {
      if (workArray[x] > workArray[x + 1]) {
        swap(workArray, x, x + 1);
      }
    }
  }
  return workArray;
}

function swap(array, arrPos, arrPosmas1) {
  let pos1 = array[arrPos];
  array[arrPos] = array[arrPosmas1];
  array[arrPosmas1] = pos1;
}

// Insertion sort
function insertionSort(arrayList) {
  let i, key;
  for (let j = 1; j < arrayList.length; j++) {
    key = arrayList[j];
    i = j - 1;
    while (i >= 0 && arrayList[i] > key) {
      arrayList[i + 1] = arrayList[i];
      i--;
    }
    arrayList[i + 1] = key;
  }
  return arrayList;
}

let unsortedArray = [9, 7, 5, 3, 1, 2, 4, 6, 8, 0];
insertionSort(unsortedArray);

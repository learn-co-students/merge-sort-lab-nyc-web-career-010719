function findMinAndRemoveSorted(array) {
  return array.shift();
};

function merge(firstArray, secondArray) {
  let sorted = [];

  while (firstArray.length && secondArray.length) {
    if (firstArray[0] < secondArray[0]) {
      sorted.push(findMinAndRemoveSorted(firstArray));
    } else {
      sorted.push(findMinAndRemoveSorted(secondArray));
    };
  };

  return sorted.concat(firstArray).concat(secondArray);
};

function mergeSort(array) {
  let midpoint = array.length / 2;
  let firstArray = array.slice(0, midpoint);
  let secondArray = array.slice(midpoint, array.length);
  let sorted;

  if (array.length < 2) {
    return array;
  } else {
    return merge(mergeSort(firstArray), mergeSort(secondArray));
  };
};

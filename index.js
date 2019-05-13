function findMinAndRemoveSorted(array){
  let min = array[0]
  let minIndex = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
      minIndex = i
    }
  }
  array.shift(minIndex)
  return min
}

function minAndRemove(firstHalf,secondHalf) {
  let firstHalfmin = firstHalf[0]
  let secondHalfmin = secondHalf[0]
  if (firstHalfmin < secondHalfmin) {
    return firstHalf.shift()
  } else {
    return secondHalf.shift()
  }
}

function merge(firstHalf,secondHalf) {
  let sorted = []
  let currentMin
  while (firstHalf.length != 0 && secondHalf.length != 0) {
    currentMin = minAndRemove(firstHalf,secondHalf)
    sorted.push(currentMin)
  }
  return sorted.concat(firstHalf).concat(secondHalf)
}

function mergeSort(array) {
  let midpoint = array.length/2
  let firstHalf = array.slice(0,midpoint)
  let secondHalf = array.slice(midpoint, array.length)
  if (array.length < 2) {
    return array
  } else {
    return merge(mergeSort(firstHalf),mergeSort(secondHalf))
  }
}

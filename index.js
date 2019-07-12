function findMinAndRemoveSorted(array) {
 return array.shift()
}

function merge(arrayOne, arrayTwo) {
  let sorted = [];
  let currentMin;
  while(arrayOne.length !== 0 && arrayTwo.length !== 0){
    if(arrayOne[0] < arrayTwo[0]){
      sorted.push(findMinAndRemoveSorted(arrayOne))
    }else{
      sorted.push(findMinAndRemoveSorted(arrayTwo))
    }
      
    }
    return sorted.concat(arrayOne).concat(arrayTwo)
  }
  
function mergeSort(array){
  let mid = array.length/2 
  let firstHalf = array.slice(0, mid)
  let secondHalf = array.slice(mid, array.length)
  let sorted;
  
  if(array.length < 2){
    return array
  }else{
    sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
  return sorted
  
}  
  
  
  

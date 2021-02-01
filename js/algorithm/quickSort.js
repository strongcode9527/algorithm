function quickSort(arr, left, right) {
  var len = arr.length,
      partitionIndex,
      left = typeof left != 'number' ? 0 : left,
      right = typeof right != 'number' ? len - 1 : right;

    console.log(arr, left, right)

  if (left < right) {
      partitionIndex = partition(arr, left, right);
      quickSort(arr, left, partitionIndex-1);
      quickSort(arr, partitionIndex+1, right);
  }

  return arr;
}

function partition(array, left, right) {
 
  if(left === right) {
    return 
  }
  
  let privot = array[left]
  
  

  while (left < right) {
    while(left < right && array[right] > privot) {
      right--
    }

    array[left] = array[right]

    while(left < right && array[left] <= privot) {
      left++
    }
    array[right] = array[left]
  }

  array[left] = privot

  return left
  
}

console.log(quickSort([3,2,1]))
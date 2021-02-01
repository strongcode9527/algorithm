### 二分法是比较常用的算法，但是其变种也很多，总结一下：


需要注意的是 if条件的分割，以及while中条件的的书写。

#### 二分查找，找到x在数组的下标

```
function binarySearch(array, key) {
  let left = 0, 
      right = array.length - 1

      while(left <= right) {
        const middleIndex = ~~((left + right) / 2)
        
        if(array[middleIndex] === key) {
          return middleIndex
        }else if(array[middleIndex] < key) {
          left = middleIndex + 1
        }else {
          right = middleIndex - 1
        }
      }
      return - 1

}


```


#### 二分查找，查找左边第一个key的index


```


// binarySearchLeft([3,3,3,3,3,3,3], 3) => 0


function binarySearchLeft(array, key) {
  let left = 0, 
      right = array.length - 1

  while(left <= right) {
    const middleIndex = ~~((left + right) / 2)
    
    if(array[middleIndex] === key && array[middleIndex - 1] !== key) {
      return middleIndex
    }else if(array[middleIndex] < key) {
      left = middleIndex + 1
    }else {
      right = middleIndex - 1
    }
  }
  return - 1
}
```
#### 二分查找，查找右边第一个key的index

```

// binarySearchRight([3,3,3,3,3,3,3], 3) => 6


function binarySearchRight(array, key) {
  let left = 0, 
      right = array.length - 1

  while(left <= right) {
    const middleIndex = ~~((left + right) / 2)
    
    if(array[middleIndex] === key && array[middleIndex + 1] !== key) {
      return middleIndex
    }else if(array[middleIndex] <= key) {
      left = middleIndex + 1
    }else {
      right = middleIndex - 1
    }
  }
  return - 1
}

```
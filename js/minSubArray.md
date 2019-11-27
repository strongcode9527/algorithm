
给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组。如果不存在符合条件的连续子数组，返回 0。

示例: 

输入: s = 7, nums = [2,3,1,2,4,3]
输出: 2
解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。

```

function minSubArrayLen(s,  numbers) {
  let i = 0, j = 0 , sum = 0, result = Infinity;
  const length = numbers.length;
  for(; i < length, j < length; ) {
    if(sum + numbers[j] < s) {
      sum += numbers[j++];
    } else {
      result = Math.min(result, j - i + 1);
      sum-= numbers[i++];
    }
  }
  return result === Infinity ? 0 : result;
}

console.log(minSubArrayLen(100, [2, 3, 1, 5, 2]))


```


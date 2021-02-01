问题描述：

给定一个字符串，找出不含有重复字符的最长子串的长度。

给定 "abcabcbb" ，没有重复字符的最长子串是 "abc" ，那么长度就是3。

给定 "bbbbb" ，最长的子串就是 "b" ，长度是1。

给定 "pwwkew" ，最长子串是 "wke" ，长度是3。请注意答案必须是一个子串，"pwke" 是 子序列  而不是子串。


最优解：


```
var lengthOfLongestSubstring = function(s) {
  let n = s.length, ans = 0,
    map = new Map(); // current index of character
  // try to extend the range [i, j]
  for (let j = 0, i = 0; j < n; j++) {
    if (map.has(s[j])) {
      i = Math.max(map.get(s[j]), i);
    }
    ans = Math.max(ans, j - i + 1);
    map.set(s[j], j + 1);
  }
  return ans;
}

```


思路：

在解决数组或者字符串**连续**问题的时候，常用的抽象概念就是滑动窗口，设置一个i和j代表[i, j)左闭右开。我们设定，最长的不重复子串就在这个窗口范围之内。这样就可以找出最长的长度。
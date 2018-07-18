防抖，在一段时间之内不允许执行函数，如果在时间内多次执行，那么时间会一直往后拖。所以如果一直在执行scroll回调函数，可能会一直不执行。


```
function debounce(fn, wait) {
  let timeId = null
  return function() {
    const args = Array.from(arguments),
          ctx = this
    if(timeId) {
      clearTimeout(timeId)
      timeId = setTimeout(() => fn.apply(ctx, args), wait)
    }else {
      timeId = setTimeout(() => fn.apply(ctx, args), wait)
    }
  }
}

```

防抖：一段时间执行一次，算式对于防抖的优化

```

function throttle(fn, time) {
  let timeId = null,
      previous = 0

  return function() {
    const now = Date.now()

    if(now - previous >= time) {
      fn(...arguments)
      previous = now
    }
  }
}

```

节流的优化：允许执行最后一次的调用。再上一个版本中直接加上timeout就行了


```

function throttlePro(fn, time) {
  let timeId = null,
    previous = 0

  return function() {
    const now = Date.now(),
          ctx = this,
          args = Array.from(arguments)

    if(now - previous >= time) {
      fn.apply(ctx, args)
      previous = now
    }else {
      clearTimeout(timeId)
      timeId = setTimeout(() => fn.apply(ctx, args), time)
    }
  }
}


```
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const _candidates = candidates.sort((a, b) => a - b);
    let result = [], tempArray = [], value = 0, hasHandleStart = {};
    
    for(let i = 0; i < _candidates.length; i++) {
        const item = _candidates[i];
        if(hasHandleStart[item]) {
            continue;
        }
        hasHandleStart[item] = true
        value += item
        tempArray = [item];
        if(item === target) {
            result.push([item]);
            continue;
        }
        if(item > target) {
            return result;
        }
        a(_candidates.slice(i + 1), target - item);
    }

    function a(arrays, _target) {
        const hasHandleStart = {};
        for(let i = 0; i < arrays.length; i++) {
            const item = arrays[i];
            if(hasHandleStart[item]) {
                continue;
            }
            hasHandleStart[item] = true;
            if(item  > _target) {
                return;
            }
            
            if(item === _target) {
                tempArray.push(item);
                // console.log('in equil', arrays, _target, tempArray)
                result.push(Array.from(tempArray));
                tempArray.pop(item)
                return;
            }
            tempArray.push(item);
            a(arrays.slice(i + 1), _target - item);
            tempArray.pop();
        }
    }
    return result;
};
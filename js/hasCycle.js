/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if( !head || head.next === null ) {
      return false
  }
  
  let i = head
  let j = head.next
  
  while( i !== j ) {
      if( i === j ) {
          return true
      }
      
      i = i.next
      
      if( j === null || j.next === null ) {
          return false
      }
      
      j = j.next.next
  
  }
  
  return true
};
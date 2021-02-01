/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
  let i = 0    
  let temp = head
  let left = head
  
  if( !head.next && n === 1 ) {
      return null
  } 
  
  while(temp) {
      let next = temp.next
      temp = next
      if( i > n ) {
          left = left.next
      } 
      i++
  }
  
  if( n === i) {
      return head.next    
  }
  
  left.next = left.next.next
  
  return head
};
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
  let fast = head
  while (fast && fast.next) {
      head = head.next
      fast = fast.next.next
      if (fast === head) return true

  }    
    return false
};

// Node: {val: 3, next: 
//     Node: {val: 2, next: 
//         Node: {val: 0, next: 
//             Node {val: -4, next: 
//                 Node: {val: 2, next: ...}
//             }
//         }
//     }
// }

// {val: 1, next: {val: 2, next: null}}
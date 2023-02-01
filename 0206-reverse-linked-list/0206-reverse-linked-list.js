/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//         head
//null  -   1    -   2   -   3   -   4   -   5
//prev     curr     next 
//                curr.next
//                  prev

var reverseList = function(head) {
    let current = head
    let prev = null
    let next
    while (current !== null) {
        next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
};

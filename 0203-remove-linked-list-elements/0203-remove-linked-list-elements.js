/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

// 0    -   1   -   2   -   6   -   3   -   4   -   5   -   6
//          prev    curr    next

var removeElements = function(head, val) {
    let dummy = new ListNode(0, head)
    let prev = dummy
    let current = prev.next
    while (current !== null) {
        if (current.val === val) {
            prev.next = current.next
            current = current.next
        } else {
            prev = current
            current = current.next
        }
    }
    return dummy.next
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let count = 0
    let curr = head, res = curr
    
    while (head !== null) {
        count++
        head = head.next
    }
    
    if (count == n) return res.next

    while (curr.next) {
        if (count == n+1) curr.next = curr.next.next
        curr = curr.next
        if (curr == null) break
        count--
    }
    return res
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let lTNodes = new ListNode(), lTHead = lTNodes
    let gTNodes = new ListNode(), gTHead = gTNodes
    
    while (head !== null) {
        if (head.val < x) {
            lTNodes.next = new ListNode(head.val)
            lTNodes = lTNodes.next
        } else {
            gTNodes.next = new ListNode(head.val)
            gTNodes = gTNodes.next
        }
        head = head.next
    }
    
    lTNodes.next = gTHead.next
    return lTHead.next
};
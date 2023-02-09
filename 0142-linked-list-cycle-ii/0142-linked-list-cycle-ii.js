/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// h
//starting
// 3 -> 2 -> 0 -> -4
// s          
// f
//1st loop, s at 1n speed, f at 2n speed
// 3 -> 2 -> 0 -> -4
//      s          
//           f
//2nd loop
// 3 -> 2 -> 0 -> -4
//           s          
//      f
//3rd loop, both s and f are same
// 3 -> 2 -> 0 -> -4
//                 s          
//                 f
//4th loop, s is reset to head and f now exec at 1n speed
// 3 -> 2 -> 0 -> -4
// s          
//                 f
//5th loop, s and f are same again, return slow
// 3 -> 2 -> 0 -> -4
//      s          
//      f





var detectCycle = function(head) {
    //assign both slow and fast pointer to beginning/head
    let slow = head
    let fast = head
    //while fast and f.next and f.next.next are not null/undefined
    //iterate and assign slow to next and fast 2*next
    while (fast && fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    //once slow and fast pointer meet at same point, reassign slow to head
        if (slow === fast) {
            slow = head 
    //then, iterate again, but change speed of fast pointer to be 1n, instead of 2n
        while (slow !== fast) {
            slow = slow.next
            fast = fast.next
        }
        return slow  
        }
    }
    return null;
}
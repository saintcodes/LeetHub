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
//first loop
//   1 -> 2 -> 3 -> 4 -> 5 -> 6
//   s
//   f
// //second loop
//   1 -> 2 -> 3 -> 4 -> 5 -> 6
//   s
//        f
// //third loop
//   1 -> 2 -> 3 -> 4 -> 5 -> 6
//        s
//                  f
// //fourth loop
//   1 -> 2 -> 3 -> 4 -> 5 -> 6
//             s
//                            f
// //fifth loop breaks beacuse now fast is null and returns index 4(linkedlist)
//   1 -> 2 -> 3 -> 4 -> 5 -> 6
//                  s
//                                 f

var middleNode = function(head) {
    //sets both slow and fast pointer to head in the beginning
    let slow = head, fast = head
    //while current index of fast and next index of fast is not null, execute the loop
    //in this way, fast will always run twice as fast as slow, leaving slow as the middle index of the list
    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
};
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
//     let arr = new Array(n).fill(0)
    

//     for (let i=0; i<bookings.length; i++) {
        
//         let curr = bookings[i][0]-1
        
//         while (curr < bookings[i][1]) {
//             arr[curr] += bookings[i][2]
//             curr++
//         }
//     }
//     return arr
    
    let answer = Array(n).fill(0);
    bookings.forEach(booking => {
        let [i, j, k] = booking;
        while (i <= j) {
            answer[i - 1] += k;
            i++;
        }
    });
    return answer;
};

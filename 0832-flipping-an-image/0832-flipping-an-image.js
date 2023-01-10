/**
 * @param {number[][]} image
 * @return {number[][]}
 */

// image = [
//     [1,1,0] === [0,1,1], === [1,0,0],
//     [1,0,1],=== [1,0,1], === [0,1,0],
//     [0,0,0] === [0,0,0]  === [1,1,1]
// ]



var flipAndInvertImage = function(image) {
//      for (let i = 0; i < image.length; i++) {
//         image[i].reverse()
//         image[i] = image[i].map((num) => num === 0 ? 1 : 0)
//     }
//     return image
// };

//other solution

 let reversed = []
    for (arr of image) {
      reversed.push(arr.reverse())
    }
    for (arr of reversed) {
        for (let i = 0; i <arr.length; i++) {
            if (arr[i] === 1) {
                arr[i] = 0
            } else {
                arr[i] = 1
            }
        }
    }
    return reversed
}
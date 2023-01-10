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
     for (let i = 0; i < image.length; i++) {
        image[i].reverse()
        image[i] = image[i].map((num) => num === 0 ? 1 : 0)
    }
    return image
};
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
//     if (coordinates.length <= 2) return true
    
//     let diffX = Math.abs(coordinates[1][0]-coordinates[0][0])
//     let diffY = Math.abs(coordinates[1][1]-coordinates[0][1])
    
//     for (let i = coordinates.length-1; i > 0; i--) {
//         let xDiff = Math.abs(coordinates[i][0] - coordinates[i-1][0])
//         let yDiff = Math.abs(coordinates[i][1] - coordinates[i-1][1])
//         console.log(xDiff, diffX, yDiff, diffY, coordinates[i], i)
//         if (xDiff !== diffX || yDiff !== diffY) return false
//     }
//     return true
    // let x = [];
    // let y = [];
    // for (let i = 0; i < coordinates.length; i++) {
    //     x.push(coordinates[i][0]);
    //     y.push(coordinates[i][1]);
    // }
    // let res = [];
    // for (let i = 0; i < x.length; i++) {
    //     for (let j = i + 1; j < x.length; j++) {
    //         console.log("y[j] -y[i]:", y[j], y[i], (y[j]-y[i]) / (x[j] - x[i]))
    //         let k = Math.abs((y[j] - y[i]) / (x[j] - x[i]));
    //         console.log(k)
    //         res.push(k);
    //     }
    // }
    // // console.log(res)
    // let removeDup = [...new Set(res)];
    // if (removeDup.length == 1) {
    //     return true;
    // }
    // return false;
    	const [x1, y1] = coordinates[0]
	const [x2, y2] = coordinates[1]
	const [diffX, diffY] = [x2 - x1, y2 - y1]

	for (let index in coordinates) {
		if (index != 0) {
			const [currX, currY] = coordinates[index]
			const [prevX, prevY] = coordinates[+index - 1]
			const [currDiffX, currDiffY] = [currX - prevX, currY - prevY]

			if (diffX * currDiffY !== diffY * currDiffX) return false
		}
	}
	return true
};


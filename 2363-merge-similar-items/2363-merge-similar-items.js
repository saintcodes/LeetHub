/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    let ret = {}
    for (let i=0; i<items1.length; i++) {
        // console.log(items1[i])
        if (ret[items1[i][0]]) ret[items1[i][0]].push(items1[i][1]) 
        else ret[items1[i][0]] = +items1[i][1]
    }
    for (let i=0; i<items2.length; i++) {
        // console.log(items1[i])
        if (ret[items2[i][0]]) ret[items2[i][0]] = +ret[items2[i][0]] + items2[i][1]
        else ret[items2[i][0]] = +items2[i][1]
    }
    console.log(ret)
    let arr = []
    for (let key in ret) {
        arr.push([+key, ret[key]])
    }
    return arr.sort((a,b) => a-b)
};
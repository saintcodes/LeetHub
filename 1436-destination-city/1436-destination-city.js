/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let inbound = {}
    let outbound = {}
    
    for (let i=0; i<paths.length; i++) {
        inbound[paths[i][0]] = (inbound[paths[i][0]] || 0) +1
    }
    
    for (let i=0; i<paths.length; i++) {
        if (!(paths[i][1] in inbound)) outbound[paths[i][1]] = (outbound[paths[i][1]] || 0) +1
    }

    return Object.keys(outbound).toString()
};
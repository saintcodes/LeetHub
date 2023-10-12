/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    
    let sum = 0, record = []
    for (let i=0; i<operations.length; i++) {
        if (operations[i] == 'D') record.push(record[record.length-1]*2)
        else if (operations[i] == 'C') record.pop()
        else if (operations[i] == '+') record.push(record[record.length-1]+ record[record.length-2])
        else record.push(+operations[i])
    }
    return record.length>0 ? record.reduce((curr, prev) => curr+=prev) : 0
};
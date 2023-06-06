/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    
    let yyyy = date.slice(date.length-4, date.length)
    let mm = parseInt(months.indexOf(date.slice(date.length-8, date.length-5)) + 1)
    let dd = date.split(' ')[0]
    let ddSliced = dd.slice(0, dd.length-2)
 
    if (mm < 10) mm = "0" + mm
    if (ddSliced < 10) ddSliced = "0" + ddSliced
    
    return yyyy+"-"+mm+"-"+ddSliced
};
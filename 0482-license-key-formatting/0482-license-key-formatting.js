/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    s = s.replace(/-/g, '').toUpperCase().split("");
    let count = 0
    
    for (let i=s.length-1; i>0; i--) {
        count++;
        if (count == k) {
            s.splice(i, 0, "-");
            count = 0;
        }
    }
    return s.join('')
};
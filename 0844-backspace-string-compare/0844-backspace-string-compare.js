/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    return reduce(s) === reduce(t);
}

    const reduce = (str) => {
        if (str === null) return '';
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '#') {
                if (i > 0) {
                    str = str.slice(0, i - 1) + str.slice(i + 1);
                    i -= 2;
                } else {
                    str = str.slice(1);
                    i--;
                }
            }
        }
    return str;
};


//  0 1 2 3 4 5 6
//  a b # d # c
//      i

//returns str.slice(0 (from a to b, not inclusive), 1) === just "a" + str.slice(3) === just 'd'

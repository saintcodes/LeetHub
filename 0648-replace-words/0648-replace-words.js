/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    let split = sentence.split(' ')

    for (let i=0;i <split.length; i++) {
        for(let j=0; j<dictionary.length;j++) {
            if (split[i].startsWith(dictionary[j])) split[i] = dictionary[j]
        }
    }
    
    return split.join(' ')

};
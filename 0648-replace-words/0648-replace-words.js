/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    let split = sentence.split(' ')

    for (let i=0;i <split.length; i++) {
        dictionary.forEach((root) => {
            if (split[i].startsWith(root)) split[i] = root
        })
    }
    
    return split.join(' ')

};
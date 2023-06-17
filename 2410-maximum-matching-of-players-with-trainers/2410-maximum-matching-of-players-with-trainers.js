/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
    players.sort((a,b) => a-b)  //[4,7,9]
    trainers.sort((a,b) => a-b) //[2,5,8,8]
        
    let count = 0
    let i = players.length-1
    let j = trainers.length-1
    
    console.log(j,i)
    console.log(players)
    while (j >= 0 || i >= 0) {
        if (players[i] <= trainers[j]) {
            console.log(players[i], trainers[j], 'p < t, count+1', i, j)
            count++
            i--
            j--
        } else if (players[i] > trainers[j]) {
            console.log(players[i], trainers[j], 'p > t', 'no count add', i, j)
            i--
        } else break
    }
    return count
};
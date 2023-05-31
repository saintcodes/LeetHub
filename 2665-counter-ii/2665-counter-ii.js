/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let initial = init
    console.log(initial, init)
    const increment = function () {
        return init+=1
    }    
    
    const decrement = () => init-=1
    
    const reset = function () {
        init = initial
        return initial
    }
    
    return {increment, decrement, reset}
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
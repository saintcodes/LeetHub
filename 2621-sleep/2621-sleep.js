/**
 * @param {number} millis
 */
async function sleep(millis) {
    let res = await new Promise  ((resolve) => setTimeout(resolve, millis))
    return res
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
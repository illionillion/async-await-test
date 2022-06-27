'use strict'

/**
 * スリープ処理
 * @param {number} time ミリ秒
 * @returns Promise
 */
    const sleep = time => {
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res()
        }, time);
    })
}

/**
 * forループ
 * @param {number} max 最大値
 */
const loop = async (max) => {
    for (let i = 0; i < max; i++) {
        console.log(i);
        await sleep(1000)
    }
}


(async () => {
    // loop(10)
    // loop(10)
    // こうしないとループが重なる
    await loop(10)
    await loop(10)
})()

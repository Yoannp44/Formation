
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = (ms) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(3)
             resolve(10); 
        },ms)
    })
};
console.log(1)
sleep(2000).then(() => {console.log(4)})
console.log(2)
// 1 -> 2 -> 3 -> (2sc apres 4 )
module.exports = {sleep};
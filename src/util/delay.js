/** @format */

export default function (time = 1000) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

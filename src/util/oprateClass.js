/** @format */

export function addClass(obj, name) {
    return (obj.className += ' ' + name)
}
export function removeClass(obj, name) {
    let reg = new RegExp(name, 'g')
    return (obj.className = obj.className.replace(reg, '').trim())
}

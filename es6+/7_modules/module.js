export const COLOR = 'black'

export function comp (a,b) {
    return a+b
}
const privatVar = 42
export default {
    log () {
        console.log(privatVar)
    }
}

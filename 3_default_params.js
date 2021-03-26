
const defaultB = 30
const getDef = (c) => {
    return c * 2
}
const comp = (a=1,b=getDef(10)) => a + b

console.log(comp())
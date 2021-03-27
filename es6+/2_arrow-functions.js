
// function sum (a,b) {
//     return a+b}
//
// console.log(sum(2,3))
//
// function cube (a) {
//     return a ** 3
// }

// console.log(cube(2))

// const sum = (a,b) => {
//     return a + b
// }
// console.log(sum(2,3))
// const cube = a => a ** 3
// console.log(cube(2))
//
// setTimeout(() => {
//     console.log('after 1 ')
// },1000)

///CONTEXT
function log () {
    console.log(this)
}
const arrowLog = () => {
    console.log(this)
}
const person = {
    name:'Nata',
    age:20,
    log:log,
    arrowLog:arrowLog,
    delayLog:function (){
        setTimeout( () => {
            console.log(this.name + this.age),500}
        )
    }
}
person.log()
person.arrowLog()
person.delayLog()
// console.log(global)



// rest
const average = (...args) => {
    return args.reduce((acc,el) => acc + el,0) / args.length
}
console.log(average(10,20,30,40))

//spread

const arr = [1,undefined,3,5,8,13]
// console.log(...arr)
//
// console.log(Math.max(...arr))
// console.log(Math.min(...arr))
// console.log(Math.max.apply(null,arr))
//
// const fib = [1,...arr]
// console.log(fib)
//

// destructuring
// const [a,b] = [1,2]
// console.log(a , b)

// const [a,b = 42 ,...c]  = [...arr]
// console.log(a,b,c)

const [a,,c] = arr
console.log(a,c)

// Obj
const address = {
    country : 'USA',
    town:'zalupa',
    street:'Lenina',
    concat : function () {
        return `${this.country} ${this.town} ${this.street}`
    }
}
// const {town,country,street='Twerskaya',concat:addressConcat} = address
// console.log(addressConcat.call(address))
// console.log(street)
const {city,...rest} = address
// console.log(resr)
console.log({...address,street : 'Twerskaya',code:123})


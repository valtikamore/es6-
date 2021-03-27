
const arr = [12,23,34,45]

const str = 'Hello'

// console.log(arr[Symbol.iterator])
// console.log(str[Symbol.iterator])
//
// const iteratior = str[Symbol.iterator]()
// console.log(iteratior.next())
// console.log(iteratior.next())
// console.log(iteratior.next())
// console.log(iteratior.next())

// for (let item of str) {
//     console.log(item)
// }
//
// const country = {
//     values:['ru','kz'],
//     [Symbol.iterator]() {
//         let i = 0
//         return {
//             next: () => {
//                 const value = this.values[i]
//                 i++
//                 return {
//                     done: i > this.values.length,
//                     value
//                 }
//             }
//         }
//     }
// }
// for(let item of country) {
//     console.log(item)
// }
///GENERATOR
function *gen ( num = 4) {
    for (let i =0 ;i<num;i++) {
        try {
            yield i
        } catch (e) {
            console.log(e)
        }

    }
}
const iter = gen(3)
console.log(iter.next())
console.log(iter.throw('error'))
console.log(iter.next())
console.log(iter.next())

for(let i of gen(4)) {
    console.log(i)
}
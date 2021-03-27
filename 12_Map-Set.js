
//Map

// console.log(maaap.get('a'))

// console.log(maaap.get(NaN))
//
// maaap.clear()
// console.log(maaap.has(42))
// // maaap.delete('b')
// console.loconst maaap = new Map(
//     [['a',1]]
// )g(maaap.size)

const maaap = new Map(
    [['a',1]]
)
maaap.set('b',2).set(NaN,'Number').set(42,'demo')
// console.log(maaap.keys())
// console.log(maaap.entries())
// console.log(maaap.values())

//Set
const set = new Set([1,1,2,3,5,8,13,13,5,8])
console.log(set.size)
console.log(set.add(21))
// set.clear()
set.delete(1)
console.log(set)
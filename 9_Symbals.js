
const symbl = Symbol('demo')
const other = Symbol('demo')
console.log(symbl)
console.log(other)
console.log(symbl === other)


const obj = {
    name:'Nata',
    demo:'DEMO',
    [symbl] : 'meta'
}

// console.log(obj[other])

for(let key in obj) {
    console.log(key)
}



const cityField = 'City'
const job = 'Front-end'
const person = {
    [cityField]:'Minsk',
    age:24,
    job,
    name:'Nata',
    'country-live':'Belarus',
    print: () => 'Person',
    toString () {
        return Object.keys(this)
            .filter(key => key !== 'toString')
            .map(key => this[key])
            .join(' ')
    }
}
// console.log(person.toString())
// console.log(person.print())
// console.log(person)

//Methods
const first = {a:1}
const second = {b:2}

// console.log(Object.is(20,20))
const object = Object.assign({},first,second)
console.log(object)

console.log(Object.entries(object))
console.log(Object.keys(object))
console.log(Object.values(object))
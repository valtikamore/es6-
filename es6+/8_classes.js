

class Person {
    type = 'human'
    constructor(name) {
        this.name = name
    }
    greet() {
        console.log(this.name + " hello")
    }
}

// const Max = new Person('Max')
// console.log(Max.type)
//
// console.log(Max.greet())

// console.log(Max.__proto__ === Person.prototype)

class Programmer extends Person {
    constructor(name,job) {
        super(name)
        this._job = job
    }
    get job () {
        return this._job.toUpperCase()
    }
    set job(job) {
        if(job.length < 2 ) {
            console.log()
        }
        this._job = job
    }
    greet() {
        super.greet()
        console.log('Rewiev')
    }
}
const Valentine = new Programmer('Valentine', "Front")

console.log(Valentine.job)

class Util {
    static average (...args){
        return args.reduce((acc,el) => acc +=el ,0) /args.length
    }
}
// const util = new Util()
console.log(Util.average(1,2,3,4,5,8))
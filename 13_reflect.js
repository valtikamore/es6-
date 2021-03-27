
class Student {
    constructor(name) {
        this.name = name
    }
    greet() {
        console.log(`Hello,my name is ${this.name}`)
    }
}
// class  ProtoStudent {
//     uniiver = 'Oxf'
// }
const student = Reflect.construct(Student,['Valentine'])
// console.log(student.__proto__ === ProtoStudent.prototype)

Reflect.apply(student.greet,{name:'Tester'},[])
console.log(Reflect.ownKeys(student))

Reflect.preventExtensions(student)

student.age = 25
console.log(student)

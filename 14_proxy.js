const validator = {
    get(target, prop) {
        return prop in target ? target[prop] : `Field ${prop} doesn't exist`
    },
    set(target, prop, value) {
        if (value.length > 2) {
            Reflect.set(target, prop, value)
        } else {
            console.log('Length must be more then 2 symbals. Now' + value.length)
        }
    }
}
const form = {
    login: 'tester',
    pass: '12345'
}
const formProxy = new Proxy(form, validator)

console.log(formProxy.login)
console.log(formProxy.pass)
console.log(formProxy['username'])

formProxy.pass = '12'
console.log(formProxy.pass)



function log(message) {
    console.log('[log] : ' , message)
}
const proxy = new Proxy(log, {
    apply(target, thisArg, argArray) {
        if(argArray.length === 1) {
            Reflect.apply(target,thisArg,argArray)
        } else {
            console.log('number of arguments doesnt match')
        }
    }
})
proxy('Custom')
proxy('M','M')
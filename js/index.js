const name = 'akhshy'

console.log(name.length)

console.log(name.charAt(0))

console.log(name.at(0))

console.log(name[0])

name[0] = 'A'

console.log(name)

const withSpace = '  sds  '
console.log(withSpace.length)
console.log(withSpace.trim().length)


const arr = ['I', 'am', 12, true, 'akhshy', {}]
const arr1 = arr

console.log(arr)

console.log(arr.length)

console.log(arr.toString())

console.log(arr.at(1))
console.log(arr[1])

console.log('before pop', arr)
console.log(arr1.pop()) // shallow copy / deep copy
console.log('after pop', arr)


let copyme = 'akhshy'
let copymeTwo = copyme

copymeTwo = copymeTwo.toUpperCase()
console.log(copymeTwo)
console.log(copyme)

arr.push('new me')
console.log(arr)

arr[0] = 'first'

console.log(arr)

const fixed = [1, 2, 3, 4, 5]
const userEntered = [6, 7]
const userEntered1 = [8, 9]
console.log(fixed.concat(userEntered, userEntered1).length)

console.log(fixed)
console.log(fixed.includes(7))

// console.log(fixed.findLast(x => x / 2))

// const sortme = [1, 26, 2, 5, 8, 4] task given
const sortme = [1, 6, 2, 5, 8, 4]
sortme.sort()
console.log(sortme)
sortme.reverse() //desc
console.log(sortme)

const sortMeWithOutChange = [5, 2, 9, 1,7, 3]
console.log(sortMeWithOutChange.toSorted())
console.log(sortMeWithOutChange)

const globalArr = []

function print(x) {
    if (x > 5) {
        globalArr.push(x)
    }
}

sortMeWithOutChange.map(x => print(x))

console.log(globalArr)

const greaterThanFive = sortMeWithOutChange.filter(x => x > 5)

console.log(greaterThanFive)


let totalCount = 0

function addUp(x) {
    totalCount += x
}

sortMeWithOutChange.map(x => addUp(x))

console.log('totalCount', totalCount)

console.log(sortMeWithOutChange.reduce((total, value) => total + value, 10))
// every
// some
// keys
// entries

console.log(sortMeWithOutChange.every(x => x > 0))

console.log(sortMeWithOutChange.some(x => x > 5))

console.log(sortMeWithOutChange[0])

const keys = sortMeWithOutChange.keys()

for (let index of keys) {
    console.log('index: ', index)
}

const entries = sortMeWithOutChange.entries()

for (let entry of entries) {
    console.log('entry: ', entry)
}

// random generator
// JS - Math

const rndm = Math.random()
console.log(rndm * 10)

// floor
// ceil

console.log(Math.floor(rndm * 10))
console.log(Math.ceil(rndm * 10))

// conditional Operations
if (rndm > 0.5) {
    console.log('Random is greater than 5')
} else {
    console.log('Random is lower than 5')
}

// ternary Operator
(rndm > 0.5) ? console.log('ternary greater than 5') : console.log('ternary lower than 5')

if (rndm < 0.2) {
    console.log('Random is lesser than 2')
} else if (rndm < 0.6) {
    console.log('My Random is between 2 & 6')
} else {
    console.log('Random is greater than 6')
}

rndm > 0.5 && console.log('Am I being consoled if > 0.5')

// break statement
for (let abc =1; abc < 100; abc++ ) {
    if (abc > 10) {
        break
    }
    console.log(abc)
}
console.log('---------------------------------------------------')
console.log('---------------------------------------------------')
// continue statement
for (let abc =1; abc < 100; abc++ ) {
    if (10 < abc && abc < 90) {
        continue
    }
    console.log(abc)
}




// RegExp - patterns
console.log('RegExp Topics')
console.log(name.search('shy'))
console.log(name.search(/SHY/i))

const text = '50 I am the most biggest txt like 50 characters or some biggest line of txt in this para'

console.log(text.search('txt'))
console.log(text.replace(/txt/g, 'text'))

console.log(text.match(/\d/g).toString())

// Minimum eight characters, at least one letter and one number:
const passPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,9}$/
const testText = 'akhshyganesh1'
console.log(passPattern.test(testText))

console.log('error handling')
let loading = false
try {
    loading = true
    const a = 0
    a = 1
    console.log('I wont be consoled as it already broke')
    loading = false
} catch (error) {
    console.log(error)
    console.log("I will be printed even after this catch")
    loading = false
}

console.log(loading)

try {
    loading = true
    console.log(loading)
    const a = 0
    a = 1
    console.log('I wont be consoled as it already broke')
} catch (error) {
    console.log(error)
    console.log("I will be printed even after this catch")
} finally {
    console.log('I will be executed for try or catch')
    loading = false
}

console.log(loading)

const obj1 = {id:1, name: 'akhshy'}
const obj2 = JSON.parse(JSON.stringify(obj1))
obj2.name = 'Akhshy Ganesh'
console.log(obj1)
console.log(obj2)

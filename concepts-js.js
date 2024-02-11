let abc = 0 // global scope
const checkMe = 'I will only print inside func' // GLOBAL scope

function changeAbc() {
    abc += 1
    const checkMe = 'new checkMe Variable' // FUNC scope
    console.log(checkMe)
}
console.log(abc)
changeAbc()
console.log(abc)
console.log(checkMe)

function addTwoNum (x, y=0) {
    console.log('first args value is ', x)
    console.log('second args value is ', y)
    return x + y
}
console.log('before update abc: ', abc)
console.log('Trying to run addTwoNum func and assign to abc')
abc = addTwoNum(1)
console.log('after update abc: ', abc)

console.log('is my abc NaN ', isNaN(abc))

const name = 'AKHSHY'
console.log(typeof name)
console.log(name.toLowerCase())

// Object / JSON
// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   }

obj = { userId: 'some-random-id', id: 1, title: 'Something here as well', completed: false }


console.log(Object.keys(obj)) // ['userId', 'id', 'title', 'completed']

console.log(Object.values(obj)) // ['some-random-id', 1, 'Something here as well', false]

obj.func = function () { alert('alert from obj.func') }

console.log(obj)
// {
//     "userId": "some-random-id",
//     "func": func(),
//     "id": 1,
//     "title": "Something here as well",
//     "completed": false
// }

obj.func()

const btn = document.getElementById('click-btn')

const alertSomething = () => { alert('something was alerted') }

btn.addEventListener('click', () => { alert('something was alerted')})

const clickBtn = document.getElementById('you-found-me')

clickBtn.addEventListener("click", function (e) {
    console.log(this.className)
    console.log(e.currentTarget.className)
    console.log(this.classList)
    console.log(this)
    console.log(e.currentTarget)
    console.log(e.currentTarget === this)
})

const NAME = 'Akhshy Ganesh     '


console.log(String.prototype)

console.log(NAME.trim())

const full_name = NAME.trim().split(' ')

full_name.map(name => console.log(name))


const address = ['Chennai', 'Tamil Nadu']

console.log(full_name.concat(address))

const num = [1, 5, 8, 3, 2, 1, 2, 5]
console.log(num)

console.log(Array.prototype)

console.log(num.sort())
console.log(num)

console.log(num.reverse())
console.log(num)

console.log(num.sort((x, y) => x-y)) // asen
console.log(num)

console.log(num.sort((x, y) => y-x)) // desc
console.log(num)

num.map(x => x+1) // does not change original arr



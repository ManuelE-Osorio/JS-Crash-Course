// var, let, const: var is global, its better to use let and const\
// datatypes: string, number, bool, null, undefined, symbol

const a = 'john'
const b = 5.2
console.log(a)
console.log(b)
console.log('hello ' + a + b + ' world')
console.log(`Hello ${a}  ${b} world`)
console.log(a.length)

// arrays
const c = new Array(1,2,3,4,5)
c.push(6)
console.log(c)

//object

const d = {
    name: 'John',
    lastName: 'Doe',
    son: {
        name: 'Johny',
        lastName: 'Doe'
    } 
}

console.log(d.son.name)

//json

const dJson = JSON.stringify(d)
console.log(dJson)

for (let i = 0; i<10; i++)
{
}

let i = 0
while(i<10)
{
    i = i+5
    console.log(i)
}

for (let element of c)
{
    console.log(element + ' for element of c')
}

c.forEach( function(todo)  
{
    console.log(todo + ' c.forEach')
})

let e = c.map( function(element) 
{
    return element*2
})
console.log('map')
console.log(e)

let f = c.filter( function(element) {
    return element >= 3
})
console.log('filter')
console.log(f)

//== just matches values === matches data values

let x = 10
console.log('double =')
if( x == '10')
{
    console.log(true)
}
else
{
    console.log(false)
}

console.log('triple =')
if( x === '10')
{
    console.log(false)
}
else
{
    console.log(false)
}

switch(x)
{
    case '10':
        break;
    case 10:
        break;
}

//? ternary operator same principle as c#

const add = num => num+2
console.log('arrow function')
console.log(add(2))


//constructors

class Person {
    constructor(name, lastname, birthDate) {
        this.name = name
        this.lastName = lastname
        this.birthDate = new Date(birthDate)
    }

    GetBirthYear() {
        return this.birthDate.getFullYear()
    }

    GetFullName() {
        return `${this.name} ${this.lastName}`
    }
}


const person1 = new Person('John', 'Doe', '2000-10-15')
console.log(person1)
console.log(person1.GetBirthYear())
console.log(person1.GetFullName())

//DOM

//Single element selector

// window.alert('Danger')
const header = document.getElementById('header')
const h1 = document.querySelector('label')
console.log(header)
console.log(h1)
const btn = document.querySelector('.btn')

//Multiple element selector

let item = document.querySelectorAll('.item')
console.log(item)
item = document.getElementsByClassName('item')
console.log(item)
item = document.getElementsByTagName('li')
console.log(item)

//Events

//events: mousehover, mouseout ...

btn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('click')
    btn.style.background = 'red'
    document.querySelector('#my-form').style.background = '#CCC'
    document.querySelector('body').classList.add('bg-dark')
})
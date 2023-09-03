// given type aliases to users variables
type users = {
	name: string
	age: number
	occupation?: string
}

let users: users[] = [
	{
		name: 'John Smith',
		age: 30,
		occupation: 'Software engineer',
	},
	{
		name: 'Kate Müller',
		age: 28,
	},
]

// pet type aliases
type Dog = {
	bark: () => void
}
type Bird = {
	bark: () => void
}

type Pet2 = Bird | Dog

//

type Pet = {
	name: string
	action: string
}

let Dog: Pet = {
	name: 'Doge',
	action: 'running',
}
// type aliases day
//literal type
type dayOfWeek = 'Monday' | 'a' | 'B' | 'danseterusnya'

//simplifies

// let user = getUser()
// console.log(user && user.address ? user.address.street : undefined)
// optional chaining
// console.log(user?.address.?street)
//
// let x = foo !== null && foo !== undefined ? foo : bar()
//Nullish coalescing
// let x = foo??bar()

//problem
// let value: unknown = 'a'
// console.log(value.toUpperCase())
//unknown type
let value: unknown = 'a'
//narrowing
if (typeof value === 'string') console.log(value.toUpperCase())
//

// 1. Define a class called Logger that takes the name of a file in its constructor and provides a method for writing messages to that file. Don’t worry about the actual file I/O operations. Just define the class with the right members.

// class Logger{
// 	constructor (public fileName:string,) { }
// 	log ( message: string ) {}
// }

// 2. Given the Person class below, create a getter for getting the full name of a person.
//
// class Person2 {
// 	constructor(public firstName: string, public lastName: string) {}
// 	get fullName() {
// 		return `${this.firstName}  ${this.lastName}`;
// 	}
// }

//3. Create a new class called Employee that extends Person and adds a new property called salary.
//
// class Employee2 extends Person2 {
// 	constructor(firstName: string, lastName: string, public salary: number) {
// 		super(firstName, lastName)
// 	}
// }

//4. What is the difference between private and protected members?
//the difference between private and protected members is subclasses can access protected members, but private not, in a nutshell, protected members can be inherited

//5. Given the data below, define an interface for representing employees:
// let employee = {
// name: 'John Smith',
// salary: 50_000,
// address: {
// street: 'Flinders st',
// city: 'Melbourne',
// zipCode: 3144,
// },

// interface Address {
// 	street: string
// 	city: string
// 	zipcode: number
// }

// interface Employee3 {
// 	name: string
// 	salary: number
// 	address: Address
// }

// EXCERCISE GENERICS
function echo4<T>(arg: T): T {
	return arg
}

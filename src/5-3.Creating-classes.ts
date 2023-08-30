//Creating Classes
class Account {
	constructor(
		//parameter properties
		public readonly id: number, // readonly properties
		public owner: string,
		private _balance: number //nickname?: string //optional properties
	) {}

	deposit(amount: number): void {
		if (amount <= 0) {
			throw new Error('amount must be greater than zero')
		} else {
			this._balance += amount
		}
	}
	//getter
	get balance(): number {
		return this._balance
	}

	// access control (private) keyword - method
	//private calculateTax() {}
}

//instantiation (Creating Object)
let account = new Account(1, 'Minipingu', 0)
account.deposit(100)
//calling getter
console.log(account.balance) //100

//
class SeatAssignment {
	//index signatures
	[setNumber: string]: string
}

let seats = new SeatAssignment()
seats.A1 = 'Minipigu'
seats.A2 = 'Kakapingu'
seats['A3'] = 'test'
console.log(seats) // { A1: 'Minipigu', A2: 'Kakapingu', A3: 'test' }
//
//static members
//static members are belong to class, not instance
class Ride {
	private static _activeRides: number = 0
	start() {
		//so we access everything about static members using classname
		Ride._activeRides++
	}
	stop() {
		Ride._activeRides--
	}
	static get activeRides() {
		return Ride._activeRides
	}
}
// no static? access from instance
let ride1 = new Ride()
ride1.start() // adding 1 to activeRides = 1
let ride2 = new Ride()
ride2.start() // adding 1 to activeRides = 2

//of course the getter too, access from class
console.log(Ride.activeRides) //2
//

//11. inheritance

class Person {
	constructor(public firstName: string, public lastName: string) {}

	get fullName() {
		return this.firstName + ' ' + this.lastName
	}
	//protected modifier, but dont use this unless we are know what we are doing
	protected walk(): void {
		console.log('Walking')
	}
}

class Student extends Person {
	constructor(public studentId: number, firstName: string, lastName: string) {
		super(firstName, lastName)
	}
	takeTest() {
		this.walk()
		console.log('Taken test')
	}
}

class Teacher extends Person {
	override get fullName() {
		return 'Professor ' + super.fullName
	}
}

let teacher = new Teacher('John', 'Smith')
console.log(teacher.fullName)

class Principal extends Person {
	override get fullName() {
		return 'Principal ' + super.fullName
	}
}

//13. Polymorphism
// Open Closed Principle
// Classes Should be open for extension and closed for modification

printNames([
	new Student(1, 'mini', 'pingu'),
	new Teacher('kaka', 'pingu'),
	new Principal('anak', 'biru'),
])

function printNames(people: Person[]) {
	for (let person of people) {
		console.log(person.fullName)
	}
}

// 15. Abtract Classes and Methods
//abstract class is not ready class
abstract class Shape {
	constructor(public color: string) {}
	abstract render(): void
}

class Circle extends Shape {
	constructor(public radius: number, color: string) {
		super(color)
	}
	override render(): void {
		console.log('Rendering a circle')
	}
}
// let shape = new Shape('red') //will get error if instantiated
//this render call doesnt make sense because what shape to render?
// shape.render()

//16. Interfaces
// interfaces are used for defining shape of Object
// abstract class Calendar {
// 	constructor(public name: string) {}
// 	abstract addEvent(): void
// 	abstract removeEvent(): void
// }

//interface used for type checking only
interface Calendar {
	name: string
	addEvent(): void
	removeEvent(): void
}

interface CloudCalendar extends Calendar {
	sync(): void
}
//use ctrl+. for fast implement
class GoogleCalender implements Calendar {
	constructor(public name: string) {}
	addEvent(): void {
		throw new Error('Method not implemented.')
	}
	removeEvent(): void {
		throw new Error('Method not implemented.')
	}
}

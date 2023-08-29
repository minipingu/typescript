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

	getfullname() {
		return this.firstName + ' ' + this.lastName
	}

	walk(): void {
		console.log('Walking')
	}
}

class Student extends Person {
	constructor(public studentId: number, firstName: string, lastName: string) {
		super(firstName, lastName)
	}
	takeTest() {
		console.log('Taken test')
	}
}

let student1 = new Student(1, 'mini', 'pingu')
student1.takeTest()

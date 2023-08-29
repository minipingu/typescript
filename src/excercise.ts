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

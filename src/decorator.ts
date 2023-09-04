type ComponentOptions = {
	selector: string
}
//decorator with parameter using decorator factory
// parameter constructor: Function is a must for class decorator
function Component(options: ComponentOptions) {
	return (constructor: Function) => {
		console.log('Component decorator called')
		constructor.prototype.options = options
		constructor.prototype.uniqueId = Date.now()
		constructor.prototype.insertInDOM = () => {
			console.log('Inserting the component in the DOM')
		}
	}
}

// Decorator Composition
function Pipe(constructor: Function) {
	console.log('Pipe decorator called')
	constructor.prototype.pipe = true
}

// Apply multiple decorator after Component Decorator

@Component({ selector: 'aaaa' })
@Pipe
class ProfileComponent {} // Pipe called first because the concept is like math -> f(g(x)), g(x) will be evaluated first

// Method Decorator
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
	const original = descriptor.value as Function
	descriptor.value = function (...args: any) {
		console.log('Before')
		original.call(this, ...args)
		console.log('After')
	}
}
class Person2 {
	@Log
	say(message: string) {
		console.log('Person Says' + message)
	}
}

//Accessor Decorators, decorator for getter an setter
function Capitalize(
	target: any,
	methodName: string,
	descriptor: PropertyDescriptor
) {
	const original = descriptor.get
	descriptor.get = function () {
		const result = original?.call(this)
		return typeof result === 'string' ? result.toUpperCase() : result
	}
}

class Person3 {
	constructor(public firstName: string, public lastName: string) {}

	@Capitalize
	get fullName() {
		return `${this.firstName} ${this.lastName}`
	}
}

let person = new Person3('mini', 'pingu')
person.fullName

// Property Decorator
// function MinLength(length: number) {
// 	return (target: any, propertyName: string) => {
// 		let value: string

// 		const descriptor: PropertyDescriptor = {
// 			get() {
// 				return value
// 			},
// 			set(newValue: string) {
// 				if (newValue.length < length)
// 					throw new Error(
//             `${ propertyName } should be at least ${ length } characters long`
//             value = newValue
// 					)
// 			},
// 		}
// 	}
// }

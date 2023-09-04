//3. Generic Classes
//we can use K or V type (this is just alias) as generic types
//then we can fill any data type
//or let say this generic mean reusable (not only hooked in 1 type)

class KeyValuePair<K, V> {
	constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair('1', 1)
//then we can access any method or properties with that type
pair.key.length
pair.value.toString()

//4. Generic Functions
class ArrayUtils {
	//yes we can use generic type in method
	static wrapInArray<T>(value: T) {
		return [value]
	}
}
//as always, you dont need instantiation to access static methods
// conclusions is the type follows what type we input
let numbers = ArrayUtils.wrapInArray('a')

//5. Generic Interfaces
//this function using interfaces with generic type for return
//study case : we want to fetch data from url, but based on endpoint like /user or /product, because the data type is different each result, so we custom it using generic type in Result interface

// function fetch<T>(url: string): Result<T> {
// 	return {
// 		data: null,
// 		error: null,
// 	}
// }

//we create Result with generic type, so we can input any type but only using 1 interface (reusable)
interface Result<T> {
	data: T | null
	error: string | null
}
// then we create interfaces to fill the <T>
interface User {
	username: string
}
interface Product {
	title: string
}
// then we call the fetch<T>()
// let result = fetch<User>('URL')

//recap : fetch<T>():Result<T>, <T> -> interface User or interface Product

//6. Generic type Constraints (limiting)
//we can limit or specify the type that accepted in generic type

class Customer2 extends Person {}
//using extends keyword to limit the type
function echo<T extends Customer2>(value: T) {
	return value
}
//or using primitive type
function echo2<T extends number | string>(value: T) {
	return value
}
echo2(2)
//but is it the same as not using generic?
function echo3(value: number | string) {
	return value
}
// no its different, if we hover return still showing or options, but generic isn't
echo3(1)

//7. Extending Generic Classes

interface Product2 {
	name: string
	price: number
}

//a little note: properties (in class Store is 'objects'), need to be initialized, otherwise we will get error, we can initialize using the constructor or = operator

class Store<T> {
	protected _objects: T[] = []
	add(obj: T): void {
		//this method will return array of T
		this._objects.push(obj)
	}

	//8. Key Operator
	find(property: keyof T, value: unknown): T | undefined {
		return this._objects.find((obj) => obj[property] === value)
	}
}

let store = new Store<Product2>()
store.add({ name: 'a', price: 1 })
store.find('name', 'a')
store.find('price', 1)
//store.find('nonExistingProperty', 1)

//to inherit generic type, Pass on the generic type parameter to class name
class CompressibleStore<T> extends Store<T> {
	compress() {}
}
//Restrict the generic type parameter using extends keyword in generic type
// if you are using inherit properties (in this case is _objects) you should pass the  generic
// class SearchableStore<T extends { name: string }> extends Store<T> {
// 	find(name: string): T | undefined {
// 		//return one of the name stores
// 		return this._objects.find((obj) => obj.name === name)
// 	}
// }

//Fix the generic type parameter
// class ProductStore extends Store<Product> {
// 	filterByCategory(category: string): Product[] {
// 		//this method will return the product data from product array data from <Product> interface
// 		return []
// 	}
// }

// 9. Type Mapping

type ReadOnly<T> = {
	readonly [K in keyof T]: T[K]
}

type Optional<T> = {
	[K in keyof T]: T[K]
}

type Nullable<T> = {
	[K in keyof T]: T[K] | null
}

let product: ReadOnly<Product2> = {
	name: 'a',
	price: 1,
}

//product.name = 'a' // this is readonly properties, you cant reassign them

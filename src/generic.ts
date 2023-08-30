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
let numbers = ArrayUtils.wrapInArray('a')

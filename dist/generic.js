"use strict";
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair('1', 1);
pair.key.length;
pair.value.toString();
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
let numbers = ArrayUtils.wrapInArray('a');
class Customer2 extends Person {
}
function echo(value) {
    return value;
}
function echo2(value) {
    return value;
}
echo2(2);
function echo3(value) {
    return value;
}
echo3(1);
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find((obj) => obj[property] === value);
    }
}
let store = new Store();
store.add({ name: 'a', price: 1 });
store.find('name', 'a');
store.find('price', 1);
class CompressibleStore extends Store {
    compress() { }
}
let product = {
    name: 'a',
    price: 1,
};
//# sourceMappingURL=generic.js.map
"use strict";
var _a;
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 50000) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(1);
let employee = {
    id: 1,
    name: 'Minipingu',
    retire: (date) => {
        console.log(date);
    },
};
employee.name = 'Mosh';
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log('Hola');
    }
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log('a');
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
let phone = document.getElementById('phone');
phone.value;
function render(document) {
    if (typeof document === 'string') {
        document.indexOf;
    }
}
function processEvents() {
    while (true) { }
}
processEvents();
//# sourceMappingURL=index.js.map
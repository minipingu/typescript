'use strict'
function calculateTax(income, taxYear = 2022) {
	if (taxYear < 50000) {
		return income * 1.2
	}
	return income * 1.3
}
calculateTax(1)
let employee = {
	id: 1,
	name: 'Minipingu',
	retire: (date) => {
		console.log(date)
	},
}
employee.name = 'Mosh'

function kgToLbs(weight) {
	if (typeof weight === 'number') {
		return weight * 2.2
	} else {
		return parseInt(weight) * 2.2
	}
}
kgToLbs(10)
kgToLbs('10kg')
//# sourceMappingURL=index.js.map

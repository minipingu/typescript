// enum
// let numbers:number[] = []
// enum Size {
//    Small = 1,
//    Medium = 2,
//    Large = 3
// }

// console.log(Size.Large)

//function
function calculateTax(income: number, taxYear = 2022) {
	if (taxYear < 50000) {
		return income * 1.2
	}
	return income * 1.3
}
calculateTax(1)
//

//2. type alias
type Employee = {
	readonly id: number
	name: string
	retire: (date: Date) => void
}

let employee: Employee = {
	id: 1,
	name: 'Minipingu',
	retire: (date: Date) => {
		console.log(date)
	},
}
employee.name = 'Mosh'

//
//3. Union type
function kgToLbs(weight: number | string): number {
	//Narrowing
	if (typeof weight === 'number') {
		return weight * 2.2
	} else {
		return parseInt(weight) * 2.2
	}
}

kgToLbs(10)
kgToLbs('10kg')

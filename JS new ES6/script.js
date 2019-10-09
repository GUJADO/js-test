let name = "Ivan",
age = 30,
mail = 'ex@mail.ru';

document.write('User' + name + '' +age+ 'age. His E-mail' + mail);



let name = "Ivan",
age = 30,
mail = 'ex@mail.ru';

document.write('User ${name} ${age} age. His E-mail: ${mail}'); 


function makeArray () {
	var items = [];
	for(var i =0; i <10; i++){
		var item = function(){
			console.log(i);
		};
		items.push(item);
	    }
	    return items;
}
var arr = makeArray();
arr[1]();
arr[3]();
arr[7]();


let fun = () =>{
	console.log(this);

};
fun();
let obj = {
	number: 5,
	sayNumber: function() {
		let say = () =>{
			console.log(this);
		};
		say ();
	}
};
obj.sayNumber() ;


function calcOrDouble(number, basis) {
	basis = basis || 2;
	console.log(number*basis);
}
calcOrDouble(3,5);
calcOrDouble(6);


function calcOrDouble(number, basis = 2) {
	//basis = basis || 2; ES5
	console.log(number*basis);
}
calcOrDouble(3,5);
calcOrDouble(6);

class Rectangle{
	constructor(height, width) {
		this.height = height;
		this.width= width;
	}
	calcArea() {
		return this.height * this.width;
	}
}

const square = new Rectangle(10 , 10 );
console.log (square.calcArea());

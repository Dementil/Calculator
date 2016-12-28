(function (global) {
    'use strict';

function calc(a, b, operator){	
var checkTypeRes = CheckType(a, b);

	if(checkTypeRes){
		if (operator == '+'){
	    	console.log(a + b);
	    } else if (operator == '-') {
			console.log(a - b);
		} else if (operator == '*') {
			console.log(a * b);
		} else if (operator =='/') {
			if (b == 0) {
				alert ('ошибка ввода\, делить на ноль нельзя');
				return;
			} 
			console.log(a / b);
			
		}

	} else return;
}

calc (5, 0, '/')



function CheckType(a, b) { // по умолчанию аргументы undefined
		if (typeof a == 'number' && typeof b == 'number'){
		console.log('введеные значения - числа');
		return true;
	} 
	else
		a = null;
		b = null;
	return false;
}

}(window));
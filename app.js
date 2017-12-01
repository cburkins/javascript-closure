

console.log("Hello World");

function buildFunctions() {
	var arr = [];

	for (var i=0; i<3; i++) {
		arr.push(
			function() {
				console.log(i);
			}
		)
	}
	return arr;
}

var fs = buildFunctions();
console.log("Answer will be: 3, 3, 3")
console.log("closure points to active variable i, which when we call it will be 3")
fs[0]();
fs[1]();
fs[2]();

// ---------------------------------------
function buildFunctions2() {
	var arr = [];
	for (var i=0; i<3; i++) {
		let j = i;
		arr.push(
			function() {
				console.log(j);
			}
		)
	}
	return arr;
}

var fs2 = buildFunctions2();
console.log("Answer will be: 0, 1, 2")
console.log("using let, which is scope to the block/loop")
fs2[0]();
fs2[1]();
fs2[2]();
// ---------------------------------------
function buildFunctions3() {
	var arr = [];
	for (var i=0; i<3; i++) {
		arr.push(
			(function (j) {
				return function() {
					console.log(j);
				}
			})(i)
		)
	}
	return arr;
}

var fs3 = buildFunctions3();
console.log("Answer will be: 0, 1, 2")
console.log("Creating closure to capture var i at that moment")
fs3[0]();
fs3[1]();
fs3[2]();



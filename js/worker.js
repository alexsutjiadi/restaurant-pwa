onmessage = function(e) {
	console.log('message masuk worker');

	let hasil = e.data[0] * (160000) + e.data[1] * (270000) + e.data[2] * (230000) + e.data[3] * (480000) + e.data[4] * (90000) + e.data[5] * (220000);
	let total = +e.data[0] + +e.data[1] + +e.data[2] + +e.data[3] + +e.data[4] + +e.data[5];
	if(isNaN(hasil)){
		postMessage('input woi');
	}else{
		console.log("ada hasil");
		postMessage([hasil,total]);
	}
}

// Insert angka
function insert(num){
	document.form.textarea.value = document.form.textarea.value + num;
}

// Fungsi untuk menghitung
function equal(){
	let hasil = document.form.textarea.value;
	document.form.textarea.value = eval(hasil);
}

// Clean
function clean(){
	document.form.textarea.value = "";
}

// Delete
function back(){
	let hasil = document.form.textarea.value;
	document.form.textarea.value = hasil.substring(0,hasil.length-1);
}
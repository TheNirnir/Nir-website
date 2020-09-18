document.addEventListener("DOMContentLoaded", function (event) {
	document.getElementById('color-square').style.height = document.getElementById('color-square').offsetWidth + "px";
	// console.log(document.getElementById('color-square').offsetWidth);
});

function changeColor() {
	document.getElementById('color-square').style.backgroundColor = document.getElementsByTagName('input')[0].value;
	// console.log(document.getElementsByTagName('input')[0].value);

}
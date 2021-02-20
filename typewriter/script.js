let i = 0;
let data = [
	"Ajeet Singh Parmar",
	"Some other Name",
	"One More Name",
	"I want to Add this more String",
	"Yahoo! It is now working properly :)",
];
let loop = 0;
let typingSpeed = 175;
let deleteSpeed = 50;
let stringIsFull = false;
let stringIsEmpty = true;

const typewriter = () => {
	loop = loop % data.length;
	let text = data[loop];
	if (i <= text.length && !stringIsFull) {
		document.getElementById("demo").innerHTML = text.substring(0, i);
		i++;
		if (i == text.length + 1) {
			stringIsFull = true;
			stringIsEmpty = false;
			setTimeout(typewriter, 2000);
			return;
		}
		setTimeout(typewriter, typingSpeed);
	} else if (i > 0 && !stringIsEmpty) {
		document.getElementById("demo").innerHTML = text.substring(0, --i);
		console.log("Hello");
		if (i == 0) {
			stringIsFull = false;
			stringIsEmpty = true;
			loop++;
		}
		setTimeout(typewriter, deleteSpeed);
	}
};

typewriter();

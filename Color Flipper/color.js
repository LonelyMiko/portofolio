get_random = function (list) {
  return list[Math.floor((Math.random()*list.length))];
} 

const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById('btn')
const color = document.querySelector(".color");

btn.addEventListener("click",function () {
	let hexColor = "#";
	for (let i = 0; i < 6; i++) {
		hexColor += get_random(hex);
	}
	color.textContent = hexColor;
	document.body.style.backgroundColor = hexColor;
})


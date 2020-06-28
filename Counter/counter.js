let count = 0;
const value = document.getElementById('value');
const btns = document.querySelectorAll(".btn") // Gets all element who have class

btns.forEach(function (btn) {
	btn.addEventListener("click",function (e){
		const styles = e.currentTarget.classList;
		//Decrease Count by 1
		if (styles.contains("decrease")) {
			count--;
		}
		value.textContent = count;
		//Reset Count
		if (styles.contains("reset")) {
			count = 0;
		}
		value.textContent = count;
		//Increase Count by 1
		if (styles.contains("increase")) {
			count++;
		}
		value.textContent = count;

		if (count > 0) {
		value.style.color="#00FF00";
	}
		if (count < 0) {
			value.style.color="red";
		}
		if (count === 0) {
			value.style.color="#fff";
		}
	});
});

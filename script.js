//your JS code here. If required.
let inputId = document.getElementById('block_id')
let colorId = document.getElementById('colour_id')
let changeBtn = document.getElementById('change_button')
let resetBtn = document.getElementById('reset_button')
let gridItems = document.querySelectorAll('.grid-item')
changeBtn.addEventListener('click',() => {
	
	let gridnum = Number(inputId.value);
	if(!gridnum) return;
	let color = colorId.value

	gridItems.forEach(item => {
		item.style.backgroundColor = 'transparent';
	});
	gridItems[gridnum-1].style.backgroundColor = color;
})
resetBtn.addEventListener('click', reset)
	function reset(){
	for(let item of gridItems){
		item.style.backgroundColor = 'transparent';
	}
	inputId.value = ''
}

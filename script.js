//your JS code here. If required.
let inputId = document.getElementById('block_id')
let colorId = document.getElementById('colour_id')
let changeBtn = document.getElementById('change_button')
let resetBtn = document.getElementById('reset_button')

changeBtn.addEventListener('click',() => {
	let gridItems = document.querySelectorAll('.grid-item')
	let gridnum = Number(inputId.value);
	if(!gridnum) return;
	let color = colorId.value

	gridItems.forEach(item => {
		item.style.backgroundColor = 'transparent';
	});
	gridItems[gridnum-1].style.backgroundColor = color;
})
resetBtn.addEventListener('click', ()=>{
	let gridItems = document.querySelectorAll('.grid-item')
	gridItems.forEach(item => {
		item.style.backgroundColor = 'transparent';
	});
	inputId.value = ''
})
	
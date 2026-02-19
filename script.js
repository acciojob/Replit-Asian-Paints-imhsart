//your JS code here. If required.
let gridInput = document.getElementById('block_id')
let colorInput = document.getElementById('colour_id')
let changeBtn = document.getElementById('change_button')
let resetBtn = document.getElementById('reset_button')
let gridItems = document.querySelectorAll('.grid-item')
	
changeBtn.addEventListener('click',() => {

	let gridnum = Number(gridInput.value);
	if(!gridnum) return;
	let color = colorInput.value

	gridItems[gridnum-1].style.backgroundColor = color;
	for(let item of gridItems){
		if(!(item.id == (gridnum))){
		  item.style.backgroundColor = 'transparent';
		}
	}
	gridInput.value = ''
	colorInput.value= ''
})
resetBtn.addEventListener('click', ()=>{
	gridItems.forEach(item => {
		item.style.backgroundColor = 'transparent';
	});
	gridInput.value = ''
	colorInput.value= ''
})
	
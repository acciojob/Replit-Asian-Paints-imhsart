//your JS code here. If required.
let inputId = document.getElementById('block_id')
let colorId = document.getElementById('colour_id')
let gridItems = document.querySelectorAll('.grid-item')
let changeBtn = document.getElementById('change_button')
let resetBtn = document.getElementById('reset_button')

changeBtn.addEventListener('click',() => {
	let gridnum = inputId.value;
	if(!gridnum) return
	let color = colorId.value
	let selected = gridItems[gridnum-1].id
	for(let item of gridItems){
		if(item.id == selected) continue
		item.style.backgroundColor = 'transparent';
	}
	document.getElementById(`${selected}`).style.backgroundColor = color;
})
resetBtn.addEventListener('click', reset)
	function reset(){
	for(let item of gridItems){
		item.style.backgroundColor = 'transparent';
	}
	inputId.value = ''
}

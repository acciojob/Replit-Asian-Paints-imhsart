//your JS code here. If required.
let inputId = document.getElementById('block_id')
let colorId = document.getElementById('colour_id')
let gridItems = document.querySelectorAll('.grid-item')
let changeBtn = document.getElementById('change_button')
let resetBtn = document.getElementById('reset')

changeBtn.addEventListener('click',() => {
	let gridnum = inputId.value;
	if(!gridnum) return
	let color = colorId.value
	reset()
	let selected = gridItems[gridnum-1].id
	document.getElementById(`${selected}`).style.backgroundColor = color;
})
resetBtn.addEventListener('click', reset)
	function reset(){
	for(let item of gridItems){
		item.style.backgroundColor = 'transparent';
	}
	inputId.value = ''
}

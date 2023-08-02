const header = document.querySelector('h1')
const textMode = document.querySelector('.dark-mode')
const textInfo = document.querySelector('.square-info')
const placeItems = document.querySelector('.place-items')

let red = 100
let green = 100
let blue = 100

document.body.addEventListener('keydown', e => {
	if (e.keyCode === 38 && red < 255) {
		red += 5
		green += 5
		blue += 5
		document.body.style.backgroundColor = `rgb(${red++}, ${green++}, ${blue++})`
        header.classList.add('color-one')
        textInfo.classList.add('color-one')
        textMode.classList.add('color-one')
        
		
	} else if (e.keyCode === 40 && red > 0) {
		red -= 5
		green -= 5
		blue -= 5
		document.body.style.backgroundColor = `rgb(${red--}, ${green--}, ${blue--})`
        header.classList.add('color-one')
        textInfo.classList.add('color-one')
        textMode.classList.add('color-one')
       
	}
})

const figures = document.querySelectorAll('.dimension')

let offsetX
let offsetY
let movePossible = false

figures.forEach(figure => {
	figure.addEventListener('mousedown', e => {
		offsetX = e.offsetX
		offsetY = e.offsetY
		movePossible = !movePossible
	})
})

figures.forEach(figure => {
	figure.addEventListener('mousemove', e => {
		if (movePossible === true) {
			let clientX = e.clientX
			let clientY = e.clientY
			let resultX = clientX - offsetX
			let resultY = clientY - offsetY
			figure.style.left = resultX + 'px'
			figure.style.top = resultY + 'px'
		}
	})
})

figures.forEach(figure => {
	figure.addEventListener('mouseup', () => {
        movePossible = !movePossible;
    })
})

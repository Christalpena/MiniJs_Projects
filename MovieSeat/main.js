const section = document.querySelector('.seats')
const options = document.querySelector('#movies')

let price = 0
options.addEventListener('change',function optionChange(event){
    price = Number(event.target.value) 
    seats()
})

function seats(){
    const total = document.querySelector('.total')
    const clickedSeats = document.querySelectorAll('.clicked')
    total.textContent = `You have selected ${clickedSeats.length} seats for $${price * (clickedSeats.length)}`
}

for(let i = 1; i <= 50;i++){
    const div = document.createElement('div')
    div.className = 'free-seat'
    div.setAttribute('id',i)
    
    if (i.toString().endsWith('3') || i.toString().endsWith('7')) {
        div.classList.add('special');
    }

    div.addEventListener('click', (event) => {
        const clickedDiv = document.getElementById(event.target.id)
        clickedDiv.className.includes('clicked') ? div.classList.remove('clicked') : clickedDiv.classList.add('clicked')
        seats()
    })
    
    section.appendChild(div)
}




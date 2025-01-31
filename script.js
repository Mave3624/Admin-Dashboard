const body = document.querySelector("body")
const main = document.querySelector('#main')
const owner = document.querySelector('.Name')
console.log(main)
function width(size) {
    size = body.offsetWidth
    if(size > 500) {
        main.style.backgroundColor = 'green'
        owner.textContent = "Maverick"
        main.style.gridTemplete = "1fr / 4fr"
    }
    else {
        main.style.backgroundColor = 'red'
        owner.textContent = ""}
}

width()
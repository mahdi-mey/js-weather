// info elements
const mainContainer = document.querySelector('.main')
const city = document.querySelector('.city')
const dataElement = document.querySelector('.date')
const temperature = document.querySelector('.temp')
const weather = document.querySelector('.weather')
const degrees = document.querySelector('.hi-low')

const loader = document.querySelector('.bouncer')

// main elements
const searchInput = document.querySelector('.search-box')
const searchButton = document.querySelector('.input-icon')

searchInput.addEventListener('keyup', (e) => {
    if(e.keyCode == 13 ){
        fetchData()
    }
})
function fetchData () {
    console.log('insiide fetch function');
}

// a button for phone devices
searchButton.addEventListener('click', fetchData)
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

const apiData = {
    url: 'https://api.openweathermap.org/data/2.5/weather?q=',
    key: '277e576f9f83913cbee15516ea118d16'
}

searchInput.addEventListener('keyup', (e) => {
    if(e.keyCode == 13 ){
        fetchData()
    }
})
function fetchData () {
    console.log('insiide fetch function');
    loader.style.display = 'flex'

    let countryValue = searchInput.value
    fetch(`${apiData.url}${countryValue}&appid=${apiData.key}`).then(res => res.json()).
    then(data => {
        console.log(data)

        showData(data)

        searchInput.value = ''
    }).
    catch(err => {
        console.log(err)
    }).
    finally(() => {
        loader.style.display = 'none'
    })
}

function showData(data) {
    city.innerHTML = `${data.name}, ${data.sys.country}`
    temperature.innerHTML = `${(data.main.temp - 273.15).toFixed(1)}°c`
    degrees.innerHTML = `${(data.main.temp_min - 273.15).toFixed(1)}°c / ${(data.main.temp_max - 273.15).toFixed(1)}°c`
    weather.innerHTML = `${data.weather[0].main}`
    dataElement.innerHTML = showTime()
}

function showTime(){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let now = new Date

    let day = days[now.getDay()]
    let month = months[now.getMonth()]
    let year = now.getFullYear()
    let date = now.getDate()

    return `${day} ${date} ${month} ${year}`
}

// a button for phone devices
searchButton.addEventListener('click', fetchData)
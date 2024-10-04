
function getWeather()
{
    document.addEventListener('click', (e) => e.preventDefault());
    
    const API_KEY = "30092df6f67fb5ae9056e4405a835838"
    let city = document.getElementById("city").value;
    alert(city)

    const weather_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

    fetch(weather_URL)
    .then (res => {
        if (!res.ok) throw new Error('Not working...');

        return res.json();
    })
    .then (data => {
        console.log(data)
        document.getElementById("conditions").value = data.weather.description;
    })
}
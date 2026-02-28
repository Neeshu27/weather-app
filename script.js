const apiKey = "https://home.openweathermap.org/api_keys";

async function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            alert("City not found!");
            return;
        }

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temperature").innerText =
            `🌡 Temperature: ${data.main.temp} °C`;
        document.getElementById("description").innerText =
            `🌥 Condition: ${data.weather[0].description}`;
        document.getElementById("humidity").innerText =
            `💧 Humidity: ${data.main.humidity}%`;
        document.getElementById("wind").innerText =
            `💨 Wind Speed: ${data.wind.speed} m/s`;

    } catch (error) {
        alert("Error fetching weather data");
        console.log(error);
    }
}
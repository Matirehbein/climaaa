function getWeather(latitude, longitude) {
    // Usar fetch para hacer una solicitud a la API de pronóstico del tiempo
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=YOUR_API_KEY&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log('Weather data:', data); // Mostrar datos recibidos de la API en la consola
            // Procesar la respuesta y mostrar la información del clima en la interfaz
            const weatherInfo = document.getElementById('weather-info');
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            weatherInfo.innerHTML = `
                <p>Current Temperature: ${temperature}°C</p>
                <p>Weather: ${description}</p>
            `;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

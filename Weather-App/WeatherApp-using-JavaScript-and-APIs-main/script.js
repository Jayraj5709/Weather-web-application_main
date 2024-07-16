// script.js
async function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const apiKey = '22ac315fe6f56cab2632243df168f628';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (data.cod === '404') {
        // City not found
        showError('City not found');
      } else {
        displayWeather(data);
      }
    } catch (error) {
      // API call failed
      showError('Failed to fetch weather data');
    }
  }
  
  function displayWeather(data) {
    const weatherDataElement = document.getElementById('weatherData');
    const { name, main, weather } = data;
  
    const weatherHtml = `
      <h2>${name}</h2>
      <p>Temperature: ${main.temp}°C</p>
      <p>Weather: ${weather[0].description}</p>
      <p>Humidity: ${main.humidity}%</p>
    `;
  
    weatherDataElement.innerHTML = weatherHtml;
  }
  
  function showError(message) {
    const weatherDataElement = document.getElementById('weatherData');
    weatherDataElement.innerHTML = `<p class="error">${message}</p>`;
  }
  

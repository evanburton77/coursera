function showweatherDetails(event) {
      event.preventDefault();

  const city = document.getElementById('city').value;
      const apiKey = '51f8cad3f26b3e3733cee3b0e1f6ae5b'; // Replace 'YOUR_API_KEY' with your actual API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

 fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        })  

} 

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);

function showweather(event) {
      event.preventDefault();

  const lat = document.getElementById('lat').value;
  const long = document.getElementById('long').value;
      const apiKey = '51f8cad3f26b3e3733cee3b0e1f6ae5b'; // Replace 'YOUR_API_KEY' with your actual API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;

 fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        })  

} 

document.getElementById('latForm').addEventListener('submit', showweather);


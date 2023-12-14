// script.js
function getWeather() {
    var locationInput = document.getElementById("locationInput").value;
    var weatherResult = document.getElementById("weatherResult");

    // Simulated API call (replace with actual API call)
    var fakeApiResponse = {
        temperature: 25,
        condition: "Sunny",
        location: locationInput
    };

    // Display weather information
    weatherResult.innerHTML = `<p>Location: ${fakeApiResponse.location}</p>
                               <p>Temperature: ${fakeApiResponse.temperature} °C</p>
                               <p>Condition: ${fakeApiResponse.condition}</p>`;
}


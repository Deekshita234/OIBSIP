function convertTemp() {
  const temp = parseFloat(document.getElementById('tempInput').value);
  const unit = document.querySelector('input[name="unit"]:checked').value;
  const resultDiv = document.getElementById('result');

  if (isNaN(temp)) {
    resultDiv.innerHTML = "❌ Please enter a valid temperature!";
    return;
  }

  let celsius, fahrenheit, kelvin;

  if (unit === 'C') {
    celsius = temp;
    fahrenheit = (temp * 9 / 5) + 32;
    kelvin = temp + 273.15;
  } else if (unit === 'F') {
    fahrenheit = temp;
    celsius = (temp - 32) * 5 / 9;
    kelvin = celsius + 273.15;
  } else {
    kelvin = temp;
    celsius = temp - 273.15;
    fahrenheit = (celsius * 9 / 5) + 32;
  }

  resultDiv.innerHTML = `
    <div class="fade-in">
      🌡 Celsius: ${celsius.toFixed(2)} °C <br>
      🌡 Fahrenheit: ${fahrenheit.toFixed(2)} °F <br>
      🌡 Kelvin: ${kelvin.toFixed(2)} K
    </div>
  `;
}

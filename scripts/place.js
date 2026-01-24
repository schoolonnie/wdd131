const calculateWindChill = (temp, windSpeed) => 
{
    if (temp <= 10 && windSpeed > 4.8) {
        const windChill = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temp * Math.pow(windSpeed, 0.16));
        return windChill.toFixed(2);
    } else {
        return "N/A";
    }
}
document.getElementById('windchill').textContent = `${calculateWindChill(10, 7.2)}°C`;
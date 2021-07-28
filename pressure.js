function cPressure(altitude, absolutePressure) {
    return absolutePressure * Math.exp(-0.000125 * altitude)
}

document.getElementById('altitude').addEventListener('change', function() {
    if (document.getElementById('abs').value != null) {
        altitude = document.getElementById('altitude').value
        absolutePressure = document.getElementById('abs').value
        pressure = Math.round(cPressure(altitude, absolutePressure))
        document.getElementById('atm').value = pressure + ' hPa'
    }
})

document.getElementById('abs').addEventListener('change', function() {
    altitude = document.getElementById('altitude').value
    absolutePressure = document.getElementById('abs').value
    pressure = Math.round(cPressure(altitude, absolutePressure))
    document.getElementById('atm').value = pressure + ' hPa'
})
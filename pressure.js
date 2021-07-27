function cPressure(altitude, absolutePressure) {
    return absolutePressure * Math.exp(-0.000125 * altitude)
}

function main() {
    altitude = document.getElementById('altitude').value
    absolutePressure = document.getElementById('abs').value
    pressure = Math.round(cPressure(altitude, absolutePressure))
    document.getElementById('result').textContent = 'Ciśnienie na wysokości ' + altitude + ' m n.p.m: ' + pressure + ' hPa'
}
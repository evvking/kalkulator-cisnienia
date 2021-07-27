function cAltitude(pressure, absolutePressure) {
    return 0.000125 * Math.log(pressure / absolutePressure)
}

function main() {
    pressure = document.getElementById('atm').value
    absolutePressure = document.getElementById('abs').value
    altitude = cAltitude(pressure, absolutePressure)
    document.getElementById('result').textContent = 'Wysokość: ' + altitude + ' m n.p.m'
}
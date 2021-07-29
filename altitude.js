function cAltitude(pressure, absolutePressure) {
    const StalaGazowa = 8.3145 // J/mol*K
    const MasaMolowa = 0.0289644 // kg / mol
    const PrzyspieszenieZiemskie = 9.80665 // m / s2
    const Temperatura = 20
    return -((StalaGazowa * Temperatura) / (PrzyspieszenieZiemskie * MasaMolowa)) * Math.log(pressure / absolutePressure)
}

function main() {
    pressure = document.getElementById('atm').value
    absolutePressure = document.getElementById('abs').value
    altitude = cAltitude(pressure, absolutePressure)
    document.getElementById('result').textContent = 'Wysokość: ' + altitude + ' m n.p.m'
}
function calcularMultiplo() {
    let dividendo
    let divisor

    dividendo = document.getElementById('dividendo').value;
    divisor = document.getElementById('divisor').value;
	
    const MAX_DIVISOR = 7
    const MIN_DIVISOR = 2

    const correctDivisor = divisor >= MIN_DIVISOR && divisor <= MAX_DIVISOR

    if (correctDivisor){
        divisor = document.getElementById('divisor').value;
    } else {
        alert(`Numero incorrecto - Ingrese un numero entre ${MIN_DIVISOR} y ${MAX_DIVISOR}`)
        return
    }

    if(isMultiple(dividendo, divisor)) {
        result = 'Son Multiplos'
    } else {
        result = 'No son Multiplos'
    }



    console.log(dividendo, divisor, result)
    document.getElementById('resultado').innerHTML = `El dividendo y divisor ${result}`

}

function isMultiple(dividendo, divisor){
   return dividendo % divisor === 0
}
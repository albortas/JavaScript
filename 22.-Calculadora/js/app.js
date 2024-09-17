console.log('Calculadora')

function sumar(){
    const forma = document.getElementById('forma');
    let a = forma['operandoA'];
    let b = forma['operandoB'];
    let resul = parseInt(a.value) + parseInt(b.value);
    if(isNaN(resul)){
        resul = 'La operacion no incluye números'
    }
    document.getElementById('resultado').innerHTML = `Resultado: ${resul}`;
    console.log(`Resultado: ${resul}`)
}
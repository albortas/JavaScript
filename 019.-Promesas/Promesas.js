let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if (expresion)
        resolver('Resolcio correcto')
    else
        rechazar('Se produjo un error')
});

//miPromesa.then(valor => console.log(valor), error => console.log(error));

//miPromesa.then(valor => console.log(valor)).catch(error => console.log(error));

let promesa = new Promise((resolver) => {
    //console.log('inicio promesa');
    setTimeout( () => resolver ('Saludos con promesa y timeout'),3000);
    //console.log('fin promesa');
});

//promesa.then( valor => console.log(valor));

async function miFuncionConPromesa() {
    return 'saludors con promesa y async'    
}

//miFuncionConPromesa().then(valor => console.log(valor));

//async /await

async function miFuncionConPromesaYAwait() {
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await');
    });
    console.log(await miPromesa);
}

miFuncionConPromesaYAwait();

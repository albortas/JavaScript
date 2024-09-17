//promesas, await, async y setTimeout
async function funcionPromesa() {
    console.log('Inicio Promesa')
    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver('Promesa con await'), 3000);
    });
    console.log(await miPromesa);
    console.log('fin promesa')
}

funcionPromesa();
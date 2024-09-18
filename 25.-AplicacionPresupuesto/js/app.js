const ingresos = [
    new Ingreso('Salario', 2100.00),
    new Ingreso('Venta conche', 1500)    
];

const egresos = [
    new Egreso('Renta departamento', 900),
    new Egreso('Ropa', 400)
];

let cargarApp = () =>{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

let totalIngresos = () =>{
    let totalIngresos = 0;
    for(let ingreso of ingresos){
        totalIngresos += ingreso.getValor;
    }
    return totalIngresos;
}

let totalEgresos = () =>{
    let totalEgresos = 0;
    for(let egreso of egresos){
        totalEgresos += egreso.getValor;
    }
    return totalEgresos;
}

let cargarCabecero = () =>{
    let presupuestoTotal = totalIngresos() - totalEgresos();
    let procentajeEgreso = totalEgresos()/totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuestoTotal);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(procentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

const formatoMoneda = (valor) =>{
    return valor.toLocaleString('en-US',{style:'currency',currency:'USD',minimumFractionDigits:2});
}

const formatoPorcentaje = (porcentaje) =>{
    return porcentaje.toLocaleString('en-US',{style:'percent',minimumFractionDigits:2})
}

const cargarIngresos = () => {
    let ingresosHTML = '';
    for(let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}
const crearIngresoHTML = (ingreso) =>{
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${ingreso.getDescripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">+ ${formatoMoneda(ingreso.getValor)}</div>
                    <div class="elemento_eliminar">
                        <button class="elemento_eliminar--btn">
                        <ion-icon name="close-circle-outline"
                        onclick="eliminarIngreso(${ingreso.getId})"></ion-icon>
                        </button>
                    </div>
            </div>
    </div>
    `;
    return ingresoHTML;
}
const eliminarIngreso = (id) =>{
    let indice = ingresos.findIndex(ingreso => ingreso.getId === id);
    ingresos.splice(indice,1);
    cargarCabecero();
    cargarIngresos();
}

const cargarEgresos = () =>{
    let egresosHTML = '';
    for(let egreso of egresos){
        egresosHTML += crearEgresoHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}

const crearEgresoHTML = (egreso) =>{
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${egreso.getDescripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">- ${egreso.getValor}</div>
                <div class="elemento_porcentaje">${formatoPorcentaje(egreso.getValor/totalEgresos())}</div>
                <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name="close-circle-outline"
                    onclick="eliminarEgreso(${egreso.getId})"></ion-icon>
                </button>
                </div>
            </div>
    </div>
    `;
    return egresoHTML;
}

const eliminarEgreso = (id) =>{
    let indice = egresos.findIndex(egreso => egreso.getId === id);
    egresos.splice(indice,1);
    cargarCabecero();
    cargarEgresos();
}

let agregarDato = () =>{
    let forma = document.forms['forma'];
    let tipo = forma['tipo'];
    let descripcion = forma['descripcion'];
    let valor = forma['valor'];
    if(descripcion.value !== '' && valor.value !== ''){
        if(tipo.value === 'ingreso'){
            ingresos.push(new Ingreso(descripcion.value,+valor.value));
            cargarCabecero();
            cargarIngresos();
        }else if(tipo.value === 'egreso'){
            egresos.push(new Egreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarEgresos();
        }
    }
}
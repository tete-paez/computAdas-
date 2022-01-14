const ventas = [
    [1,
        new Date(2019, 1, 4),
        "Grace",
        "Centro",
        ["Monitor GPRS 3000", "Motherboard ASUS 1500"]
    ],
    [
        2,
        new Date(2019, 0, 1),
        "Ada",
        "Centro",
        ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
    ],
    [
        3,
        new Date(2019, 0, 2),
        "Grace",
        "Caballito",
        ["Monitor ASC 543", "Motherboard MZI"],
    ],
    [
        4,
        new Date(2019, 0, 10),
        "Ada",
        "Centro",
        ["Monitor ASC 543", "Motherboard ASUS 1200"],
    ],
    [
        5,
        new Date(2019, 0, 12),
        "Grace",
        "Caballito",
        ["Monitor GPRS 3000", "Motherboard ASUS 1200"],
    ],
]

const componentes = [
    ["Monitor GPRS 3000", 200],
    ["Motherboard ASUS 1500", 120],
    ["Monitor ASC 543", 250],
    ["Motherboard ASUS 1200", 100],
    ["Motherboard MZI", 30],
    ["HDD Toyiva", 90],
    ["HDD Wezter Dishital", 75],
    ["RAM Quinston", 110],
    ["RAM Quinston Fury", 230],
];


// BOTON NUEVA VENTA + MODAL NUEVA VENTA + BOTON CERRAR MODAL NUEVA VENTA

const btnNuevaVenta = document.getElementById('nuevaVenta'); //boton nueva venta
const tablaHtml = document.getElementById('tabla');// la tabla
const modalVenta = document.getElementById('agregarVenta');//el modal
const formulario = document.getElementById('nuevaVenta');//el formulario

//const cerrarModalVenta = document.getElementById('cerrarModalVenta');
//const btnConfirmarVenta = document.getElementById(confirmarVenta); 


//PARA QUE LA FECHA ME QUEDE BIEN USAR ESTA FUNCION:
const format = (date, locale, options) => new Intl.DateTimeFormat(locale, options).format(date);

// FUNCION PARA COMPLETAR EL TD DE PECIO COMPONENTES
const precioComponente = () => {
    for (let i = 0; i < componentes.length; i++) {
        //console.log(componentes[i])
        for (let j = 0; j < componentes[i].length; j++) {
            console.log(componentes[i][1])
            
        }
    }
}
precioComponente();

// FUNCION PARA COMPLETAR LA TABLA DE VENTAS CON EL ARRAY PREDETERMINADO

const llenarTabla = () => {
    for (let i = 0; i < ventas.length; i++) {
        const crearFila = document.createElement('tr');
        tablaHtml.appendChild(crearFila);
        for (let j = 0; j < ventas[i].length; j++) {
            crearFila.innerHTML = 
                `<td>${format(ventas[i][1], 'es')}</td>
                <td>${ventas[i][2]}</td>
                <td>${ventas[i][3]}</td>
                <td>${ventas[i][4]}</td>
                <td>${componentes[i][1]}</td>
                <td class= "td-botones">
                <button type="button" class="btn" id="btn-editar"><i class="fas fa-edit iconEditar"></i></button>
                <button type="button" class="btn" id="btn-eliminar"><i class="fas fa-trash iconEliminar"></i></button> 
                </td>`
        }
    }
}
llenarTabla();

// FUNCION PARA QUE APAREZCA EL MODAL DE LA NUEVA VENTA

btnNuevaVenta.addEventListener('click', () => {
    modalVenta.classList.add('mostrar');
    formulario.addEventListener('submit',abrirModalCargarNuevaVenta)
})

//clase viernes 7 de diciembre 
// AYUDA1 : https://codepen.io/JoseLuis/pen/abLjXMR
// AYUDA2 : PARA COMPARAR FECHAS https://www.it-swarm-es.com/es/javascript/compara-dos-fechas-con-javascript/958176042/


// const abrirModalCargarNuevaVenta=(e)=>{
//     e.preventDefault()

//     const tr = document.createElement('tr')
//     //aqui va el resto del codigo
    
//     //que va ir???? los datos que cargaron en el formulario
//     const vendedora = document.getElementById('selectVendedora').value;
//     const componente = document.getElementById('componentes').value;
//     const sucursal = document.getElementById('sucursal').value;
//     const fecha = document.getElementById('fecha').value;

//     //Aca agrego el innertext en el html
//     tr.innerHTML=`<td>${vendedora}</td><td>${componente}</td><td>${sucursal}</td><td>${fecha}</td>`

    // NO ME ANDA// NO ME ANDA// NO ME ANDA// NO ME ANDA// NO ME ANDA
    // NO ME ANDA// NO ME ANDA// NO ME ANDA// NO ME ANDA
    // NO ME ANDA// NO ME ANDA// NO ME ANDA
    // NO ME ANDA// NO ME ANDA
    // NO ME ANDA// NO ME ANDA// NO ME ANDA// NO ME ANDA// NO ME ANDA
    // NO ME ANDA// NO ME ANDA// NO ME ANDA// NO ME ANDA
    // NO ME ANDA// NO ME ANDA// NO ME ANDA
    // NO ME ANDA// NO ME ANDA
    
    
//     tablaHtml.appendChild(tr)
//   }
  







//   window.addEventListener('click', e => {
//       if(e.target === modalVenta){
//           modalVenta.style.display = 'none';
//       }
//   })


















// FUNCION PARA QUE DES-APAREZCA EL MODAL DE LA NUEVA VENTA
cerrarModalVenta.addEventListener('click', () => {
    modalVenta.classList.remove('mostrar')
})

// BOTON EDITAR VENTA + MODAL EDITAR VENTA + BOTON CERRAR MODAL EDITAR VENTA
const modalEditarVenta = document.getElementById('editarVenta');
const btnEditarVenta = document.getElementById('btn-editar');
const cerrarModalEditarVenta = document.getElementById('cerrarModalEditarVenta')

// FUNCION PARA QUE APAREZCA EL MODAL DE EDITAR VENTA
btnEditarVenta.addEventListener('click', () => {
    modalEditarVenta.classList.add('mostrar')
})

// FUNCION PARA QUE DES-APAREZCA EL MODAL DE EDITAR VENTA
cerrarModalVenta.addEventListener('click', () => {
    modalEditarVenta.classList.remove('mostrar')
})

// BOTON ELIMINAR VENTA + MODAL ELIMINAR VENTA + BOTON CANCELAR Y CERRAR MODAL ELIMINAR VENTA + BOTON ACEPTAR Y CERRAR MODAL ELIMINAR VENTA
const btnEliminarVentas = document.getElementById('btn-eliminar');
const modalEliminarVenta = document.getElementById('eliminarVenta');
const btnCancelarEliminarVenta = document.getElementById('cerrarModalEliminarVenta');
const btnAceptarEliminarVenta = document.getElementById('aceptarEliminarVenta');

// FUNCION PARA QUE APAREZCA EL MODAL DE ELIMINAR VENTA
btnEliminarVentas.addEventListener('click', () => {
    modalEliminarVenta.classList.add('mostrar');
})
// FUNCION PARA QUE DES-APAREZCA EL MODAL DE ELIMINAR VENTA con CANCELAR
btnCancelarEliminarVenta.addEventListener('click', () => {
    modalEliminarVenta.classList.remove('mostrar');
})

// FUNCION PARA QUE DES-APAREZCA EL MODAL DE ELIMINAR VENTA con ACEPTAR
btnAceptarEliminarVenta.addEventListener('click', () => {
    modalEliminarVenta.classList.remove('mostrar');
})

// FUNCION SI ESTA EL MODAL ABIERTO Y HAGO CLICK FUERA DEL MODAL, SE CIERRA AUTOMATIAMENTE
//----->  MODAL NUEVA VENTA
window.addEventListener('click', (e) => {
    if (e.target == modalVenta) {
        modalVenta.classList.remove('mostrar');
    }
})
//-----> MODAL EDITAR VENTA 
window.addEventListener('click', (e) => {
    if (e.target == modalEditarVenta) {
        modalEditarVenta.classList.remove('mostrar');
    }
})
//-----> MODAL EDITAR VENTA 
window.addEventListener('click', (e) => {
    if (e.target == modalEliminarVenta) {
        modalEliminarVenta.classList.remove('mostrar');
    }
})

// // FUNCIONES PARA EL MODAL NUEVA VENTA 
// // FUNCIONES PARA EL MODAL NUEVA VENTA 
// // FUNCIONES PARA EL MODAL NUEVA VENTA 
// // FUNCIONES PARA EL MODAL NUEVA VENTA 

// //-----> FUNCION PARA TRAERME LAS VENDEDORAS

const cargarVendedoras = () => {
    const vendedoras = ["Ada", "Grace", "Hedy", "Sheryl"];
    const select = document.getElementById("vendedoras"); //Seleccionamos el select
    //recorro el array de vendedoras y creo los elementos donde van a ir
    for (let i = 0; i < vendedoras.length; i++) {
        let option = document.createElement("option"); //Creamos la opcion
        option.innerHTML = vendedoras[i]; //Metemos el texto en la opción
        select.appendChild(option); //Metemos la opción en el select
        
    }
}
cargarVendedoras();



function seleccionarVendedora() {
    let selectVendedora = document.getElementById('vendedoras')
    let vendedoraSeleccionada = selectVendedora.value;
    console.log(vendedoraSeleccionada);
}


// //-----> FUNCION PARA TRAERME LOS COMPONENTES

const cargarComponentes = () => {
    for (let i = 0; i < componentes.length; i++) {
            const selectComponente = document.getElementById("componentes"); //Seleccionamos el select
            let optionComponente = document.createElement("option"); //Creamos la opcion
            optionComponente.innerHTML = componentes[i][0]; //Metemos el texto en la opción
            selectComponente.appendChild(optionComponente); //Metemos la opción en el select
            //console.log(componentes[i][0]);
            // ACA HAY ARROR ME EJECUTA LA FUNCION CADA VEZ Q ENTRO
            // ACA HAY ARROR ME EJECUTA LA FUNCION CADA VEZ Q ENTRO
            // ACA HAY ARROR ME EJECUTA LA FUNCION CADA VEZ Q ENTRO
    }
    return true 
}
cargarComponentes();


const seleccionarComponente = () => {
    let selectComponente = document.getElementById('componentes')
    let componenteSeleccionado = selectComponente.value;
    // console.log(componenteSeleccionado);
}
seleccionarComponente()


// //-----> FUNCION PARA TRAERME LA SUCURSAL



const cargarSucursales = () => {
    const sucursales = ["Caballito", "Centro"];
    const select = document.getElementById("sucursal"); //Seleccionamos el select
    //recorro el array de vendedoras y creo los elementos donde van a ir
    for (let i = 0; i < sucursales.length; i++) {
        let option = document.createElement("option"); //Creamos la opcion
        option.innerHTML = sucursales[i]; //Metemos el texto en la opción
        select.appendChild(option); //Metemos la opción en el select
    }
}
cargarSucursales();




function seleccionarSucursal() {
    let selectSucursal = document.getElementById('sucursal')
    let sucursalSeleccionada = selectSucursal.value;
    console.log(sucursalSeleccionada);

}

//-----> FUNCION PARA TRAERME LA FECHA DE LA VENTA
function sleccionarFecha () {
    let selectFecha = document.getElementById('fecha');
    let fechaSeleccionada = selectFecha.value;
    console.log(fechaSeleccionada);
}

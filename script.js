// CONSTANTES PRE-DECLARADAS PARA EL TP
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

const precios = [
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
const tablaHtml = document.getElementById('tabla'); // la tabla
const modalVenta = document.getElementById('agregarVenta'); //el modal
const formulario = document.getElementById('nuevaVenta'); //el formulario

//const cerrarModalVenta = document.getElementById('cerrarModalVenta');
//const btnConfirmarVenta = document.getElementById(confirmarVenta); 


//PARA QUE LA FECHA ME QUEDE BIEN USAR ESTA FUNCION:
const format = (date, locale, options) => new Intl.DateTimeFormat(locale, options).format(date);

// FUNCION PARA COMPLETAR EL CAMPO PRECIOS

// FUNCION PARA SABER LA CANTIDAD DE VENTAS de cada componente determinado(paasandolo x parametro)

const cantidadVentasComponente = (componente) => {
    let cantidadVentas = 0;
    for (let i = 0; i < ventas.length; i++) {
        //console.log(ventas)
        for (let j = 0; j < ventas[i][4].length; j++) {
            //console.log(ventas[i][4])
            // aca recorro ventas sub 4, que serian las ventas propiamente 
            if (componente === ventas[i][4][j]) {
                // aca entras a ventas con el [i]
                // despues entras a la posiccion 4 con el [4] trayendote las ventas
                // y con el [j] recorres esas ventas
                cantidadVentas++
            }
        }
    }
    return cantidadVentas
}
//cantidadVentasComponente(ventas);
//console.log(cantidadVentasComponente('Monitor GPRS 3000')); // 2


const precioMaquina = (array) => {
    let suma = 0
    for (let precio of precios) {
        //console.log(precio) 
        // aca me muestra cada elemento del array cada precio of precios
        array.forEach(element => {
            //console.log(element)
            if (precio.includes(element)) {
                suma += precio[1]

            }
        });
    }
    return suma
}
//precioMaquina(); 
//console.log(precioMaquina(['Monitor GPRS 3000', 'Motherboard ASUS 1500'])); // 320 ($200 del monitor + $120 del motherboard)




//FUNCION ventasVendedora
// le paso como parametro lo que necesito
const ventasVendedora = (vendedora) => {
    //inicio el contador:
    let ventasVendedora = 0
    //con un for recorro las ventas
    for (venta of ventas) {
        // si ventas sub 2 que seria la vendedora
        // includes a la vendedodra que le paso x párametro
        if (venta[2].includes(vendedora)) {
            // si esto da true, sumame uno en el cnotador:
            // este contador reutiliza la funcion precio maquina: que contabiliza las ventas sub 4 y su precio
            ventasVendedora += precioMaquina(venta[4])
        }
    }
    return ventasVendedora
}
ventasVendedora();
//console.log(ventasVendedora("Ada"));
//console.log(ventasVendedora("Grace"));






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
                <td>${(precioMaquina.cantidadVentas)}</td>
                <td class= "td-botones">
                <button type="button" class="btn" id="btn-editar"><i class="fas fa-edit iconEditar"></i></button>
                <button type="button" class="btn" id="btn-eliminar"><i class="fas fa-trash iconEliminar"></i></button> 
                </td>`
        }
    }
}
llenarTabla();






//********************modales****************** */




// FUNCION PARA QUE APAREZCA EL MODAL DE LA NUEVA VENTA

btnNuevaVenta.addEventListener('click', () => {
    modalVenta.classList.add('mostrar');
    formulario.addEventListener('submit', abrirModalCargarNuevaVenta)
})

//clase viernes 7 de diciembre 
// AYUDA1 : https://codepen.io/JoseLuis/pen/abLjXMR
// AYUDA2 : PARA COMPARAR FECHAS https://www.it-swarm-es.com/es/javascript/compara-dos-fechas-con-javascript/958176042/



  window.addEventListener('click', e => {
      if(e.target === modalVenta){
          modalVenta.style.display = 'none';
      }
  })


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
    for (let i = 0; i < precios.length; i++) {
        const selectComponente = document.getElementById("componentes"); //Seleccionamos el select
        let optionComponente = document.createElement("option"); //Creamos la opcion
        optionComponente.innerHTML = precios[i][0]; //Metemos el texto en la opción
        selectComponente.appendChild(optionComponente); //Metemos la opción en el select
        //console.log(precios[i][0]);
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
function sleccionarFecha() {
    let selectFecha = document.getElementById('fecha');
    let fechaSeleccionada = selectFecha.value;
    console.log(fechaSeleccionada);
}





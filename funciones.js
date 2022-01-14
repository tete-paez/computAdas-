// const vendedoras = ["Ada", "Grace", "Hedy", "Sheryl"];

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
]

// console.log(precioMaquina(['Monitor GPRS 3000', 'Motherboard ASUS 1500'])); // 320 ($200 del monitor + $120 del motherboard)
// console.log(cantidadVentasComponente('Monitor ASC 543')); // 2
// console.log(vendedoraDelMes(1, 2019)); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)
// console.log(ventasMes(1, 2019)); // 1250
// console.log(ventasVendedora('Grace')); // 900
// console.log(componenteMasVendido()); // Monitor GPRS 3000
// console.log(huboVentas(3, 2019)); // false
// console.log(ventasSucursal('Centro')); // 990
// console.log(sucursalDelMes(1, 2019)); // "Centro"
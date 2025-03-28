export const BD_FACTURAS = [
    {
      id: 1,
      fecha: new Date('2024-03-01'),
      cliente: "Juan Pérez",
      total: 150.75,
      detalles: [
        { id: 1, facturaId: 1, producto: "Paracetamol 500mg", cantidad: 2, precioUnitario: 2.50, subtotal: 5.00 },
        { id: 2, facturaId: 1, producto: "Alcohol en Gel 250ml", cantidad: 1, precioUnitario: 9.50, subtotal: 9.50 }
      ]
    },
    {
      id: 2,
      fecha: new Date('2024-03-05'),
      cliente: "María González",
      total: 84.30,
      detalles: [
        { id: 3, facturaId: 2, producto: "Shampoo Anticaspa 400ml", cantidad: 2, precioUnitario: 24.90, subtotal: 49.80 },
        { id: 4, facturaId: 2, producto: "Mascarilla KN95 x5", cantidad: 1, precioUnitario: 16.00, subtotal: 16.00 }
      ]
    }
];
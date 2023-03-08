const product = { count: 1, price: 12.55, type: "ropa"};


function getTotal (product) {
    let precioSinIva; 
    if(product.count < 0) {
        precioSinIva = 0;
    } else {
        precioSinIva = product.count * product.price;
    }
    return precioSinIva;
}

function getVat (product) { 
    let iva;
    switch (product.type) {
    case "alimentacion":
        iva = 0.10;        
        break;
     case "libro":
        iva = 0.04;        
         break;
     default: iva = 0.21;
    }
    return iva * product.price;
}

function getTotalVat(product) {
console.log(getVat(product))
    return product.count > 0 ? product.count * getVat(product) : 0;
  
}

function printProductPrice(product) {
    const subtotal = getTotal(product);
    const vat = getTotalVat(product);
    const total = subtotal + vat;
  
    console.log("Subtotal:", subtotal + "€");
    console.log("IVA:", vat + "€");
    console.log("Total:", total + "€");
}

printProductPrice(product);
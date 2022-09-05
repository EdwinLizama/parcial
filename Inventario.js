const Indumentaria = (name, id, precio, stock) =>{
    this.name = name;
    this.id = id;
    this.precio = precio;
    this.stock = stock;
    return{ name, id, precio, stock };
};
const Camisa = (name, id, precio, stock) =>{
    const prototype = Indumentaria(name, id, precio, stock);
    return Object.assign({},prototype);
}
const Pantalon = (name, id, precio, stock) =>{
    const prototype = Indumentaria(name, id, precio, stock);
    return Object.assign({},prototype);
}
const Zapato = (name, id, precio, stock) =>{
    const prototype = Indumentaria(name, id, precio, stock);
    return Object.assign({},prototype);
}

let camisa1 = Camisa("camisa", 1, 10, 2);
let pantalon1 = Pantalon("pantalon", 2, 20, 2);
let zapato1 = Zapato("zapato", 3, 15, 2);



const tienda = (() =>{ 
    let inventario = [ 
        camisa1, pantalon1, zapato1
    ]

    let carritoCompras = []

    const agregarProducto = (producto) =>{
        
        let bool = actualizarInventario(producto)
        if(bool){
            carritoCompras.push(producto)
            alert("Producto agregado")
        }else{
            alert("No hay stock suficiente")
        }
        
    }
    
    const realizarPago = (carrito) =>{
        let sum = 0
        carrito.forEach(compra =>{
            sum += compra.precio
            
        })
        return sum;
    }

    const actualizarInventario = (producto) =>{
        if(producto.stock > 0){
        producto.stock--;
        return true;
        }
        else{
            return false
        }
    }

    return {inventario, carritoCompras, agregarProducto, realizarPago}
})();

let div1 = document.getElementById("carrito")
let div2 = document.getElementById("stock")
//caja camisa
let cajaCamisa = document.createElement("div")
cajaCamisa.setAttribute("class", "camisa")
cajaCamisa.innerText = "Camisa"
//caja pantalon
let cajaPantalon = document.createElement("div")
cajaPantalon.setAttribute("class", "pantalon")
cajaPantalon.innerText = "Pantalon"
//caja zapato
let cajaZapato = document.createElement("div")
cajaZapato.setAttribute("class", "zapato")
cajaZapato.innerText = "Zapato"

//botones
let botonAgregarCamisa = document.getElementById("btn1")
let botonAgregarPantalon = document.getElementById("btn2")
let botonAgregarZapato = document.getElementById("btn3")
let botonRealizarPago = document.getElementById("btn4")

function mostrar(){
    console.log(tienda.inventario)
    let arr = tienda.inventario
    arr.forEach(producto =>{
        
        for (let index = 0; index < producto.stock; index++) {
            if(producto.id == 1){
                let cajaCamisa = document.createElement("div")  //crea la caja
                cajaCamisa.setAttribute("id", `camisa${index}`)
                cajaCamisa.setAttribute("class", "camisa")  //le da la clase
                cajaCamisa.innerText = "Camisa" //le da el texto   //agrega la caja camisa
                console.log("hi")
                div1.appendChild(cajaCamisa)
            }
            if(producto.id == 2){
                let cajaPantalon = document.createElement("div")    
                cajaPantalon.setAttribute("id", `pantalon${index}`)
                cajaPantalon.setAttribute("class", "pantalon")
                cajaPantalon.innerText = "Pantalon"
                div1.appendChild(cajaPantalon)
            }
            if(producto.id == 3){
                let cajaZapato = document.createElement("div")
                cajaZapato.setAttribute("id", `zapato${index}`)
                cajaZapato.setAttribute("class", "zapato")
                cajaZapato.innerText = "Zapato"
                div1.appendChild(cajaZapato)
            }
        }
    })
    let arr2 = tienda.carritoCompras
    
    arr2.forEach(producto =>{
        for (let index = 0; index < producto.stock; index++) {
        if(producto.id == 1){
            let cajaCamisa = document.createElement("div")  //crea la caja
            cajaCamisa.setAttribute("id", `camisa${index}`)
            cajaCamisa.setAttribute("class", "camisa")  //le da la clase
            cajaCamisa.innerText = "Camisa" //le da el texto   //agrega la caja camisa
            div2.appendChild(cajaCamisa)
            }
            if(producto.id == 2){
                let cajaPantalon = document.createElement("div")    
                cajaPantalon.setAttribute("id", `pantalon${index}`)
                cajaPantalon.setAttribute("class", "pantalon")
                cajaPantalon.innerText = "Pantalon"
            div2.appendChild(cajaPantalon)
            }
            if(producto.id == 3){
                let cajaZapato = document.createElement("div")
                cajaZapato.setAttribute("id", `zapato${index}`)
                cajaZapato.setAttribute("class", "zapato")
                cajaZapato.innerText = "Zapato"
            div2.appendChild(cajaZapato)
            }
        }
    })
}
mostrar()



botonAgregarCamisa.addEventListener("click", () =>{
    let objeto = tienda.inventario[0]
    tienda.agregarProducto(objeto)
    div1.innerHTML=''
    
    mostrar()
})
botonAgregarPantalon.addEventListener("click", () =>{
    let objeto = tienda.inventario[1]
    tienda.agregarProducto(objeto)
    div1.innerHTML=''
    
    mostrar()
})
botonAgregarZapato.addEventListener("click", () =>{     
    let objeto = tienda.inventario[2]
    tienda.agregarProducto(objeto)
    div1.innerHTML=''
    
    mostrar()
})
botonRealizarPago.addEventListener("click", () =>{
    let pago = tienda.realizarPago(tienda.carritoCompras)
    alert("El pago es de: " + pago)
    div2.innerHTML=''

})
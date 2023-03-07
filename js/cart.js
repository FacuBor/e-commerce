//cart
let cartIcon = document.querySelector('#cart-icon'); 
let cart = document.querySelector('#cart');          
let cartClosed = document.querySelector ('#closed-cart') ;
let cantidadCarrito = document.getElementById('spanCantidad');
let cartContent = document.getElementById('cartContent');
let addToCart = document.getElementsByClassName('add-to-cart')
//evento open cart
cartIcon.onclick = () => {
    cart.classList.add('active')
}
//evento close cart
cartClosed.onclick = () => {
    cart.classList.remove('active')
    carritoArray.length === 0 && console.log("Empty cart")
}
//when opening cart
const abrirCarrito = () => {
    cartContent.innerHTML= '';
    //forEach carrito
    carritoArray.forEach((producto) => {
        cartItem = document.createElement('div')
        cartItem.className = 'cartItem-deleteItem d-flex flex-row align-items-center justify-content-between'
        cartItem.innerHTML =
                    `<div class="cart-box justify-content-center">
                        <div class="d-flex flex-row justify-content-center align-items-center">
                            <img src="${producto.imagen}"  class="cart-imgg ">
                        </div>
                        <div class="detail-box">
                            <div>
                                <div class="cart-producto-title text-start">${producto.nombre}</div>
                                <div class="cart-producto-price text-start">$${producto.precio}</div>
                                <div class="resta-suma d-flex flex-row align-items-center justify-content-start">
                                    <p class="text-start m-0">Cantidad:</p>
                                    <div class="resta-suma-cartItem ms-4 d-flex flex-row align-items-center justify-content-evenly">
                                        <span class="restaSpan fs-5"> - </span>
                                        ${producto.cantidad}
                                        <span class="sumaSpan fs-5"> + </span>
                                    </div>
                                </div>
                                <p class="text-start text-success m-0">Total: ${producto.cantidad * producto.precio}</p>
                            </div>
                            <i class="bx bx-x btnDeleteItem"></i>
                        </div>
                    </div>`;
        cartContent.append(cartItem);
        console.log("Productos en carrito",carritoArray.length);
        //restar span
        let restar = cartItem.querySelector('.restaSpan');
        restar.addEventListener("click", ()=>{
            if(producto.cantidad !== 1){
                producto.cantidad --;
            }
            abrirCarrito()
            saveLocalS()
        });
        //sumar span
        let sumar = cartItem.querySelector('.sumaSpan')
        sumar.addEventListener('click', ()=>{
            producto.cantidad ++;
            abrirCarrito()
            saveLocalS()
        })
        //delete item cart
        let deleteItem = cartItem.querySelector('.btnDeleteItem')
        deleteItem.addEventListener('click', ()=>{
            eliminarProducto(producto.id)
        })
    });
    //total buy
    const total = carritoArray.reduce((acc, el)=> acc + el.precio * el.cantidad, 0)
    let totalCompra = document.createElement('div');
    totalCompra.className = ('cart-total');
    totalCompra.innerHTML = `<h6>Compra Total $${total}</h6>`;
    cartContent.append(totalCompra);
    //btn buy total
    let btnBuyTotal = document.createElement('button')
    btnBuyTotal.innerText = 'Buy'
    btnBuyTotal.className = 'btn btn-outline-success';
    cartContent.append(btnBuyTotal)
}
cartIcon.addEventListener("click", abrirCarrito)

//delete product function
const eliminarProducto = (idProducto) =>{
    const existeCarrito = carritoArray.find((element)=> element.id === idProducto);
    carritoArray = carritoArray.filter((carritoId) =>{
        return carritoId !== existeCarrito;
    });
    spanQuantity();
    saveLocalS()
    abrirCarrito();
}
//span cart- quantity
const spanQuantity = () =>{
    cantidadCarrito.style.display = "block";
    const carritoLength = carritoArray.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
}
spanQuantity()
//set item localStorage
const saveLocalS = () =>{
    localStorage.setItem("carrito", JSON.stringify(carritoArray));
}

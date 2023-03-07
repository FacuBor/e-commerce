//cards 
let divCards = document.getElementById('sectionProductos'); //Display grid
let carritoArray = JSON.parse(localStorage.getItem("carrito",)) || [];
//
carritoArray.length === 0 && console.log("carrito vacio")
//forEach productos
productos.forEach ((producto)=>{
        let card = document.createElement ("div")
        card.className = "cardItem card p-0 m-0  d-flex flex-column align-items-center justify-content-evenly"
        card.innerHTML =   `<img src="${producto.imagen}" class="imgCard" >
                            <div>
                                <div class="cardTitleProduct d-flex flex-column align-items-center justify-content-center mt-2 p-1">
                                    <div class="nameProduct d-flex flex-row justify-content-between align-items-center">  
                                        <h5 class=" fw-light m-0 nameShoe">${producto.nombre}</h5>
                                        <p class="fs-6 m-0 price-Card">$${producto.precio}</p>
                                    </div>
                                </div>
                            </div>`;
        divCards.append(card);
        //btn buy card
        let comprar = document.createElement("i")
        comprar.className = "bx bx-cart-add add-to-cart ";
        card.append(comprar)
        //product repeat and push product
        comprar.addEventListener('click', () => {
            const repeat = carritoArray.some((repeatProduct)=>repeatProduct.id === producto.id);
            console.log(repeat);
            if (repeat === true){
                carritoArray.map((prod)=>{
                    if(prod.id === prod.id){
                        prod.cantidad++;
                    }
                })
            }else {
                carritoArray.push({
                    id: producto.id,
                    nombre: producto.nombre,
                    precio: producto.precio,
                    imagen: producto.imagen,
                    cantidad: producto.cantidad,
                })
            }
            console.table(carritoArray)
            spanQuantity();
            saveLocalS();
        })
        //filter
        function masBaratos() {
            const prodBaratos = productos
            prodBaratos.sort (function(a, b){return a.precio - b.precio})
            console.table (prodBaratos)
        }
        function masCaros() {
            const prodCaros = productos
            prodCaros.sort (function (a, b){return b.precio - a.precio})
            console.table(prodCaros)
        };
        function allProducts (){
            const allProducts = productos
            allProducts.sort (function(a, b){return a.id - b.id})
            console.table (allProducts)
            
        }
})





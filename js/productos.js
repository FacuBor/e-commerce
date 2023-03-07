// Class constructor
class Producto {
    constructor(id, nombre, precio, cantidad, imagen){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.imagen = imagen;
    }
}
// objects (products)
const producto0 = new Producto (0, 'Nike Air-White', 20000, 1, './img/img-carousel-1.jpg');
const producto1 = new Producto (1, 'Nike Urban-brown', 15000, 1, './img/img-carousel-2.jpg');
const producto2 = new Producto (2, 'Nike Sport-red', 25000, 1, './img/img-carousel-3.jpg');
const producto3 = new Producto (3, 'Nike Sport-green', 35000, 1, './img/image-4.jpg');
const producto4 = new Producto (4, 'Nike Urban-black', 18000, 1, './img/image-5.jpg');
const producto5 = new Producto (5, 'Nike Urban-D', 18000, 1, './img/image-6.jpg');
const producto6 = new Producto (6, 'Nike Sport-dark brown', 20000, 1, './img/image-7.jpg');
const producto7 = new Producto (7, 'Nike Urban-White', 15000, 1, './img/image-8.jpg');
const producto8 = new Producto (8, 'Nike Urban-Golden', 35000, 1, './img/image-9.jpg');
const producto9 = new Producto (9, 'Nike Urban-D2', 18000, 1, './img/image-10.jpg');
const producto10 = new Producto (10, 'Nike Urban-grey', 22000, 1, './img/image-11.jpg');
const producto11 = new Producto (11, 'Nike Urban-White 2', 15000, 1, './img/image-12.jpg');
const producto12 = new Producto (12, 'Nike Sport-Urban', 25000, 1, './img/image-14.jpg');
const producto13 = new Producto (13, 'Nike Sport-D1', 18000, 1, './img/image-15.jpg' );
const producto14 = new Producto (14, 'Nike Urban-light Blue', 20000, 1, './img/image-16.jpg');

//array (*push para nuevo producto)
const productos = [producto0,producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9,producto10,producto11,producto12,producto13,producto14];
//LS stock products
localStorage.setItem('allProductos', JSON.stringify(productos))
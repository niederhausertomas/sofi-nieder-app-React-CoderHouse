import imagen1 from "./assets/images/producto1.jpg";
import imagen2 from "./assets/images/producto2.jpg";
import imagen3 from "./assets/images/producto3.jpg";
import imagen4 from "./assets/images/producto4.jpg";
import imagen5 from "./assets/images/producto5.jpg";

const productos = [
    {Id: '1',
    nombre: "Mesa Ratona ovalada",
    precio: 4500,
    imagen: imagen1,
    categoria: '1'},

    {Id: '2',
    nombre: "Sillon Gervasoni",
    precio: 7000,
    imagen: imagen2,
    categoria: '1'},

    {Id: '3',
    nombre: "Almohadones de respaldo 40x40",
    precio: 1000,
    imagen: imagen3,
    categoria: '2'},

    {Id: '4',
    nombre: "Perchero Escalera",
    precio: 2500,
    imagen: imagen4,
    categoria: '3'},

    {Id: '5',
    nombre: "Espejo redondo",
    precio: 7000,
    imagen: imagen5,
    categoria: '4'},
]

export const getFetch = new Promise((respuesta, rejected)=>{

    let url = 'www.productos.com.ar'

    if (url === 'www.productos.com.ar'){
        setTimeout(()=>{
            respuesta(productos);
        }, 2000);
    } else{
        rejected('400 not found')
    }
}
    )

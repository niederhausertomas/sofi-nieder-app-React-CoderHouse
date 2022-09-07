const productos = [
    {Id: 1,
    nombre: "Mesa Ratona ovalada",
    precio: 4500,
    imagen: "C:/Users/DELL/Desktop/porfolio/CoderHouseReact/sofi-nieder-app/src/assets/images/producto1.jpg"},

    {Id: 2,
    nombre: "Sillon Gervasoni",
    precio: 7000,
    imagen: "C:/Users/DELL/Desktop/porfolio/CoderHouseReact/sofi-nieder-app/src/assets/images/producto2.jpg"},

    {Id: 3,
    nombre: "Almohadones de respaldo 40x40",
    precio: 1000,
    imagen: "C:/Users/DELL/Desktop/porfolio/CoderHouseReact/sofi-nieder-app/src/assets/images/producto3.jpg"},

    {Id: 4,
    nombre: "Perchero Escalera",
    precio: 2500,
    imagen: "C:/Users/DELL/Desktop/porfolio/CoderHouseReact/sofi-nieder-app/src/assets/images/producto4.jpg"},

    {Id: 5,
    nombre: "Espejo redondo",
    precio: 7000,
    imagen: "C:/Users/DELL/Desktop/porfolio/CoderHouseReact/sofi-nieder-app/src/assets/images/producto5.jpg"},
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
import Saucer from "../Models/Saucer.js"

export const createSaucers = async(req, res) => {
    try {
        const count = await Saucer.estimatedDocumentCount();
        if(count>0) return;
        
        // Creating The Saucers
        const newsSaucers = await Promise.all([
            new Saucer({name: "Plato Corriente", price: 12000, duration_cooking: 10, picture: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/U4ANZNLW4NBEJB2QMTYLUABMWE.jpg"}).save(),
            new Saucer({name: "Plato Ejecutivo", price: 15000, duration_cooking: 12, picture: "https://d100mj7v0l85u5.cloudfront.net/s3fs-public/menu-ejecutivo-con-pollo.jpg"}).save(),
            new Saucer({name: "Especiales", price: 22000, duration_cooking: 18, picture: "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/XEFPBSMVDFDS3A7FT7EO6MZDLM.jpg"}).save(),
            new Saucer({name: "Entradas", price: 7000, duration_cooking: 3, picture: "https://www.gourmet.com.co/wp-content/uploads/2021/04/patacones.jpg"}).save(),
            new Saucer({name: "Jugos Naturales", price: 4000, duration_cooking: 1, picture: "https://www.paulinacocina.net/wp-content/uploads/2023/06/jugo-de-naranja-receta-y-propiedades.jpg"}).save(),
            new Saucer({name: "Gaseosa", price: 2500, duration_cooking: 0, picture: "https://copservir.vtexassets.com/arquivos/ids/764939/GASEOSA-COCA-COLA-ORIGINAL_F.png?v=637950273249600000"}).save(),
        ])

        console.log("The Sauces has been created successly! \nSaucers: ")
        console.log(newsSaucers)
    
    } catch (error) {
        console.log("An error has ocurred in the server:(")
    }
}

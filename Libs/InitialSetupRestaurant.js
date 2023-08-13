import Saucer from "../Models/Saucer.js"
import Restaurant from '../Models/Restaurant.js'

export const createSaucers = async(req, res) => {
    try {
        const count = await Saucer.estimatedDocumentCount();
        if(count>0) return;
        
        // Creating The Saucers
        const newsSaucers = await Promise.all([
            new Saucer({name: "Plato Corriente", quantity_ordered:0, price: 12000, duration_cooking: 10, picture: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/U4ANZNLW4NBEJB2QMTYLUABMWE.jpg"}).save(),
            new Saucer({name: "Plato Ejecutivo", quantity_ordered:0, price: 15000, duration_cooking: 12, picture: "https://d100mj7v0l85u5.cloudfront.net/s3fs-public/menu-ejecutivo-con-pollo.jpg"}).save(),
            new Saucer({name: "Especiales", quantity_ordered:0, price: 22000, duration_cooking: 18, picture: "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/XEFPBSMVDFDS3A7FT7EO6MZDLM.jpg"}).save(),
            new Saucer({name: "Entradas", quantity_ordered:0, price: 7000, duration_cooking: 3, picture: "https://www.gourmet.com.co/wp-content/uploads/2021/04/patacones.jpg"}).save(),
            new Saucer({name: "Jugos Naturales", quantity_ordered:0, price: 4000, duration_cooking: 1, picture: "https://www.paulinacocina.net/wp-content/uploads/2023/06/jugo-de-naranja-receta-y-propiedades.jpg"}).save(),
            new Saucer({name: "Gaseosa", quantity_ordered:0, price: 2500, duration_cooking: 0, picture: "https://copservir.vtexassets.com/arquivos/ids/764939/GASEOSA-COCA-COLA-ORIGINAL_F.png?v=637950273249600000"}).save(),
            new Saucer({name: "bandeja Paisa", quantity_ordered:0, price: 18000, duration_cooking: 12, picture: "https://cdn.colombia.com/gastronomia/2011/08/02/bandeja-paisa-1616.gif"}).save(),
            new Saucer({name: "Mojarra Frita", quantity_ordered:0, price: 22000, duration_cooking: 30, picture: "https://elrinconcolombiano.com/wp-content/uploads/2022/10/mojarra-frita.jpg"}).save(),
            new Saucer({name: "Pasta", quantity_ordered:0, price: 14000, duration_cooking: 18, picture: "https://cdn.colombia.com/sdi/2019/03/05/recetas-con-pasta-716227.jpg"}).save(),
            new Saucer({name: "Arroz Con Pollo", quantity_ordered:0, price: 14000, duration_cooking: 21, picture: "https://elsabor.com.ec/wp-content/uploads/2022/02/arroz-pollo.jpg"}).save(),
            new Saucer({name: "Ajiaco", quantity_ordered:0, price: 10000, duration_cooking: 12, picture: "https://www.deliciosi.com/images/1500/1510/ajiaco-de-pollo.jpg"}).save(),
            new Saucer({name: "Sancocho", quantity_ordered:0, price: 22000, duration_cooking: 30, picture: "https://cdn.colombia.com/gastronomia/2017/01/05/sancocho-trifasico-3123.jpg"}).save(),
            new Saucer({name: "Arepas Rellenas", quantity_ordered:0, price: 9000, duration_cooking: 18, picture: "https://i.blogs.es/8ad4da/arepas/840_560.jpg"}).save(),
            new Saucer({name: "Pasteles de Carne", quantity_ordered:0, price: 10000, duration_cooking: 5, picture: "https://www.revistacompensar.com/wp-content/uploads/2020/12/shutterstock_1176827785.jpg"}).save(),
            new Saucer({name: "Buñuelos x3", quantity_ordered:0, price: 6000, duration_cooking: 4, picture: "https://www.elespectador.com/resizer/_gDNmkhwU9H4FN0WPw7NIz8dvhs=/arc-anglerfish-arc2-prod-elespectador/public/DLEQPHYNTZFGVEPDJ2VQDANSDI.jpg"}).save(),
            new Saucer({name: "Milanesa", quantity_ordered:0, price: 13000, duration_cooking: 30, picture: "https://assets.kraftfoods.com/recipe_images/opendeploy/116077_MXM_K57605V0_OR1_CR_640x428.jpg"}).save(),
            new Saucer({name: "Café Con Leche", quantity_ordered:0, price: 2300, duration_cooking: 18, picture: "https://i.blogs.es/421374/cafe-con-leche2/1366_2000.jpg"}).save(),
            new Saucer({name: "Pollo al Curry", quantity_ordered:0, price: 13000, duration_cooking: 21, picture: "https://www.annarecetasfaciles.com/files/pollo-al-curry-2.jpg"}).save(),

        ])

        console.log("The Sauces has been created successly! \nSaucers: ")
        console.log(newsSaucers)
    
    } catch (error) {
        console.log("An error has ocurred in the server:(")
    }
}

export const initialRestaurant = async(req, res) => {
    try {
        const count = await Restaurant.estimatedDocumentCount();
        if(count>0) return

        const restaurantCreate = await new Restaurant(
            {
                name: "Restaurante Sasón Barranquillero",
                profit: 0,
                cant_customers: 0,
                saucer_most_selling: null,
                cant_orders: 0,
                // lastOrder: null
            }
        ).save()

        console.log("The Initial Restaurant has been created success!")
        console.log(restaurantCreate)

    } catch (error) {
        console.log("An error has ocurred in the server:(", error)
    }
}
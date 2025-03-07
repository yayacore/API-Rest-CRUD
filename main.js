import express from "express";
import { getAllProducts, newProduct, sequelize } from "./database.js";

// Je connecte ma bdd et je crée la table
sequelize.sync({force : true}).then(()=>{
    // quand la BDD est bien connecté je démarre mon programme
    main();
});

// async function main () {

//     console.log("Programme fancy 2.0 ✨");
// }

async function main(){
    await newProduct("adidas", 30);
    await newProduct("puma", 98);

    const products = await getAllProducts();
    products.forEach(product=>{
        console.log(product.title);
        console.log(product.price);
    })


    const app = express();

    app.get("/all-products", async (req ,res)=>{
        const products = await getAllProducts();
        res.json(products);
    })

    app.listen(300, ()=>{
        console.log("API listen on port 3000");
    });

}


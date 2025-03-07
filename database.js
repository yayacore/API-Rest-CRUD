import { DataTypes, Sequelize } from "sequelize";

const login = {
    database : "shop",
    username : "root",
    password : "root",
};

export  const sequelize = new Sequelize(login.database,login.username,login.password,{
    dialect:"mysql"
});

/**
 * CREATE TABLE Je défini la sctructure de la table de produit
 */

const Product =  sequelize.define("Product",{
    title : DataTypes.STRING,
    price : DataTypes.INTEGER
});

/**
 * 
 * @param {string} title 
 * @param {number} price 
 */

export async function newProduct(title, price){

    const newProduct = await Product.create({
        title : title,
        price : price
    });

    return newProduct;
}

export async function getAllProducts(){
    const products = await Product.findAll();

    return products;
}
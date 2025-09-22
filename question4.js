const products = [
{ name: "Laptop", price: 1200 },
{ name: "Phone", price: 800 },
{ name: "Tablet", price: 600 }
];


function getAffordableProducts(products,budget){

    return products.filter(products => products.price <=budget);
}

    console.log(getAffordableProducts(products,1000));
    


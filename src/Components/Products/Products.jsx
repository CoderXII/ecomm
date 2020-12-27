import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "Fisherman Style",
    description: "Afro Beat",
    author: "Prod. By XII",
    price: "200",
    image: require("../../Assets/MS.jpg").default,
  },
  {
    id: 2,
    name: "Comfort",
    description: "RnB",
    author: "Prod. By XII",
    price: "200",
    image: require("../../Assets/ag.jpg").default,
  },
  {
    id: 3,
    name: "Ahks & Racks",
    description: "Anthem",
    author: "Prod. By XII",
    price: "200",
    image: require("../../Assets/mm.jpg").default,
  },

  {
    id: 4,
    name: "Rotten Anthem",
    description: "Grime",
    author: "Prod. By XII",
    price: "200",
    image: require("../../Assets/ea.jpg").default,
  },

  {
    id: 5,
    name: "Without You",
    description: "RnB",
    author: "Prod. By XII",
    price: "200",
    image: require("../../Assets/aa.jpg").default,
  },

];

const Products = () => {

  return (
    <main>
      <Grid container justify="space-evenly" alignItems="center" spacing={0}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={12} md={6} lg={4} >
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

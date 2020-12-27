import React from "react";
import Grid from "@material-ui/core/Grid";
import { Card, CardContent, CardMedia, CardActions, Typography, IconButton,} from "@material-ui/core";
import { Theme, useTheme } from "@material-ui/core/styles";
import useStyles from "./styles";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { AddShoppingCart } from "@material-ui/icons";
import {useStateValue} from "../../../StateProvider";

//import Paper from '@material-ui/core/Paper';





const Product = ({ product }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [{ cart },dispatch] =useStateValue();
  
  console.log("This is the basket >>>>", cart)

  const addToCart = () =>{
    //dispatch the item into data layer
    dispatch({
      type: "ADD_TO_CART",
      item:{
        product: product,
      },
    });
  };

  return (

//This is the root object

    <div className={classes.root}>

      <Card className={classes.card}> 

        <Grid container item  xs={12} >

          <Grid container item  alignItems="center" className={classes.cover} xs={4} sm={2} md={3} lg={4}>
              <CardMedia className={classes.media} image={product.image}>
                    <IconButton aria-label="play/pause" >
                      <PlayArrowIcon className={classes.playIcon} />
                    </IconButton>
              </CardMedia>
          </Grid>

          <Grid item container direction="column" className={classes.cardBody}  xs={6} sm={9} md={7} lg={6}>
          
            <CardContent className={classes.cardContent} >
              
              <Grid item container direction="column" justify="space-between" spacing={6} >

                <Grid item  direction="column"  className={classes.details} xs zeroMinWidth>

                      <Typography variant="h6" noWrap>
                        {product.name}
                      </Typography>

                      <Typography variant="subtitle2" color="textSecondary" noWrap>
                        {product.description}
                      </Typography>

                      <Typography variant="caption" color="textSecondary" noWrap>
                        {product.author}
                      </Typography>

                </Grid>

                <Grid  item direction="column" className={classes.price__box} xs zeroMinWidth >
                
                  <hr  
                    style={{
                        width: "100%",
                        borderColor : '#F8F8FF'
                     }}
                  />
                 
                  <div className={classes.price}>
                        <p> 
                          <small>£</small>
                          <strong>{product.price}</strong>
                          <small> (lease licence)</small>
                        </p>
                  </div>
                </Grid>

              </Grid>

            </CardContent>

          </Grid>

          <Grid container item  justify="center" alignItems="center" xs={2} sm={1} md={2} lg={2} className={classes.purchase} >

                  <Grid item>
                    <CardActions disableSpacing className={classes.cardActions}>
                      <IconButton className={classes.cartIcon} aria-label="Add To Cart">
                        <AddShoppingCart onClick={ () => addToCart(product.id, 1)}/>
                      </IconButton>
                    </CardActions>
                  </Grid>

          </Grid>

        </Grid>
      </Card>
    </div>
  );
};

export default Product;

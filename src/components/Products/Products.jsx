import React from 'react';
import Grid  from '@material-ui/core/Grid';

import Product from '../Product/Product';

// CREATE PRODUCTS ARRAY
const products = [
     { id: 1 , name: 'The Pack Survives Tee', description: '100% COTTON OVERSIZED / BOXY FIT,SOFT, SMOOTH, PREMIUM HEAVY FEEL', price: '$140', image:'https://shirtspacev4productimages.s3.amazonaws.com/uploads/variant/front_image/228018/cell_yg27qhbneys9upd20heomy0xuquw.jpeg' },
     { id: 2 , name: 'The Pack Survives Hoodie', description: '36oz 100% COTTON, TRUE-TO-SIZE BOXY CUT / NOT "SLIM" SHORT SLEEVE', price: '$165', image:'' },
     { id: 3 , name: 'The Pack Survives Long Sleeve', description: '100% COTTON, OVERSIZED / BOXY FIT, LONG SLEEVE', price: '$222', image:'https://shirtspacev4productimages.s3.amazonaws.com/uploads/variant/front_image/170887/cell_6zt66e5w9rrql8lfwdd6qo0t40bk.jpeg' },

]

const Products = () => {
    return (
        <main>
             <Grid container justify="center" spacing={4}>
               {products.map((product)=> (
                  <Grid item key={product.id} xs={12} sm={6} md= {4} lg={3}> 
                      <Product product={product} />
              </Grid>
          ))}
        </Grid>
    </main>

    );


}

export default Products;
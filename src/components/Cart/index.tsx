import { FC } from "react";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";

import Item from "../../components/Item";

type Props = {
   data: {
      id: number,
      productName: string,
      maxQuantity: number,
      pack: boolean,
      price: number,
      packObjects: string[]
   }[]
}

const Cart = (props: Props) => {
  
  const { data } = props;

  return (
    <Box>
        <Typography component="h1">Your Cart</Typography>
        <Box>
            {data.map(elem => {
            return <Item 
                        key={elem.id}
                        productName={elem.productName} 
                        maxQuantity={elem.maxQuantity} 
                        pack={elem.pack} 
                        price={elem.price} 
                        packObjects={elem.packObjects} 
                    />
            })}
        </Box>
    </Box>
  )
}

export default Cart;
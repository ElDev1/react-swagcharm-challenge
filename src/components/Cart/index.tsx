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
      img: string
   }[]
}

const Cart = (props: Props) => {
  
  const { data } = props;

  return (
    <Box>
        <Box display="flex" marginTop="32px" alignItems="end">
            <Typography variant="h5" fontWeight="600" >Your Cart</Typography> 
            <Typography color="gray" marginLeft="5px">({data.length})</Typography>
        </Box>
        <Box>
            {data.map(elem => {
            return <Item 
                        key={elem.id}
                        productName={elem.productName} 
                        maxQuantity={elem.maxQuantity} 
                        pack={elem.pack} 
                        price={elem.price} 
                        packObjects={elem.packObjects}
                        img={elem.img} 
                    />
            })}
        </Box>
    </Box>
  )
}

export default Cart;
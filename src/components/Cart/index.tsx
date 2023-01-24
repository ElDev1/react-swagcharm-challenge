import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";

import Item from "../Item";
import OrderSummary from "../OrderSummary";

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
    <Box display="flex" marginTop="32px" justifyContent="space-betweens" gap="20px">
      <Box maxWidth="1100px" width="100%">
        <Box display="flex" alignItems="end">
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
      <Box>
        <OrderSummary />
      </Box>
    </Box>
  )
}

export default Cart;
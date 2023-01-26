import { useState, useEffect } from "react";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";

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

  const [dataItems, setDataItems] = useState(data);
  const [totalQuantity, setTotalQuantity] = useState(dataItems.map((item) => {
    return {id: item.id, quantityItems: 0}
  }));
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
      calcTotalPrice();
  },[totalQuantity, dataItems])

  console.log(totalPrice)

  const deleteDataItem = (id: number) => {
    const newArr = dataItems.filter(elem => elem.id !== id);
    
    setDataItems(newArr);

    const filteredQuantityArr = totalQuantity.filter(elem => elem.id !== id);
    

    setTotalQuantity(filteredQuantityArr);
  }

  const calcTotalPrice = () => {
    
    let price = 0;
    
    for(let i = 0; i < dataItems.length; i++) {
      price += dataItems[i].price * totalQuantity[i].quantityItems
    }

    setTotalPrice(price); 
  }
  
  console.log(totalQuantity)

  return (
    <Box display="flex" marginTop="32px" justifyContent="space-betweens" gap="20px">
      <Box maxWidth="1100px" width="100%">
        <Box display="flex" alignItems="end">
            <Typography variant="h5" fontWeight="600" >Your Cart</Typography> 
            <Typography color="gray" marginLeft="5px">({dataItems.length})</Typography>
        </Box>
        <Box>
            {dataItems.map((elem, i) => {
            return <Item 
                        key={elem.id}
                        id={elem.id}
                        productName={elem.productName} 
                        maxQuantity={elem.maxQuantity} 
                        pack={elem.pack} 
                        price={elem.price} 
                        packObjects={elem.packObjects}
                        img={elem.img}
                        deleteDataItem={deleteDataItem}
                        totalQuantity={totalQuantity}
                        setTotalQuantity={setTotalQuantity}
                    />
            })}
        </Box>
      </Box>
      <Box>
        <OrderSummary totalPrice={totalPrice} totalItems={dataItems.length}/>
      </Box>
    </Box>
  )
}

export default Cart;
import { useState } from "react";

import { Box, Button, Divider, TextField, Typography } from "@mui/material"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

type Props = {
    id: number
    productName: string
    maxQuantity: number
    pack: boolean
    price: number
    packObjects: string[]
    img: string
    deleteDataItem: Function
    totalQuantity: Quantity[]
    setTotalQuantity: Function
}

type Quantity = {
    id: number
    quantityItems: number
}


const Item = (props: Props) => {
    
    const { id, productName, maxQuantity, pack, price, packObjects, img, deleteDataItem, setTotalQuantity, totalQuantity } = props;
    
    const [quantity, setQuantity] = useState(maxQuantity)



    const handleQuantity = (event: React.ChangeEvent<HTMLTextAreaElement>) => { 
        const number = Number(event.target.value);
        
        console.log(totalQuantity, "totalQuantity");
        console.log(id, "id");
        
        const obj = totalQuantity.find(elem => elem.id === id)

        if(obj !== undefined) {
            const itemOfArr = Object.assign(obj);
            itemOfArr.quantityItems = number;
            
            const newArr = totalQuantity.map(elem => elem);
            newArr[id - 1] = itemOfArr;
            setTotalQuantity(newArr);
        }

        //const itemOfArr = Object.assign(totalQuantity[id - 1]);
        
        setQuantity(number);
    }


    return (
        <Box>
            <Box display="flex" justifyContent="space-between"  marginTop="40px" marginBottom="20px">
                <Box display="flex">
                    <Box>
                        <Box
                            component="img"
                            height="120px"
                            width="120px"
                            alt="product image"
                            src={img}
                        >
                        </Box>
                        {pack ? <Box width="34px" height="20px" marginTop="8px" margin="auto" textAlign="center" color="#848A92" backgroundColor="#E6E8E9">pack</Box> : ""}
                    </Box>
                    <Box marginLeft="16px">
                        <Typography variant="h6" fontWeight="700">{productName}</Typography>
                        <Box display="flex" alignItems="center" gap="5px">
                            <Typography fontWeight="700">Quantity</Typography>
                            <TextField
                                type="number"
                                value={quantity}
                                onChange={handleQuantity}
                                variant="standard"
                                InputProps={{
                                    inputProps: { 
                                        max: maxQuantity, min: 0 
                                    }
                                }}
                            />
                        </Box>
                        <Box component="ul" marginTop="16px">
                            {
                                pack ? packObjects.map(elem => <Box component="li" fontWeight="600" padding="2px" marginLeft="16px">{elem}</Box>) : ""
                            }
                        </Box>
                        <Box display="flex">
                            {
                                pack ? (
                                    <Box display="flex" color="black" marginTop="22px">
                                        <Button color="inherit" size="small" variant="text">Edit pack</Button>
                                        <Divider orientation="vertical" variant="middle" flexItem></Divider>
                                        <Button color="inherit" size="small" variant="text" onClick={() => deleteDataItem(id)}>Remove</Button>
                                    </Box>
                                ) : (
                                    <Box color="black">
                                        <Button color="inherit" size="small" variant="text" onClick={() => deleteDataItem(id)} startIcon={<DeleteOutlineIcon />}>Remove</Button>
                                    </Box>
                                )
                            }
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Typography fontWeight="600">${price.toFixed(2)}</Typography>
                    <Typography fontWeight="600">Total: ${(price * quantity).toFixed(2)}</Typography>
                </Box>
            </Box>
            <Divider orientation="horizontal" flexItem variant="fullWidth" />
        </Box>
  )
}

export default Item;


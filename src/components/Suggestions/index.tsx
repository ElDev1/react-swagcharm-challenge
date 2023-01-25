import { Straight } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"
import { Stack } from "@mui/system"

const mockData = [
  {
    productName: "Unisex Short Sleeve T-Shirt",
    price: [10, 24],
    minimum: 34
  },
  {
    productName: "Unisex Short Sleeve T-Shirt",
    price: [10, 24],
    minimum: 34
  },
  {
    productName: "Unisex Short Sleeve T-Shirt",
    price: [10, 24],
    minimum: 34
  },
  {
    productName: "Unisex Short Sleeve T-Shirt",
    price: [10, 24],
    minimum: 34
  },
]


const index = () => {
  return (
    <Box marginTop="80px">
      <Typography 
          variant="h5" 
          fontWeight="600" 
          marginBottom="24px"
      >
        You might also like
      </Typography>
      <Stack direction="row" spacing="24px">
        {
          mockData.map(elem => {
          return (
            <Box>
              <Box
                 width="336px" 
                 height="336px" 
                 backgroundColor="#CED0D3"
              >  
              </Box>
              <Typography variant="subtitle1" fontWeight="700" >
                {elem.productName}
              </Typography>
              <Stack direction="row" spacing="94px">
                <Box display="flex">
                  <Typography variant="body2" fontWeight="600">
                    {
                      `$ ${elem.price[0]} - $ ${elem.price[1]}`
                    }
                  </Typography>
                </Box>
                <Box display="flex" gap="5px" color="#6B737C">
                    <Typography variant="body2" color="inherit">Minimun:</Typography>
                    <Typography variant="body2">{elem.minimum}</Typography>
                </Box>
              </Stack>
            </Box>
          )})
        }
      </Stack>
    </Box>
  )
}

export default index
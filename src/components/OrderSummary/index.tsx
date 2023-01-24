import { Box, Button, Divider, Stack, Typography } from "@mui/material";

const OrderSummary = () => {
  return (
    <Box width="400px">
        <Typography variant="h5" fontWeight="600">Order Summary</Typography>
        <Box display="flex" justifyContent="space-between" marginTop="24px" marginBottom="24px">
                <Typography color="#6B737C">Number of items</Typography>
                <Typography color="#6B737C">3</Typography>
        </Box>
        <Divider />
        <Box display="flex" justifyContent="space-between" marginTop="24px" marginBottom="24px">
            <Typography fontWeight="600">Total</Typography>
            <Typography>3000</Typography>
        </Box>
        <Box color="black">
            <Box marginBottom="15px">
                <Button variant="contained" color="inherit">Proceed to Checkout</Button>
            </Box>
            <Box>
                <Button variant="outlined" color="inherit">Continue shopping</Button>
            </Box>
        </Box>
    </Box>
  )
}

export default OrderSummary;
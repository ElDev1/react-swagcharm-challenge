import { Box, IconButton, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";

import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import RedeemIcon from '@mui/icons-material/Redeem';

const Header = () => {
  return (
    <Box component="header" >     
        <Box    
            backgroundColor="#091625" 
            height="88px" 
            width="100%" 
            display="flex" 
            alignItems="center"
        >
            <Container maxWidth="xl">
                <Box display="flex" justifyContent="space-between">
                    <Box display="flex" alignItems="center">
                        <Box 
                            width="172px" 
                            display="flex" 
                            alignItems="center" 
                            justifyContent="center" 
                            height="48px" 
                            backgroundColor="#CED0D3"
                            color="#848A92"
                        >
                            Logo
                        </Box>
                        <Box  
                            height="40px"
                            borderRadius="20px" 
                            marginLeft="68px"
                            backgroundColor="white"
                            display="flex"
                            alignItems="center"
                        >
                            <SearchIcon width="16px" height="16px"/>
                            <Box 
                                component="input"
                                marginLeft="2px" 
                                width="676px" 
                                height="40px" 
                                borderRadius="20px" 
                                border="none" 
                                placeholder="Search Products"
                            />
                        
                        </Box>
                    </Box>
                    <Box  display="flex" alignItems="center" gap="15px">
                        <Box display="flex" alignItems="center" >
                            <IconButton>
                                <PersonOutlineRoundedIcon style={{ fontSize: 30, color:"white" }}/>
                            </IconButton>
                            <Typography component="p" color="white">Sign In</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" >
                            <IconButton>
                                <RedeemIcon style={{ fontSize: 30, color:"white" }}/>
                            </IconButton>
                            <Typography component="p" color="white">Cart</Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
        <Box backgroundColor="#E6E8E9" height="64px" display="flex"  alignItems="center">
            <Container maxWidth="xl">
                <Box display="flex" gap="35px">
                    <Link href="#" underline="none" color="#535C67">All products</Link>
                    <Link  href="#" underline="none" color="#535C67">Packaging</Link>
                    <Link  href="#" underline="none" color="#535C67">Drinkware</Link>
                    <Link  href="#" underline="none" color="#535C67">Apparel</Link>
                    <Link  href="#" underline="none" color="#535C67">Notebooks</Link>
                    <Link  href="#" underline="none" color="#535C67">Backpacks</Link>
                </Box>
            </Container>
        </Box>
    </Box>
  )
}

export default Header;
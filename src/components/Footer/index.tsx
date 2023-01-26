import { Box, Container, FormControl, InputLabel, Link, MenuItem, Select, Stack, Typography } from "@mui/material"

import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <Box paddingTop="80px" marginTop="120px" backgroundColor="#E6E8E9">
        <Container maxWidth="xl">
            <Box display="flex" justifyContent="space-between">
                <Box>
                    <Box
                        width="172px"
                        height="48px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        backgroundColor="#CED0D3"
                        color="#848A92"
                    >
                        Logo
                    </Box> 
                    <Box width="264px" marginTop="25px" color="#6B737C">
                        <Typography color="inherit" variant="body2">we seel custom products for all your needs. Packs and bulk products that you will enjoy</Typography>
                    </Box>
                    <Box marginTop="24px">
                        <Stack direction="row" spacing="10px">
                            <PhoneIcon />
                            <Typography variant="body2" fontWeight="700">+1-202-555-0129</Typography>
                        </Stack>
                    </Box>
                    <Box marginTop="40px">
                        <Stack direction="row" spacing="10px">
                            <FacebookIcon />
                            <TwitterIcon />
                            <InstagramIcon />
                            <LinkedInIcon />
                            <YouTubeIcon />
                        </Stack>
                    </Box>
                </Box>
                <Stack direction="column" spacing="24px">
                    <Typography variant="subtitle1" fontWeight="700">
                        Our company
                    </Typography>
                    <Box color="#3A4451">
                        <Link href="#" color="inherit" underline="none" variant="subtitle1">
                            About Us
                        </Link>
                    </Box>
                    <Box color="#3A4451">
                        <Link href="#" color="inherit" underline="none" variant="subtitle1">
                            Partnerships
                        </Link>
                    </Box>
                    <Box color="#3A4451">
                        <Link href="#" color="inherit" underline="none" variant="subtitle1">
                            Sustainability
                        </Link> 
                    </Box>
                    <Box color="#3A4451">
                        <Link href="#" color="inherit" underline="none" variant="subtitle1">
                            Blog
                        </Link> 
                    </Box>
                </Stack>
                <Stack direction="column" spacing="24px">
                    <Typography variant="subtitle1" fontWeight="700">
                        How can we help
                    </Typography>
                    <Box color="#3A4451">
                        <Link href="#" color="inherit" underline="none" variant="subtitle1">
                            Place a ticket
                        </Link>
                    </Box>
                    <Box color="#3A4451">
                        <Link href="#" color="inherit" underline="none" variant="subtitle1">
                            Track your order
                        </Link>
                    </Box>
                    <Box color="#3A4451">
                        <Link href="#" color="inherit" underline="none" variant="subtitle1">
                            Help center
                        </Link> 
                    </Box>
                </Stack>
                <Stack direction="column" spacing="24px">
                    <Typography variant="subtitle1" fontWeight="700">
                        Information
                    </Typography>
                    <Box color="#3A4451">
                        <Link href="#" color="inherit" underline="none" variant="subtitle1">
                            Contact us
                        </Link>
                    </Box>
                    <Box color="#3A4451">
                        <Link href="#" color="inherit" underline="none" variant="subtitle1">
                            Live chat
                        </Link>
                    </Box>
                    <Box color="#3A4451">
                        <Link href="#" color="inherit" underline="none" variant="subtitle1">
                            Privacy
                        </Link> 
                    </Box>
                    <Box color="#3A4451">
                        <Link href="#" color="inherit" underline="none" variant="subtitle1">
                            Terms of use
                        </Link> 
                    </Box>
                </Stack>
                <Box>
                    
                </Box>
            </Box>
        </Container>
        <Container maxWidth="xl">
            <Box display="flex" paddingTop="121px" paddingBottom="76px" justifyContent="space-between" alignItems="center">
                <Box color="#535C67">
                        <Typography variant="body2" color="inherit">2022 Customer Products. All rights reserved</Typography>
                </Box>
                <Box display="flex">
                    <Box display="flex" alignItems="center">
                        <Typography variant="body2">Region: </Typography>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-select">United States</InputLabel>
                            <Select
                                labelId="demo-select"
                                id="demo-select"
                                label="Country"
                            >
                                <MenuItem value="">
                                </MenuItem>
                                <MenuItem value="United States">United States</MenuItem>
                                <MenuItem value="Latam">Latam</MenuItem>
                                <MenuItem value="Europe">Europe</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Typography variant="body2">Language: </Typography>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-select">English</InputLabel>
                            <Select
                                labelId="demo-select"
                                id="demo-select"
                                label="Country"
                            >
                                <MenuItem value="">
                                </MenuItem>
                                <MenuItem value="Latam">English</MenuItem>
                                <MenuItem value="Europe">Spanish</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
            </Box>
        </Container>
    </Box>
  )
}

export default Footer;
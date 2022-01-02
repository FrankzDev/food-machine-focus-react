import { Divider, List, Typography } from "@mui/material"
import { grey, orange } from "@mui/material/colors";

import { Box } from "@mui/system"
import { CheckoutItem } from "./CheckoutItem";
import { CheckoutTotalTime } from "./CheckoutTotalTime";

export const SidebarCheckout = () => {
    return(
        <Box
            height={'100vh'}
                sx={{
                    background: grey[900],
                    color: grey[300],
                    boxShadow: 1}}>
            <Box height={'72px'}>
                <Typography
                    variant="h5"
                    pt={4}
                    fontWeight={900}
                    letterSpacing={0.5}
                    textAlign={'center'}
                    sx={{ color: orange[600] }}>
                    Checkout
                </Typography>
                <Divider variant="middle" style={{ background: grey[600] }} />
            </Box>
            <Box>
                <List component={'nav'}>
                    <CheckoutItem />
                </List>
            </Box>

            <Box position={'absolute'} bottom={0} width={'20%'}>
                <Divider variant="middle" style={{ background: grey[600] }} />
                <CheckoutTotalTime />
            </Box>
        </Box>
    )
}
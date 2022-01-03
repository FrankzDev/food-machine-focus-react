import { Divider, List, Typography } from "@mui/material"
import { grey, orange } from "@mui/material/colors";

import { Box } from "@mui/system"
import { CheckoutItem } from "./CheckoutItem";
import { CheckoutTotalTime } from "./CheckoutTotalTime";

export const SidebarCheckout = (props) => {

    var totalTime = 0;

    return(
        <Box
            height={'100vh'}
                sx={{
                    background: grey[900],
                    color: grey[300],
                    boxShadow: 1}}>
            <Box>
                <Typography
                    variant="h5"
                    height={'10vh'}
                    fontWeight={900}
                    letterSpacing={0.5}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    sx={{ color: orange[600] }}>
                    Checkout
                </Typography>
                <Divider variant="middle" style={{ background: grey[600] }} />
            </Box>
            <Box>
                <List component={'nav'}>
                    {props.orders && props.orders.map(( item, index ) => {
                        totalTime = totalTime + parseInt(item.preparation_time)
                        return(
                            <CheckoutItem
                                key={ index + item.id }
                                item={ item }/>
                        )
                    })}
                </List>
            </Box>

            <Box position={'absolute'} bottom={0} width={'15%'}>
                <Divider variant="middle" style={{ background: grey[600] }} />
                <CheckoutTotalTime totalTime={ totalTime } />
            </Box>
        </Box>
    )
}
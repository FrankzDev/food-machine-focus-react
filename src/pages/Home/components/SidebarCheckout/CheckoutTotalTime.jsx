import { Typography } from "@mui/material"

import { Box } from "@mui/system"

export const CheckoutTotalTime = ({ totalTime }) => {
    return(
        <Box
            padding={2}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}>
            <Typography variant="body2">
                Total time
            </Typography>
            <Typography variant="caption">
                { totalTime }s
            </Typography>
        </Box>
    )
}
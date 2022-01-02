import { Divider, Typography } from "@mui/material"
import { grey, orange } from "@mui/material/colors";

import { Box } from "@mui/system"

export const CheckoutTotalTime = () => {
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
                0s
            </Typography>
        </Box>
    )
}
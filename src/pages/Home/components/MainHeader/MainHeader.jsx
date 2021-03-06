import { Box, Divider, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";

export const MainHeader = () => {
    return(
        <Box>
            <Typography
                pl={8}
                width={'auto'}
                height={'10vh'}
                display={'flex'}
                alignItems={'center'}
                variant="h5"
                fontWeight={900}
                letterSpacing={0.5}
                sx={{ color: orange[600] }}>
                Food Machine - React Test
            </Typography>
            <Divider variant="middle" />
        </Box>
    )
};
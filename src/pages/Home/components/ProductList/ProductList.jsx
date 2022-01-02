import { Box, Grid } from "@mui/material"
import { ProductItem } from "./ProductItem";

const ProductList = () => {
    return(
        <Box pl={8}>
            <Grid
                container
                mt={5}
                mb={5}
                spacing={2}
                justifyContent={'flex-start'}>
                <ProductItem />
            </Grid>
        </Box>
    )
};

export default ProductList;
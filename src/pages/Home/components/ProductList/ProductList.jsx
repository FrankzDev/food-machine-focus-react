import { Box, Grid, Typography } from "@mui/material"
import { ProductItem } from "./ProductItem";

const ProductList = (props) => {

    const loadingImg = 'https://miro.medium.com/max/700/1*CsJ05WEGfunYMLGfsT2sXA.gif';

    return(
        <Box pl={8}>
            <Grid
                container
                mt={5}
                mb={5}
                spacing={2}
                justifyContent={'flex-start'}>
                {/* ERROR */}
                {props.error &&
                    <Box
                        width={'100%'}
                        height={'50vh'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}>
                        <Typography variant={'body2'}>
                            { props.error }
                        </Typography>
                    </Box>}

                {/* LOADING */}
                {props.isLoading &&
                    <Box
                        width={'100%'}
                        height={'50vh'}
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}>
                        <Box
                            component={'img'}
                            src={loadingImg}
                            width={200}
                            />
                        <Typography variant={'caption'}>
                            Loading...
                        </Typography>
                    </Box>}
                {/* SUCCESS REQUEST */}
                {props.products && props.products.map(product => {
                    return(
                        <ProductItem key={product.id} product={product} />
                    )
                })}
            </Grid>
        </Box>
    )
};

export default ProductList;
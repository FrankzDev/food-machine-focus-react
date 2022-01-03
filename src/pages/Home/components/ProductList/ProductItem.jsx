import { Button, Card, CardMedia, Grid, Stack, Typography } from "@mui/material";
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import { makeStyles } from '@mui/styles';
import { grey, orange } from "@mui/material/colors";
import { Box } from "@mui/system";

export const ProductItem = (props) => {

    const handleAdd = (product) => {
        props.handleAddProduct(product)
    };

    const useStyles = makeStyles({
        media: {
           objectFit: 'contain'
        },
        button: {
            background: orange[700],
            fontSize: 12,
            '&:hover': {
                backgroundColor: orange[800],
            },
            '&:active': {
                backgroundColor: orange[900],
            }
        }
    });

    const classes = useStyles();

    return(
        <Grid item width={300}>
            <Card sx={{ color: grey[700] }}>
                <CardMedia
                    className={classes.media}
                    component={'img'}
                    height={ 200 }
                    alt={ props.product.name }
                    image={ props.product.thumbnail } />
                    <Box
                        height={50}
                        padding={2}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'space-between'}>
                        <Typography
                            variant="h6"
                            fontWeight={600}
                            sx={{ color: orange[500] }}>
                            { props.product.name }
                        </Typography>
                        <Stack
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'center'}>
                            <QueryBuilderIcon
                                fontSize="small"
                                sx={{ color: orange[500] }} />
                            <Typography variant="caption" textAlign={'center'}>
                                { props.product.preparation_time }
                            </Typography>
                        </Stack>
                    </Box>
                    <Stack padding={2}>
                        <Button
                            variant="contained"
                            size="large"
                            className={classes.button}
                            fullWidth
                            onClick={() => handleAdd(props.product)}>
                                Order
                        </Button>
                    </Stack>
            </Card>
        </Grid>
    )
};
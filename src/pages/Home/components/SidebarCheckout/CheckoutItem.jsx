import { ListItem, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import { Countdown } from "./Countdown";

export const CheckoutItem = ({ item }) => {
    return(
        <ListItem
            component={'li'}
            sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
            <Typography variant="subtitle2">
                { item.name }
            </Typography>
            <Typography variant="caption" color={orange[600]}>
                <Countdown time={parseInt(item.preparation_time)} />
            </Typography>
        </ListItem>
    )
};
import { ListItem, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";

export const CheckoutItem = () => {
    return(
        <ListItem
            component={'li'}
            sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
            <Typography variant="subtitle2">
                Item Name
            </Typography>
            <Typography variant="caption" color={orange[600]}>
                Time
            </Typography>
        </ListItem>
    )
};
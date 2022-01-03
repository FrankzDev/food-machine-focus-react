import { Box } from "@mui/system";
import { useEffect, useState } from "react";

export const Countdown = ({ time, item }) => {

    const [ over, setOver ] = useState(false);
    const [ seconds, setTime ] = useState(time);

    const tick = () => {
        if(over) return;
        if(seconds === 0){
            setOver(true);
        } else if (seconds > 0){
            setTime(seconds - 1);
            item.preparation_time = seconds - 1;
        }
    };

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
            return () => clearInterval(timerID);
    });

    return(
        <Box>
            <div>{!over ? `${seconds}s` : 'Dispatched!'}</div>
        </Box>
    )
}
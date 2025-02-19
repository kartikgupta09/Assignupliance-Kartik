import { useState } from "react";
import { Button, Typography, Box } from "@mui/material";

export default function CounterComponent() {
  const [counter, setCounter] = useState(0);

  const onIncrementClick = () => setCounter((c) => c + 1);
  const onDecrementClick = () => counter > 0 && setCounter((c) => c - 1);
  const onReset = () => setCounter(0);
  const getColor = () => {
    if (counter === 0) return "transparent"; // No color when count is 0
    const red = Math.min(255, counter * 10);
    const green = Math.min(255, 255 - counter * 5);
    const blue = Math.min(255, counter * 7);
    return `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <Box textAlign="center" sx={{ p: 3 }}>
      <Typography style={{backgroundColor:getColor()}}variant="h3" gutterBottom>
        Counter: {counter}
      </Typography>
      <Button variant="contained" color="success" onClick={onIncrementClick} sx={{ m: 1 }}>
        Increment
      </Button>
      <Button variant="outlined" color="error" onClick={onDecrementClick} sx={{ m: 1 }}>
        Decrement
      </Button>
      <Button variant="contained" color="warning" onClick={onReset} sx={{ m: 1 }}>
        Reset
      </Button>
    </Box>
  );
}

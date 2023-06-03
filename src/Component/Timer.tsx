import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

type CountdownProps = {
  marginRight: any;
  hours: number;
  minutes?: number;
  seconds?: number;
  onCountdownEnd?: () => void;
};

const Timer = ({
  hours,
  minutes = 0,
  seconds = 0,
  onCountdownEnd,
  marginRight,
}: CountdownProps) => {
  const [remainingTime, setRemainingTime] = useState(
    hours * 60 * 60 + minutes * 60 + seconds
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (remainingTime === 0 && onCountdownEnd) {
      onCountdownEnd();
    }
  }, [remainingTime, onCountdownEnd]);

  const remainingHours = Math.floor(remainingTime / 3600);
  const remainingMinutes = Math.floor((remainingTime % 3600) / 60);
  const remainingSeconds = remainingTime % 60;

  return (
    <Box sx={{ mr: marginRight }}>
      <Typography
        component={"h4"}
        variant={"h4"}
        sx={{ color: "#1976d2", fontWeight: 700, fontSize: { xs: "20px" } }}
      >{`Discount finished in ${remainingHours} : ${remainingMinutes}: ${remainingSeconds}`}</Typography>
    </Box>
  );
};

export default Timer;

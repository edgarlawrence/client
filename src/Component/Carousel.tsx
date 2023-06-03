import React from "react";
import { Paper, Box } from "@mui/material";

interface Props {
  data: { images: string };
}

const CarouselComponent: React.FC<Props> = ({ data }) => {
  return (
    <Paper sx={{ display: "flex", justifyContent: "center", p: 5 }}>
      <Box
        component="img"
        src={data.images}
        alt={data.images}
        sx={{ width: { xs: "30rem", md: "25rem" } }}
      />
    </Paper>
  );
};

export default CarouselComponent;

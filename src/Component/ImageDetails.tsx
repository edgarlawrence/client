import React from "react";
import { Paper, Box } from "@mui/material";
import ImageGallery from "react-image-gallery";

interface Props {
  data: any;
}

const ImageDetails: React.FC<Props> = ({ data }) => {
  return (
    <Box
      component="div"
      sx={{ width: { xs: "15rem", md: "30rem" }, mx: "auto" }}
    >
      <ImageGallery items={data} showPlayButton={false} showNav={false} />
    </Box>
  );
};

export default ImageDetails;

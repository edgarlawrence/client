import React, { useState } from "react";
import Layout from "../Component/Layout";
import ImageDetails from "../Component/ImageDetails";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const variants = [
  {
    id: 1,
    title: "blue",
    color: "#2196f3",
  },
  {
    id: 2,
    title: "red",
    color: "#f44336",
  },
  {
    id: 3,
    title: "yellow",
    color: "#ffee58",
  },
];

const sizes = [
  {
    title: "S",
    value: "S",
  },
  {
    title: "M",
    value: "M",
  },
  {
    title: "L",
    value: "L",
  },
  {
    title: "XL",
    value: "XL",
  },
];

const Details = () => {
  const [colors, setColors] = useState("#2196f3");
  const [activeItemId, setActiveItemId] = useState<number | null>(1);
  const [size, setSize] = React.useState<string | number>("S");
  const [open, setOpen] = React.useState(false);

  const variantHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColors((e.target as HTMLInputElement).value);
    console.log((e.target as HTMLInputElement).value);
  };

  const handleItemClick = (itemId: number) => {
    setActiveItemId(itemId);
  };

  const handleChange = (event: SelectChangeEvent<typeof size>) => {
    setSize(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Layout>
      <Grid container sx={{ px: { xs: 3, md: 10 }, py: 10 }}>
        <Grid item xs={12} md={6}>
          <ImageDetails data={images} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            className="title"
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <h1> Kaos Upper Streetwear </h1>
          </Box>
          <Box
            className="variant-type"
            sx={{
              display: "flex",
            }}
          >
            <FormControl>
              <FormLabel
                id="demo-controlled-radio-buttons-group"
                sx={{ color: "black", pl: { xs: 2, md: 0 } }}
              >
                Color
              </FormLabel>
              <Box
                className="variant-list"
                sx={{
                  display: "flex",
                  flexWrap: { xs: "wrap", md: "nowrap" },
                  justifyContent: { xs: "center" },
                }}
              >
                {variants.map((item, index) => (
                  <RadioGroup
                    key={index}
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={colors}
                    onChange={variantHandler}
                  >
                    <Box
                      sx={{
                        border: 1,
                        backgroundColor:
                          item.id === activeItemId ? "lightgrey" : "white",
                        borderColor: "transparent",
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "15px",
                        px: 3,
                        py: 2,
                        m: 1,
                      }}
                      onClick={() => handleItemClick(item.id)}
                    >
                      <Box>
                        <FormControlLabel
                          value={item.color}
                          control={<Radio sx={{ display: "none" }} />}
                          label={item.title}
                        />
                      </Box>
                      <Box
                        sx={{
                          backgroundColor: `${item.color}`,
                          width: 25,
                          height: 25,
                          borderRadius: "15px",
                        }}
                      />
                    </Box>
                  </RadioGroup>
                ))}
              </Box>
            </FormControl>
          </Box>
          <Box
            className="size"
            sx={{
              mt: 3,
              display: { xs: "flex", md: "block" },
              justifyContent: "center",
            }}
          >
            <FormControl sx={{ m: 1, width: { xs: "100%", md: "45%" } }}>
              <InputLabel id="demo-controlled-open-select-label">
                Size
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={size}
                label="Size"
                onChange={handleChange}
              >
                <MenuItem value="" disabled>
                  <em>Pilih Ukuran Anda</em>
                </MenuItem>
                {sizes.map((item, index) => (
                  <MenuItem key={index} value={item.value}>
                    {item.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box
            className="desc"
            sx={{ mt: 3, width: { xs: "20rem", md: "25rem" } }}
          >
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Deskripsi</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box className="addToCart" sx={{ mt: 3 }}>
            <Button
              sx={{ width: { xs: "100%", md: "46%" } }}
              variant="contained"
              startIcon={<ShoppingCartCheckoutIcon />}
            >
              Add to Cart
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Details;

import React, { useState } from "react";
import Card from "../Component/Card";
import CarouselComponent from "../Component/Carousel";
import Carousel from "react-material-ui-carousel";
import SlideOne from "../Assets/695.jpg";
import SlideTwo from "../Assets/5464026.jpg";
import SlideThree from "../Assets/female_shopping_from_phone_04.jpg";
import { Box, Grid } from "@mui/material";
import Timer from "../Component/Timer";
import Layout from "../Component/Layout";

const Items = [
  {
    images: SlideOne,
  },
  {
    images: SlideTwo,
  },
  {
    images: SlideThree,
  },
];

const Home = () => {
  const [count] = useState<number>(4);
  const [visible, setVisible] = useState<boolean>(true);
  const [likes, setLikes] = useState<boolean>(false);
  const [cartCount, setCartCount] = useState<number>(0);

  const handleCountdownEnd = () => {
    console.log("Countdown ended!");
    setVisible(false);
  };

  const handleLikes = (e: MouseEvent) => {
    console.log(e);
    setLikes((prevLike) => !prevLike);
  };

  const handleCartCounter = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <Layout cartNumber={cartCount}>
      <div style={{ padding: 10 }}>
        <div style={{ padding: 50 }}>
          <Carousel>
            {Items.map((item, index) => (
              <CarouselComponent key={index} data={item} />
            ))}
          </Carousel>
        </div>
        <Box className="latest-sections">
          <Grid
            item
            xs={12}
            className="title"
            sx={{
              backgroundColor: "#1976d2",
              color: "white",
              width: "20rem",
              ml: { xs: 0, md: 6 },
              borderTopRightRadius: "40px",
              borderBottomRightRadius: "40px",
              textAlign: { xs: "center", md: "right" },
              pr: 5,
              py: "1px",
              my: 3,
            }}
          >
            <h1> Yang Terbaru</h1>
          </Grid>
          <Grid container justifyContent="center" className="card-component">
            {Array.from({ length: count }).map((_, index) => (
              <Card
                key={index}
                discounted={false}
                like={likes}
                cartCTA={handleCartCounter}
                likeCTA={handleLikes}
              />
            ))}
          </Grid>
        </Box>
        <Box className="top-sections">
          <Grid
            className="title"
            item
            xs={12}
            sx={{
              backgroundColor: "#1976d2",
              color: "white",
              width: "20rem",
              ml: { xs: 0, md: 6 },
              borderTopRightRadius: "40px",
              borderBottomRightRadius: "40px",
              textAlign: { xs: "center", md: "right" },
              pr: 5,
              py: "1px",
              my: 3,
            }}
          >
            <h1> Sedang Trending </h1>
          </Grid>
          <Grid container justifyContent="center" className="card-component">
            {Array.from({ length: count }).map((_, index) => (
              <Card key={index} discounted={false} like={likes} />
            ))}
          </Grid>
        </Box>
        <Box
          className="discount-sections"
          sx={{
            display: visible ? "block" : "none",
          }}
        >
          <Box
            className="flash-column"
            sx={{
              display: { xs: "block", md: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid
              className="title"
              item
              xs={12}
              sx={{
                backgroundColor: "#1976d2",
                color: "white",
                width: "20rem",
                ml: { xs: 0, md: 6 },
                borderTopRightRadius: "40px",
                borderBottomRightRadius: "40px",
                textAlign: { xs: "center", md: "right" },
                pr: 5,
                py: "1px",
                my: 3,
              }}
            >
              <h1> Discounted Stuff </h1>
            </Grid>
            <Box
              className="timers"
              sx={{
                mr: { xs: 0, md: 23 },
                textAlign: { xs: "center", md: "right" },
              }}
            >
              <Timer
                hours={3}
                minutes={0}
                seconds={0}
                onCountdownEnd={handleCountdownEnd}
                marginRight="0"
              />
            </Box>
          </Box>
          <Grid
            container
            justifyContent="center"
            sx={{ display: "flex", justifyContent: "center" }}
            className="card-component"
          >
            {Array.from({ length: count }).map((_, index) => (
              <Card key={index} discounted={true} />
            ))}
          </Grid>
        </Box>
      </div>
    </Layout>
  );
};

export default Home;

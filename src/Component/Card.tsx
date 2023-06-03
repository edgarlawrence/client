import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ImgCard from "../Assets/sabun-colek.png";
import { Button, CardActions } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface Props {
  discounted: boolean;
  like?: boolean;
  likeCTA?: any;
  cartCTA?: any;
}

const BasicCard: React.FC<Props> = ({ discounted, like, likeCTA, cartCTA }) => {
  return (
    <Card
      sx={{ maxWidth: 275, border: 1, borderColor: "lightgrey", m: 2, p: 1 }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <Box component="img" src={ImgCard} sx={{ width: "15rem" }} />
        <Typography
          component="h4"
          sx={{ fontSize: 20, textAlign: "left" }}
          color="text.primary"
          gutterBottom
        >
          Sabun Colek
        </Typography>
      </CardContent>
      <Box
        className="card-details"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 2,
        }}
      >
        {discounted === true ? (
          <Box sx={{ width: "4rem", display: "flex" }}>
            <Typography
              component="h4"
              sx={{
                fontSize: 15,
                color: "#E35C29",
                fontWeight: 700,
                textDecoration: "line-through",
                mx: 1,
              }}
              color="text.primary"
              gutterBottom
            >
              $ 5
            </Typography>
            <Typography
              component="h4"
              sx={{ fontSize: 15, color: "#E35C29", fontWeight: 700 }}
              color="text.primary"
              gutterBottom
            >
              $ 3
            </Typography>
          </Box>
        ) : (
          <Typography
            component="h4"
            sx={{ fontSize: 15, color: "#E35C29", fontWeight: 700 }}
            color="text.primary"
            gutterBottom
          >
            $ 5
          </Typography>
        )}
        <Typography
          component="h4"
          sx={{ fontSize: 15, color: "#6829E3", fontWeight: 700 }}
          color="text.primary"
          gutterBottom
        >
          Stock: 50
        </Typography>
      </Box>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={likeCTA} variant="outlined">
          {like === false ? <FavoriteBorderIcon /> : <FavoriteIcon />}
        </Button>
        <Button
          size="small"
          variant="contained"
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "9rem",
            height: "2rem",
          }}
          onClick={cartCTA}
        >
          <AddShoppingCartIcon fontSize="small" />
          <Typography component="span" sx={{ fontSize: "11px" }}>
            {" "}
            Add To Cart
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default BasicCard;

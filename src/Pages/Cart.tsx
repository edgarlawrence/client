import React from "react";
import Layout from "../Component/Layout";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";
import ImgCard from "../Assets/sabun-colek.png";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const deliveries = [
  { id: 0, label: "Reguler", price: 10 },
  { id: 1, label: "Kilat", price: 50 },
];

const paymentsss = [
  { id: 0, label: "BCA" },
  { id: 1, label: "BRI" },
  { id: 2, label: "Mandiri" },
];

const Cart = () => {
  const [carts, setCarts] = React.useState<boolean>(true);
  const [count, setCount] = React.useState<number[] | any>(2);
  const [quantities, setQuantities] = React.useState<number>(1);
  const [delivery, setDelivery] = React.useState<string | number>("");
  const [payment, setPayment] = React.useState<string | number>("");
  const [paymentPrice, setPaymentPrice] = React.useState<number>(0);
  const [openDelivery, setOpenDelivery] = React.useState(false);
  const [openPayment, setOpenPayment] = React.useState(false);

  const handleChange = (event: SelectChangeEvent<typeof delivery>) => {
    setDelivery(event.target.value);
    const index = deliveries.findIndex((obj) => obj.id === event.target.value);
    if (index !== -1) {
      const matchedObject = deliveries[index];
      setPaymentPrice(matchedObject.price);
      console.log(` ${matchedObject.price}`);
    } else {
      console.log(`No object with id found.`);
    }
    console.log("payment", index);
  };

  const handleChangePayment = (event: SelectChangeEvent<typeof payment>) => {
    setPayment(event.target.value);
  };

  const handleClose = () => {
    setOpenDelivery(false);
  };

  const handleOpen = () => {
    setOpenDelivery(true);
  };

  const handleClosePayment = () => {
    setOpenPayment(false);
  };

  const handleOpenPayment = () => {
    setOpenPayment(true);
  };

  const PlusQuantityHandler = () => {
    setQuantities(quantities + 1);
  };

  const MinusQuantityHandler = () => {
    setQuantities(quantities - 1);

    if (quantities <= 0) setQuantities(0);
  };

  const RemoveItem = (id: number | any) => {};

  return (
    <Layout>
      {carts === false ? (
        <p> No Carts</p>
      ) : (
        <Grid container>
          <Grid item xs={12} md={7} sx={{ p: "2.5rem" }}>
            <Box className="cart-items-container">
              <Box component={"div"} className="div">
                <Typography variant={"h4"} textAlign={"center"} sx={{ p: 3 }}>
                  Cart
                </Typography>
              </Box>

              {Array.from({ length: count }).map((_, index) => (
                <div className="main" key={index}>
                  <Box
                    className="cart-items-list"
                    sx={{
                      display: "flex",
                      p: "1rem",
                      flexWrap: { xs: "wrap", md: "nowrap" },
                      justifyContent: { xs: "center" },
                    }}
                  >
                    <Box className="images" sx={{ paddingTop: "3rem" }}>
                      <Box
                        component="img"
                        src={ImgCard}
                        alt={ImgCard}
                        sx={{ width: "10rem" }}
                      />
                    </Box>
                    <Box
                      className="details"
                      sx={{
                        display: { xs: "block", md: "flex" },
                        justifyContent: "space-between",
                        padding: 5,
                        width: "60rem",
                        textAlign: { xs: "center", md: "left" },
                      }}
                    >
                      <div className="left">
                        <Box className="title">
                          <h3
                            style={{
                              letterSpacing: "1px",
                              fontWeight: 700,
                            }}
                          >
                            {" "}
                            Sabun Cuci Piring{" "}
                          </h3>
                        </Box>
                        <Box className="info">
                          <p style={{ fontSize: "15px" }}>
                            {" "}
                            Size:{" "}
                            <Typography
                              component="span"
                              sx={{
                                fontSize: "13px",
                                border: 1,
                                borderRadius: "70%",
                                p: 1,
                                backgroundColor: "#42a5f5",
                                color: "white",
                                ml: 3,
                              }}
                            >
                              XL
                            </Typography>
                          </p>
                          <Typography
                            component={"span"}
                            sx={{
                              fontSize: "15px",
                              paddingTop: 10,
                              textAlign: { xs: "center", md: "left" },
                            }}
                          >
                            {" "}
                            Color:{" "}
                          </Typography>
                          <Box
                            className="colors"
                            sx={{
                              width: "40px",
                              height: "25px",
                              backgroundColor: "green",
                              ml: 2,
                              borderRadius: "5px",
                              mx: { xs: "auto", md: "0" },
                            }}
                          ></Box>
                        </Box>
                      </div>
                      <div className="Center" style={{ marginTop: 40 }}>
                        <p style={{ fontSize: "15px" }}>Quantity:</p>
                        <div className="quantity-setup">
                          <IconButton
                            onClick={MinusQuantityHandler}
                            aria-label="delete"
                          >
                            <RemoveIcon />
                          </IconButton>
                          <Typography component="span" sx={{ mx: 3 }}>
                            {quantities}
                          </Typography>
                          <IconButton
                            onClick={PlusQuantityHandler}
                            aria-label="delete"
                          >
                            <AddIcon />
                          </IconButton>
                        </div>

                        <Typography component="span" sx={{ ml: 1 }}>
                          $ {125 * quantities}
                        </Typography>
                      </div>
                      <div className="right" style={{ marginTop: 40 }}>
                        <Box>
                          <IconButton
                            aria-label="delete"
                            onClick={() => RemoveItem(index)}
                          >
                            <DeleteIcon sx={{ color: "red" }} />{" "}
                            <Typography
                              component={"span"}
                              variant="h6"
                              sx={{ color: "red", fontSize: "15px" }}
                            >
                              {" "}
                              Remove Item{" "}
                            </Typography>
                          </IconButton>
                        </Box>
                      </div>
                    </Box>
                  </Box>
                  <Divider />
                </div>
              ))}
            </Box>
          </Grid>
          <div
            style={{
              borderLeft: "1px solid lightgrey",
              height: 700,
              margin: 40,
            }}
          ></div>
          <Grid item xs={12} md={4} sx={{ p: "2.5rem" }}>
            <Box component={"div"} className="title">
              <Typography variant={"h4"} textAlign={"center"} sx={{ p: 3 }}>
                Payment
              </Typography>
            </Box>
            <Box
              component="div"
              className="delivery"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <FormControl sx={{ m: 1, minWidth: 300 }}>
                <InputLabel id="demo-controlled-open-select-label">
                  Shipping
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={openDelivery}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={delivery}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {deliveries.map((item, index) => (
                    <MenuItem key={index} value={item.id}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box
              component="div"
              className="payment"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <FormControl sx={{ m: 1, minWidth: 300 }}>
                <InputLabel id="demo-controlled-open-select-label-payment">
                  Payment
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label-payment"
                  id="demo-controlled-open-select"
                  open={openPayment}
                  onClose={handleClosePayment}
                  onOpen={handleOpenPayment}
                  value={payment}
                  label="Payment"
                  onChange={handleChangePayment}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {paymentsss.map((item, index) => (
                    <MenuItem key={index} value={item.id}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box
              component={"div"}
              className="totals"
              sx={{ textAlign: "center" }}
            >
              <Box component="div" className="shipping-res" sx={{ m: 5 }}>
                <Typography component={"span"} sx={{ fontSize: "30px" }}>
                  {" "}
                  Shipping
                </Typography>{" "}
                <br />
                <Typography component={"span"} sx={{ fontSize: "30px" }}>
                  {" "}
                  {paymentPrice}
                </Typography>
              </Box>
              <Box component="div" className="item-res" sx={{ m: 5 }}>
                <Typography component={"span"} sx={{ fontSize: "30px" }}>
                  {" "}
                  Total
                </Typography>{" "}
                <br />
                <Typography component={"span"} sx={{ fontSize: "30px" }}>
                  {" "}
                  $ {125 + paymentPrice}
                </Typography>
              </Box>
              <Box component="div" className="pay-btn" sx={{ m: 1 }}>
                <Button variant="contained" sx={{ width: "18rem" }}>
                  {" "}
                  Pay{" "}
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}
    </Layout>
  );
};

export default Cart;

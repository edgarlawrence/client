import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#1976D2" }}>
      <Grid
        item
        xs={12}
        sx={{
          display: { xs: "block", md: "flex" },
          justifyContent: "space-around",
          py: 5,
          mt: 5,
        }}
      >
        <Grid item xs={12} md={4} className="first-list">
          <List>
            <Typography variant="h6" sx={{ fontWeight: 700, color: "white" }}>
              {" "}
              About Us
            </Typography>
            <ListItem style={{ paddingTop: 0, paddingBottom: 0, margin: 0 }}>
              <Link href="#" underline="none" sx={{ color: "white" }}>
                <ListItemText>Our Story </ListItemText>
              </Link>
            </ListItem>
            <ListItem style={{ paddingTop: 0, paddingBottom: 0, margin: 0 }}>
              <Link href="#" underline="none" sx={{ color: "white" }}>
                <ListItemText> Vision & Mission </ListItemText>
              </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={4} className="second-list">
          <List sx={{ color: "white" }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: "white" }}>
              {" "}
              Categories
            </Typography>
            <ListItem style={{ paddingTop: 0, paddingBottom: 0, margin: 0 }}>
              <Link href="#" underline="none" sx={{ color: "white" }}>
                <ListItemText> Beauty </ListItemText>
              </Link>
            </ListItem>
            <ListItem style={{ paddingTop: 0, paddingBottom: 0, margin: 0 }}>
              <Link href="#" underline="none" sx={{ color: "white" }}>
                <ListItemText> Hobbies </ListItemText>
              </Link>
            </ListItem>
            <ListItem style={{ paddingTop: 0, paddingBottom: 0, margin: 0 }}>
              <Link href="#" underline="none" sx={{ color: "white" }}>
                <ListItemText> Home Applicance </ListItemText>
              </Link>
            </ListItem>
            <ListItem style={{ paddingTop: 0, paddingBottom: 0, margin: 0 }}>
              <Link href="#" underline="none" sx={{ color: "white" }}>
                <ListItemText> Clothes </ListItemText>
              </Link>
            </ListItem>
            <ListItem style={{ paddingTop: 0, paddingBottom: 0, margin: 0 }}>
              <Link href="#" underline="none" sx={{ color: "white" }}>
                <ListItemText> Others </ListItemText>
              </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={4} className="third-list">
          <List sx={{ color: "white" }}>
            <ListItem>
              <ListItemText>
                233 North Rockaway Avenue Basking Ridge, NJ 07920{" "}
              </ListItemText>
            </ListItem>
            <ListItem>
              <Link href="#" underline="none" sx={{ color: "white" }}>
                <ListItemText> John Doe: 619-571-7766 </ListItemText>
              </Link>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

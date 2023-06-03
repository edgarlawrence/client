import React from "react";
import { Grid, Typography } from "@mui/material";
import Filter from "../Component/Filter";
import Card from "../Component/Card";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const Search = () => {
  const [count] = React.useState(6);
  const [page, setPage] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div>
      <Grid
        container
        justifyContent={"center"}
        sx={{
          mt: 5,
        }}
      >
        <Grid item xs={2}>
          <Filter />
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {Array.from({ length: count }).map((_, index) => (
            <Card key={index} discounted={false} />
          ))}
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center", py: 5 }}
        >
          <Stack spacing={2}>
            <Pagination count={10} page={page} onChange={handleChange} />
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

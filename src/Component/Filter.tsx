import React from "react";
import { Box, Slider, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

interface CheckData {
  highCheck: boolean;
  lowCheck: boolean;
}

interface LocationInterface {
  jabodetabek: boolean;
  jawa: boolean;
  others: boolean;
}

const Filter = () => {
  const [value, setValue] = React.useState<number>(30);
  const [checkes, setCheckes] = React.useState<CheckData>({
    highCheck: false,
    lowCheck: false,
  });

  const [loc, setLoc] = React.useState<LocationInterface>({
    jabodetabek: false,
    jawa: false,
    others: false,
  });

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, checked } = event.target;

    const updateCheck = { ...checkes };

    updateCheck[name as keyof typeof updateCheck] = checked;

    if (name === "highCheck" && checked && updateCheck.lowCheck) {
      updateCheck.lowCheck = false;
    } else if (name === "lowCheck" && checked && updateCheck.highCheck) {
      updateCheck.highCheck = false;
    }

    setCheckes(updateCheck);
  };

  const handleLoc = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, checked } = event.target;

    const updateLoc = { ...loc };

    updateLoc[name as keyof typeof updateLoc] = checked;

    if (name === "jabodetabek" && checked) {
      updateLoc.jawa = false;
      updateLoc.others = false;
    } else if (name === "jawa" && checked) {
      updateLoc.jabodetabek = false;
      updateLoc.others = false;
    } else if (name === "others" && checked) {
      updateLoc.jabodetabek = false;
      updateLoc.jawa = false;
    }

    setLoc(updateLoc);
  };

  console.log("update check", loc);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          border: 1,
          borderColor: "lightgrey",
          borderRadius: "15px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            borderColor: "black",
          }}
          style={{
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        >
          <Typography
            variant="h6"
            component="p"
            sx={{
              py: "10px",
              backgroundColor: "#1976d2",
              color: "white",
              borderColor: "black",
              textAlign: "center",
              fontWeight: 700,
            }}
            style={{
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}
          >
            Filter
          </Typography>
        </Box>
        <Box
          className="filter-content"
          sx={{
            p: 3,
          }}
        >
          <Typography variant="h6" component="p" sx={{ pl: "20px" }}>
            {" "}
            Price{" "}
          </Typography>
          <Box
            className="sliders"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <p style={{ padding: 10 }}> 0 </p>
            <Slider aria-label="Volume" value={value} onChange={handleChange} />
            <p style={{ padding: 10 }}> 100 </p>
          </Box>
          <Box className="check-group">
            <Box className="check">
              <Checkbox
                name="highCheck"
                checked={checkes.highCheck}
                onChange={handleCheck}
                inputProps={{ "aria-label": "controlled" }}
              />
              <label> Harga Tertinggi </label>
            </Box>
            <Box className="check">
              <Checkbox
                name="lowCheck"
                checked={checkes.lowCheck}
                onChange={handleCheck}
                inputProps={{ "aria-label": "controlled" }}
              />
              <label> Harga Tertinggi </label>
            </Box>
          </Box>
          <Box className="check-group-loc">
            <Typography
              variant="h6"
              component="p"
              sx={{ pl: "20px", py: "10px" }}
            >
              Location
            </Typography>
            <Box className="check">
              <Checkbox
                name="jabodetabek"
                checked={loc.jabodetabek}
                onChange={handleLoc}
                inputProps={{ "aria-label": "controlled" }}
              />
              <label> Jabodetabek </label>
            </Box>
            <Box className="check">
              <Checkbox
                name="jawa"
                checked={loc.jawa}
                onChange={handleLoc}
                inputProps={{ "aria-label": "controlled" }}
              />
              <label> Jawa </label>
            </Box>
            <Box className="check">
              <Checkbox
                name="others"
                checked={loc.others}
                onChange={handleLoc}
                inputProps={{ "aria-label": "controlled" }}
              />
              <label> Luar Pulau Jawa </label>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Filter;

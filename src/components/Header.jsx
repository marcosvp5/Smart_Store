import styled from "@emotion/styled";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Divider,
  Rating,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { fakeData } from "./fakeData";
import "animate.css";
const StyledCard = styled(CardMedia)(({ theme }) => ({
  maxWidth: "610px",
  boxShadow: "none",
  display: "flex",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: "25px",
  transition: "all .25s ease-out",

  "&:hover": {
    color: "grey",
    transform: "rotate(-1deg)",
  },
}));

const StyledTypography2 = styled(Typography)(({ theme }) => ({
}));

const image = fakeData[Math.floor(Math.random() * 5 + 1)];
const Header = () => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <Box sx={{ display: "flex", justifyContent: "center", pt: "50px" }}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          className="animate__animated animate__fadeInDown "
        >
          <Stack spacing={1} sx={{ m: 2 }}>
            <Rating
              sx={{ position: "relative" }}
              name="read-only"
              value={4}
              readOnly
            />
            <StyledTypography2
              sw={{ position: "relative"}}
              variant="h3"
            >
              {image.marca}
            </StyledTypography2>
            <StyledTypography variant="h3">{image.name}</StyledTypography>
          </Stack>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#8d69d4",
              "&:hover": {
                backgroundColor: "#633fa4",
              },
              width: "60%",
              minWidth: "50%",
            }}
          >
            Buy NOW!
          </Button>
        </Box>

        <StyledCard
          className="animate__animated animate__fadeInDown "
          component="img"
          height="500"
          image={image.image}
          alt="green iguana"
          sx={{
            borderRadius: "15px",
          }}
        />
      </Box>
      <Divider
        sx={{
          mx: "auto",
          width: "40vw",
        }}
      />
    </Box>
  );
};

export default Header;

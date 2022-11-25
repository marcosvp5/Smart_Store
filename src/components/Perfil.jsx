import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

import Typography from "@mui/material/Typography";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Avatar,
  Box,
  Collapse,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  styled,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import Sidebar from "./Sidebar";

const StyledTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  position: "relative",
  bottom: "250px",
  left: "90px",
}));

const Perfil = () => {
  const user = useSelector((state) => state.user);
  const [open, setOpen] = useState(true);
  const [anotherOper, setAnotherOper] = useState(true);

  const secondHandleClick = () => {
    setAnotherOper(!open);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Sidebar />
      <Box
        component="img"
        sx={{
          width: "1150px",
          marginLeft: "220px",
          height: 250,
          paddingTop: "-5px",
          backgroundColor: "primary.dark",
        }}
        src="https://i.ibb.co/YcDHmT4/Captura-desde-2022-08-29-12-46-55.png"
        alt="The house from the offer."
      ></Box>
      <StyledTypography variant="h3" color="initial">
        Welcome!
      </StyledTypography>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-around"
        sx={{ marginLeft: "150px" }}
      >
        <List>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Favoritos:" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem>
                <ListItemText primary="Single-line item" />
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              <Divider />
            </List>
          </Collapse>
        </List>

        <List>
          <ListItemButton onClick={secondHandleClick}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Favoritos:" />
            {anotherOper ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={anotherOper} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem>
                <ListItemText primary="Single-line item" />
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              <Divider />
            </List>
          </Collapse>
        </List>
      </Stack>
    </>
  );
};

export default Perfil;

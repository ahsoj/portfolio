import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { styled, useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

let drawerWidth = 250;

export const SideBar = ({ ...props }) => {
  const { open, handleDrawerClose, navLink } = props;
  const theme = useTheme();
  return (
    <Drawer
      sx={{
        display: { md: "none", xs: "flex" },
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <Link href="/" style={{ alignSelf: "center", flex: 1 }}>
          <Image
            priority
            src="/image/logo.png"
            width={70}
            height={40}
            alt="allIn-logo"
          />
        </Link>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {navLink.map((text: string | null, index: React.Key | null) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={handleDrawerClose}>
              <ListItemText
                sx={{ textTransform: "capitalize" }}
                primary={text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

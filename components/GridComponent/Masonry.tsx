import * as React from "react";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { itemData } from "../../utils/masonryItem";
import { CardMedia, ImageList, ImageListItem } from "@mui/material";
export default function MasonryImageList() {
  const mediaQuery = useMediaQuery("(min-width:800px)");
  return (
    <Box
      sx={{
        width: 1 / 1,
        height: 1 / 1,
        overflowY: "hidden",
      }}
    >
      <ImageList
        sx={{
          overflowY: "hidden",
        }}
        variant="masonry"
        cols={mediaQuery ? 6 : 4}
        gap={4}
      >
        {itemData.map((item: any) => (
          <ImageListItem key={item.id}>
            <CardMedia component="img" image={item.img} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

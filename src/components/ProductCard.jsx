import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { getProductSlug } from "../utils/getProductSlug";

const ProductCard = ({ product }) => {
  const getProductType = (product) =>
    product.itemprops?.[0]
      ? `${product.itemprops[0].label}: ${product.itemprops[0].value}`
      : product.category;

  return (
    <Card
      component={RouterLink}
      to={`/products/${getProductSlug(product.itemname)}`}
      sx={{
        bgcolor: "precision.surfaceContainerLowest",
        borderRadius: 2,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
        color: "inherit",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
        textDecoration: "none",
        transition: "transform 180ms ease, box-shadow 180ms ease",
        "&:hover": {
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.08)",
          transform: "translateY(-3px)",
        },
        "&:focus-visible": {
          boxShadow: "0 0 0 3px rgba(0, 53, 95, 0.22)",
          outline: "none",
        },
        "&:hover .product-image": {
          transform: "scale(1.05)",
        },
      }}
    >
      <Box
        sx={{
          aspectRatio: "4 / 3",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <CardMedia
          className="product-image"
          component="img"
          image={product.image}
          alt={`${product.itemname} product image`}
          sx={{
            height: "100%",
            objectFit: "cover",
            transition: "transform 500ms ease",
            width: "100%",
          }}
        />
      </Box>
      <CardContent
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          p: 3,
          "&:last-child": {
            pb: 3,
          },
        }}
      >
        <Typography
          component="h3"
          variant="h3"
          sx={{
            fontSize: 18,
            lineHeight: 1.35,
            mb: 0.5,
          }}
        >
          {product.itemname}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "precision.outline",
          }}
        >
          {getProductType(product)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

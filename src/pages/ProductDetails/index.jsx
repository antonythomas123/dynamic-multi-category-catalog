import {
  Box,
  Chip,
  Container,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink, Navigate, useParams } from "react-router-dom";
import { products } from "../../data/products";
import { getProductSlug } from "../../utils/getProductSlug";

const ProductDetails = () => {
  const { slug } = useParams();

  const product = products.find(
    (item) => getProductSlug(item.itemname) === slug,
  );

  if (!product) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container
      maxWidth="lg"
      sx={{
        px: { xs: 2, sm: 3 },
        py: { xs: 4, md: 7 },
      }}
    >
      <Box sx={{ mb: 3 }}>
        <Link
          component={RouterLink}
          to="/"
          underline="none"
          sx={{
            alignItems: "center",
            color: "primary.main",
            display: "inline-flex",
            fontWeight: 600,
            gap: 1,
            transition: "gap 180ms ease",
            "&:hover": {
              gap: 1.5,
            },
          }}
        >
          <Box component="span" sx={{ fontSize: 20, lineHeight: 1 }}>
            &larr;
          </Box>
          Back to Catalog
        </Link>
      </Box>

      <Box
        component="section"
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: { xs: "1fr", lg: "repeat(12, 1fr)" },
        }}
      >
        <Box
          sx={{
            bgcolor: "precision.surfaceContainerLowest",
            border: 1,
            borderColor: "rgba(194, 199, 209, 0.3)",
            borderRadius: 3,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
            gridColumn: { lg: "span 7" },
            minHeight: { xs: 320, md: 500 },
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={product.image}
            alt={`${product.itemname} product image`}
            sx={{
              display: "block",
              height: { xs: 320, md: 500 },
              objectFit: "cover",
              width: "100%",
            }}
          />
        </Box>

        <Stack
          sx={{
            alignSelf: "stretch",
            bgcolor: "rgba(239, 244, 255, 0.5)",
            border: 1,
            borderColor: "rgba(194, 199, 209, 0.2)",
            borderRadius: 3,
            gridColumn: { lg: "span 5" },
            justifyContent: "center",
            p: { xs: 3, md: 4 },
          }}
          spacing={3}
        >
          <Box>
            <Chip
              label={product.category}
              sx={{
                bgcolor: "precision.secondaryFixed",
                color: "precision.onSecondaryFixedVariant",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.05em",
                mb: 2,
                textTransform: "uppercase",
              }}
            />
            <Typography
              component="h1"
              variant="h1"
              sx={{
                color: "primary.main",
                fontSize: { xs: 36, md: 48 },
                letterSpacing: 0,
                mb: 1,
              }}
            >
              {product.itemname}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gap: 1.5,
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
              },
            }}
          >
            {product.itemprops?.map((property) => (
              <Box
                key={`${property.label}-${property.value}`}
                sx={{
                  bgcolor: "precision.surfaceContainerLowest",
                  border: 1,
                  borderColor: "rgba(194, 199, 209, 0.45)",
                  borderRadius: 2,
                  p: 2,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "precision.outline",
                    fontWeight: 700,
                    mb: 0.5,
                  }}
                >
                  {property.label}
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    color: "precision.onSurface",
                    fontSize: 20,
                  }}
                >
                  {property.value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default ProductDetails;

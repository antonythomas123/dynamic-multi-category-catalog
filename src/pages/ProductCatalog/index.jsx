import {
  Box,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { products } from "../../data/products";
import ProductCard from "../../components/ProductCard";

const productsByCategory = products.reduce((sections, product) => {
  const existingSection = sections.find(
    (section) => section.category === product.category,
  );

  if (existingSection) {
    existingSection.products.push(product);
    return sections;
  }

  return [
    ...sections,
    {
      category: product.category,
      products: [product],
    },
  ];
}, []);

const ProductSection = ({ section }) => (
  <Box component="section" sx={{ mb: { xs: 7, md: 10 } }}>
    <Stack
      sx={{
        borderLeft: 4,
        borderColor: "secondary.main",
        mb: { xs: 3, md: 4 },
        pl: 3,
      }}
    >
      <Typography
        component="h2"
        variant="h2"
        sx={{
          color: "primary.main",
          fontSize: { xs: 28, md: 36 },
        }}
      >
        {section.category}
      </Typography>
    </Stack>
    <Box
      id={section.category.toLowerCase()}
      sx={{
        display: "flex",
        gap: 3,
        overflowX: "auto",
        overflowY: "hidden",
        pb: 1,
        scrollPaddingInline: { xs: 16, sm: 24 },
        scrollSnapType: "x proximity",
        scrollbarWidth: "none",
        WebkitOverflowScrolling: "touch",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {section.products.map((product) => (
        <Box
          key={product.itemname}
          sx={{
            flex: "0 0 auto",
            scrollSnapAlign: "start",
            width: {
              xs: "min(82vw, 320px)",
              sm: 300,
              md: 310,
            },
          }}
        >
          <ProductCard product={product} />
        </Box>
      ))}
    </Box>
  </Box>
);

const ProductCatalog = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: 1280,
        px: { xs: 2, sm: 3 },
        py: { xs: 4, md: 6 },
      }}
    >
      {productsByCategory.map((section) => (
        <ProductSection key={section.category} section={section} />
      ))}
    </Container>
  );
};

export default ProductCatalog;

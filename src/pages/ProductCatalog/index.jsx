import { useMemo, useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { products } from "../../data/products";
import ProductCard from "../../components/ProductCard";
import ProductFilter from "../../components/ProductFilter";

const getFilterOptions = (items) => [
  { label: "All", category: "All" },
  ...Array.from(new Set(items.map((product) => product.category))).map(
    (category) => ({
      label: category,
      category,
    }),
  ),
];

const groupProductsByCategory = (items) =>
  items.reduce((sections, product) => {
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



const ProductSection = ({ isFiltered, section }) => (
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
        display: isFiltered ? "grid" : "flex",
        gap: 3,
        gridTemplateColumns: isFiltered
          ? {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              md: "repeat(3, minmax(0, 1fr))",
              lg: "repeat(4, minmax(0, 1fr))",
            }
          : undefined,
        overflowX: isFiltered ? "visible" : "auto",
        overflowY: isFiltered ? "visible" : "hidden",
        pb: 1,
        scrollPaddingInline: isFiltered ? undefined : { xs: 16, sm: 24 },
        scrollSnapType: isFiltered ? undefined : "x proximity",
        scrollbarWidth: isFiltered ? undefined : "none",
        WebkitOverflowScrolling: isFiltered ? undefined : "touch",
        "&::-webkit-scrollbar": {
          display: isFiltered ? undefined : "none",
        },
      }}
    >
      {section.products.map((product) => (
        <Box
          key={product.itemname}
          sx={{
            flex: isFiltered ? undefined : "0 0 auto",
            scrollSnapAlign: isFiltered ? undefined : "start",
            width: {
              xs: isFiltered ? "100%" : "min(82vw, 320px)",
              sm: isFiltered ? "100%" : 300,
              md: isFiltered ? "100%" : 310,
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
  const [activeCategory, setActiveCategory] = useState("All");

  const filterOptions = useMemo(() => getFilterOptions(products), []);

  const visibleProducts = useMemo(
    () =>
      activeCategory === "All"
        ? products
        : products.filter((product) => product.category === activeCategory),
    [activeCategory],
  );

  const productsByCategory = useMemo(
    () => groupProductsByCategory(visibleProducts),
    [visibleProducts],
  );
  
  const isFiltered = activeCategory !== "All";

  return (
    <>
      <ProductFilter
        activeCategory={activeCategory}
        filterOptions={filterOptions}
        onFilterChange={setActiveCategory}
      />
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, sm: 3 },
          py: { xs: 4, md: 6 },
        }}
      >
        {productsByCategory.map((section) => (
          <ProductSection
            key={section.category}
            isFiltered={isFiltered}
            section={section}
          />
        ))}
      </Container>
    </>
  );
};

export default ProductCatalog;

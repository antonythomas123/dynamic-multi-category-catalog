import { Box, Button, Container, Stack } from "@mui/material";

const ProductFilter = ({
  activeCategory,
  filterOptions,
  onFilterChange,
}) => (
  <Box>
    <Container
      maxWidth="lg"
      sx={{
        overflowX: "auto",
        px: { xs: 2, sm: 3, md: 4 },
        py: 2,
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        sx={{
          alignItems: "center",
          minWidth: "max-content",
        }}
      >
        {filterOptions.map((option) => {
          const isActive = activeCategory === option.category;

          return (
            <Button
              key={option.label}
              aria-pressed={isActive}
              onClick={() => onFilterChange(option.category)}
              sx={{
                bgcolor: isActive ? "primary.main" : "transparent",
                borderRadius: "9999px",
                color: isActive ? "primary.contrastText" : "text.secondary",
                fontSize: 14,
                fontWeight: 700,
                minHeight: 36,
                px: 3,
                py: 1,
                "&:hover": {
                  bgcolor: isActive ? "primary.dark" : "action.hover",
                },
              }}
              variant="text"
            >
              {option.label}
            </Button>
          );
        })}
      </Stack>
    </Container>
  </Box>
);

export default ProductFilter
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";

const Navbar = () => {

  return (
    <AppBar
      component="header"
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        borderBottom: 1,
        borderColor: "rgba(194, 199, 209, 0.45)",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
        color: "primary.main",
        top: 0,
        width: "100%",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1280,
          px: { xs: 2, sm: 3 },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            gap: { xs: 1, sm: 2, md: 4 },
            justifyContent: "space-between",
            minHeight: 64,
          }}
        >

          <Typography
            variant="h6"
            sx={{
              color: "primary.main",
              flexShrink: 0,
              fontSize: { xs: 18, sm: 20 },
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              mr: { xs: "auto", md: 0 },
            }}
          >
            CatalogPro
          </Typography>

        </Toolbar>
      </Container>

    </AppBar>
  );
};

export default Navbar;

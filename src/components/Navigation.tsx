import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        bgcolor: "rgba(255, 255, 255, 0.98)",
        borderBottom: "1px solid #e2e8f0",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ px: { xs: 0, sm: 2 } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img
              src="https://cdn.prod.website-files.com/659573a2854d356716e8c221/65ba85049e68d008798864c5_AllBlack.svg"
              alt=""
              height={50}
            />
          </Box>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              color: "#1a365d",
              cursor: "pointer",
              fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
            }}
            onClick={() => (window.location.href = "/")}
          >
            Frontend Assessment
          </Typography>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              variant={location.pathname === "/" ? "contained" : "text"}
              color={location.pathname === "/" ? "primary" : "inherit"}
              component={RouterLink}
              to="/"
              startIcon={<HomeIcon />}
              sx={{
                borderRadius: 2,
                px: 3,
                py: 1,
                fontWeight: 600,
                textTransform: "none",
                fontSize: "0.9rem",
                ...(location.pathname === "/" && {
                  bgcolor: "#3182ce",
                  "&:hover": {
                    bgcolor: "#2c5aa0",
                  },
                }),
                ...(location.pathname !== "/" && {
                  color: "#4a5568",
                  "&:hover": {
                    bgcolor: "rgba(49, 130, 206, 0.08)",
                  },
                }),
                transition: "all 0.2s ease",
              }}
            >
              Home
            </Button>

            <Button
              variant={
                location.pathname === "/dashboard" ? "contained" : "text"
              }
              color={location.pathname === "/dashboard" ? "primary" : "inherit"}
              component={RouterLink}
              to="/dashboard"
              startIcon={<DashboardIcon />}
              sx={{
                borderRadius: 2,
                px: 3,
                py: 1,
                fontWeight: 600,
                textTransform: "none",
                fontSize: "0.9rem",
                ...(location.pathname === "/dashboard" && {
                  bgcolor: "#3182ce",
                  "&:hover": {
                    bgcolor: "#2c5aa0",
                  },
                }),
                ...(location.pathname !== "/dashboard" && {
                  color: "#4a5568",
                  "&:hover": {
                    bgcolor: "rgba(49, 130, 206, 0.08)",
                  },
                }),
                transition: "all 0.2s ease",
              }}
            >
              Dashboard
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;

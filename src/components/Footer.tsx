import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Link,
  Divider,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0d0d0d",
        color: "white",
        py: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4}>
          {/* Main Footer Content */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            justifyContent="space-between"
            alignItems={{ xs: "center", md: "flex-start" }}
          >
            {/* Company Info */}
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: "white",
                  fontFamily:
                    '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
                }}
              >
                Acoer
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  maxWidth: 300,
                  lineHeight: 1.6,
                }}
              >
                Delivering secure, usable, and real-time blockchain solutions to
                transform healthcare, empower innovation, and enhance lives.
              </Typography>
            </Box>

            {/* Quick Links */}
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="h6"
                component="h4"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: "white",
                }}
              >
                Quick Links
              </Typography>
              <Stack spacing={1}>
                <Link
                  href="https://www.acoer.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    textDecoration: "none",
                    "&:hover": {
                      color: "white",
                      textDecoration: "underline",
                    },
                    transition: "color 0.2s ease",
                  }}
                >
                  Home
                </Link>
                <Link
                  href="https://www.acoer.com/company/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    textDecoration: "none",
                    "&:hover": {
                      color: "white",
                      textDecoration: "underline",
                    },
                    transition: "color 0.2s ease",
                  }}
                >
                  About
                </Link>
                <Link
                  href="https://www.acoer.com/company/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    textDecoration: "none",
                    "&:hover": {
                      color: "white",
                      textDecoration: "underline",
                    },
                    transition: "color 0.2s ease",
                  }}
                >
                  Contact
                </Link>
              </Stack>
            </Box>

            {/* Social Links */}
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="h6"
                component="h4"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: "white",
                }}
              >
                Connect
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <IconButton
                  href="https://www.linkedin.com/company/acoer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    "&:hover": {
                      color: "white",
                      bgcolor: "rgba(255, 255, 255, 0.1)",
                    },
                    transition: "all 0.2s ease",
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  href="https://x.com/acoerco"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    "&:hover": {
                      color: "white",
                      bgcolor: "rgba(255, 255, 255, 0.1)",
                    },
                    transition: "all 0.2s ease",
                  }}
                >
                  <TwitterIcon />
                </IconButton>
              </Stack>
            </Box>
          </Stack>

          <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.2)" }} />

          {/* Bottom Footer */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="space-between"
            alignItems={{ xs: "center", sm: "flex-start" }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255, 255, 255, 0.6)",
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              © 2014-2025 Acoer Inc. All Rights Reserved
            </Typography>
            <Stack
              direction="row"
              spacing={3}
              sx={{ justifyContent: { xs: "center", sm: "flex-end" } }}
            >
              <Link
                href="https://www.acoer.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "rgba(255, 255, 255, 0.6)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  "&:hover": {
                    color: "rgba(255, 255, 255, 0.8)",
                  },
                  transition: "color 0.2s ease",
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="https://www.acoer.com/legal/security-policy"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "rgba(255, 255, 255, 0.6)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  "&:hover": {
                    color: "rgba(255, 255, 255, 0.8)",
                  },
                  transition: "color 0.2s ease",
                }}
              >
                Security Policy
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;

// FrontLandingPage.tsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Chip,
  Paper,
} from "@mui/material";
import { Link as MUILink } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import DescriptionIcon from "@mui/icons-material/Description";
import ApiIcon from "@mui/icons-material/Api";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarBorderIcon from "@mui/icons-material/StarBorder";

interface FrontLandingPageProps {
  readmeHref?: string;
  title?: string;
  subtitle?: string;
}

const FrontLandingPage: React.FC<FrontLandingPageProps> = ({
  readmeHref = "https://github.com/Acoercode/ac-ts-frontend-assessment/blob/main/README.md",
  title = "Frontend Interview Exercise — openFDA Explorer",
  subtitle = "Build a small, real-world React dashboard powered by live openFDA data.",
}) => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)",
      }}
    >
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4 } }}>
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Paper
            elevation={0}
            sx={{
              bgcolor: "white",
              borderRadius: 3,
              p: { xs: 4, md: 6 },
              border: "1px solid #e2e8f0",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="center"
              sx={{ mb: 3 }}
            >
              <RocketLaunchIcon sx={{ fontSize: 32, color: "#3182ce" }} />
              <Typography
                variant="overline"
                sx={{
                  color: "#4a5568",
                  letterSpacing: 1.5,
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                CANDIDATE EXERCISE
              </Typography>
            </Stack>

            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#1a365d",
                mb: 2,
                fontFamily:
                  '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
              }}
            >
              {title}
            </Typography>

            <Typography
              variant="h6"
              component="p"
              sx={{
                color: "#4a5568",
                maxWidth: 600,
                mb: 4,
                lineHeight: 1.6,
                mx: "auto",
              }}
            >
              {subtitle}
            </Typography>

            <Button
              variant="contained"
              size="large"
              startIcon={<DescriptionIcon />}
              component={MUILink}
              href={readmeHref}
              underline="none"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                bgcolor: "#3182ce",
                color: "white",
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: 2,
                boxShadow: "0 2px 4px rgba(49, 130, 206, 0.2)",
                "&:hover": {
                  bgcolor: "#2c5aa0",
                  transform: "translateY(-1px)",
                  boxShadow: "0 4px 8px rgba(49, 130, 206, 0.3)",
                },
                transition: "all 0.2s ease",
              }}
            >
              View Full Instructions
            </Button>
          </Paper>
        </Stack>
      </Container>

      {/* Overview Section */}
      <Container maxWidth="lg" sx={{ pb: { xs: 8 } }}>
        <Paper
          elevation={0}
          sx={{
            bgcolor: "white",
            borderRadius: 3,
            p: { xs: 4, md: 6 },
            border: "1px solid #e2e8f0",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Stack spacing={5}>
            {/* What You'll Build */}
            <Box textAlign="center">
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: "#1a365d",
                  fontFamily:
                    '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
                }}
              >
                What You'll Build
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#4a5568",
                  maxWidth: 600,
                  mx: "auto",
                  lineHeight: 1.7,
                  fontSize: "1.1rem",
                }}
              >
                A React dashboard that lets users search, filter, sort,
                paginate, and view details from live openFDA endpoints.
              </Typography>
            </Box>

            {/* Key Features */}
            <Box>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontWeight: 600,
                  mb: 4,
                  textAlign: "center",
                  color: "#1a365d",
                }}
              >
                Key Features
              </Typography>
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={2}
                justifyContent="center"
              >
                <Chip
                  icon={<CheckCircleIcon />}
                  label="Search & Filters"
                  sx={{
                    bgcolor: "#ebf8ff",
                    color: "#2c5aa0",
                    fontWeight: 500,
                    "& .MuiChip-icon": { color: "#3182ce" },
                    border: "1px solid #bee3f8",
                  }}
                />
                <Chip
                  icon={<CheckCircleIcon />}
                  label="Sorting & Pagination"
                  sx={{
                    bgcolor: "#f0fff4",
                    color: "#22543d",
                    fontWeight: 500,
                    "& .MuiChip-icon": { color: "#38a169" },
                    border: "1px solid #c6f6d5",
                  }}
                />
                <Chip
                  icon={<CheckCircleIcon />}
                  label="Faceted Results"
                  sx={{
                    bgcolor: "#fef5e7",
                    color: "#744210",
                    fontWeight: 500,
                    "& .MuiChip-icon": { color: "#ed8936" },
                    border: "1px solid #fed7aa",
                  }}
                />
                <Chip
                  icon={<CheckCircleIcon />}
                  label="Detail Views"
                  sx={{
                    bgcolor: "#f7fafc",
                    color: "#4a5568",
                    fontWeight: 500,
                    "& .MuiChip-icon": { color: "#718096" },
                    border: "1px solid #e2e8f0",
                  }}
                />
              </Stack>
            </Box>

            {/* Tech Stack */}
            <Box textAlign="center">
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontWeight: 600,
                  mb: 4,
                  color: "#1a365d",
                }}
              >
                Tech Stack
              </Typography>
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={2}
                justifyContent="center"
              >
                <Chip
                  icon={<ApiIcon />}
                  label="React + TypeScript"
                  sx={{
                    bgcolor: "#f7fafc",
                    color: "#4a5568",
                    fontWeight: 500,
                    border: "1px solid #e2e8f0",
                    "&:hover": { bgcolor: "#edf2f7" },
                  }}
                />
                <Chip
                  icon={<StarBorderIcon />}
                  label="Material-UI (MUI)"
                  sx={{
                    bgcolor: "#f7fafc",
                    color: "#4a5568",
                    fontWeight: 500,
                    border: "1px solid #e2e8f0",
                    "&:hover": { bgcolor: "#edf2f7" },
                  }}
                />
                <Chip
                  icon={<RocketLaunchIcon />}
                  label="openFDA APIs"
                  sx={{
                    bgcolor: "#f7fafc",
                    color: "#4a5568",
                    fontWeight: 500,
                    border: "1px solid #e2e8f0",
                    "&:hover": { bgcolor: "#edf2f7" },
                  }}
                />
              </Stack>
            </Box>

            {/* Call to Action */}
            <Box textAlign="center" sx={{ pt: 2 }}>
              <Typography
                variant="body1"
                sx={{
                  color: "#4a5568",
                  mb: 4,
                  maxWidth: 500,
                  mx: "auto",
                  fontSize: "1.1rem",
                }}
              >
                Ready to get started? Check out the full README for detailed
                requirements and implementation guidelines.
              </Typography>
              <Button
                variant="outlined"
                size="large"
                startIcon={<DescriptionIcon />}
                component={MUILink}
                href={readmeHref}
                underline="none"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderColor: "#3182ce",
                  color: "#3182ce",
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 600,
                  borderRadius: 2,
                  "&:hover": {
                    borderColor: "#2c5aa0",
                    bgcolor: "rgba(49, 130, 206, 0.04)",
                    transform: "translateY(-1px)",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                Read Full Instructions
              </Button>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default FrontLandingPage;

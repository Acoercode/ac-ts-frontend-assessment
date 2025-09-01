import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
} from "@mui/material";

const Dashboard: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: "#f7fafc",
        color: "text.primary",
        minHeight: "100vh",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4}>
          {/* Placeholder for User's Code */}
          <Card
            variant="outlined"
            sx={{
              bgcolor: "white",
              border: "1px solid #e2e8f0",
              borderRadius: 2,
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: "#1a365d",
                  fontFamily:
                    '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
                }}
              >
                Your Dashboard Code Goes Here
              </Typography>
              <Typography
                variant="body1"
                color="#4a5568"
                sx={{ mb: 2, lineHeight: 1.6 }}
              >
                Replace this card with your actual dashboard implementation.
                Start simple and build up the features one by one.
              </Typography>
              <Typography
                variant="body2"
                color="#718096"
                sx={{ lineHeight: 1.6 }}
              >
                Example: Add a search form, results table, and pagination
                controls.
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
};

export default Dashboard;

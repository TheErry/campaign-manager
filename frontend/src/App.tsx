import { useState, useEffect } from "react";
import CampaignForm from "./components/CampaignForm";
import { Campaign } from "@campaigns/shared-types";
import CampaignList from "./components/CampaignList";
import { Box, Container, Typography } from "@mui/material";

function App() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  const fetchCampaigns = async () => {
    const response = await fetch("http://localhost:4000/api/campaigns");
    const data = await response.json();
    setCampaigns(data);
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", py: 5 }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          color="white"
          fontWeight={600}
          gutterBottom
          textAlign="center"
        >
          Podcast Sponsorship Manager
        </Typography>
        <Box display="flex" gap={4} flexDirection={{ xs: "column", md: "row" }}>
          <CampaignForm onCreated={fetchCampaigns} />
          <CampaignList campaigns={campaigns} onDelete={fetchCampaigns} />
        </Box>
      </Container>
    </Box>
  );
}

export default App;

import { Campaign } from "@campaigns/shared-types";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";

export default function CampaignList({
  campaigns,
  onDelete,
}: {
  campaigns: Campaign[];
  onDelete: () => void;
}) {
  const handleDelete = async (id: string) => {
    await fetch(`http://localhost:4000/api/campaigns/${id}`, {
      method: "DELETE",
    });
    onDelete();
  };

  return (
    <Box
      sx={{ backgroundColor: "#1e1e1e", p: 3, borderRadius: 2, my: 3 }}
      width={{ xs: "100%", md: "400px" }}
    >
      <Typography variant="h6" color="white" mb={2}>
        Campaigns
      </Typography>

      <Stack spacing={2}>
        {campaigns.map((campaign) => (
          <Paper
            sx={{
              p: 2,
              backgroundColor: "#1f1f1f",
              color: "white",
              borderRadius: 2,
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
          >
            <Typography variant="subtitle1" fontWeight={600}>
              {campaign.title}
            </Typography>
            <Typography variant="body2">{campaign.podcast}</Typography>
            <Typography variant="body2">{campaign.status}</Typography>

            <Typography variant="body2">
              {campaign.startDate} – {campaign.endDate}
            </Typography>
            <Button
              size="small"
              variant="outlined"
              color="primary"
              sx={{
                mt: 1,
                "&:hover": {
                  bgcolor: "#d4af37",
                  color: "#000",
                  borderColor: "#c49e2e",
                },
              }}
              onClick={() => handleDelete(campaign.id)}
            >
              Delete
            </Button>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}

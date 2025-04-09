import { useState } from "react";
import { CampaignStatus } from "@campaigns/shared-types";
import {
  Select,
  MenuItem,
  SelectChangeEvent,
  Button,
  Stack,
  Box,
  Typography,
  TextField,
} from "@mui/material";

export default function CampaignForm({ onCreated }: { onCreated: () => void }) {
  const [formdata, setFormData] = useState({
    title: "",
    description: "",
    podcast: "",
    contact: "",
    startDate: "",
    endDate: "",
    status: "Planned" as CampaignStatus,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("http://localhost:4000/api/campaigns", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    });
    onCreated();
  };

  return (
    <Box
      component="form"
      width={{ xs: "100%", md: "400px" }}
      onSubmit={handleSubmit}
      sx={{ backgroundColor: "#1e1e1e", p: 3, borderRadius: 2, my: 3 }}
    >
      <Typography variant="h6" color="white" mb={2}>
        Add new campaign
      </Typography>
      <Stack spacing={2}>
        <TextField
          required
          name="title"
          id="outlined"
          label="Title"
          onChange={handleChange}
          placeholder="Title"
          value={formdata.title}
          margin="normal"
          sx={{ input: { color: "white" } }}
        />
        <TextField
          required
          name="description"
          id="outlined"
          label="Description"
          onChange={handleChange}
          placeholder="Description"
          value={formdata.description}
        />
        <TextField
          required
          name="podcast"
          id="outlined"
          label="Podcast"
          onChange={handleChange}
          placeholder="Podcast"
          value={formdata.podcast}
        />
        <TextField
          required
          name="contact"
          id="outlined"
          label="Contact"
          onChange={handleChange}
          placeholder="Contact"
          value={formdata.contact}
        />
        <TextField
          required
          type="date"
          name="startDate"
          id="outlined"
          label="Start Date"
          onChange={handleChange}
          value={formdata.startDate}
        />
        <TextField
          required
          type="date"
          name="endDate"
          id="outlined"
          label="End Date"
          onChange={handleChange}
          value={formdata.endDate}
        />
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="status"
          value={formdata.status}
          label="Status"
          onChange={handleSelectChange}
        >
          <MenuItem value="Planned">Planned</MenuItem>
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </Select>
        <Button
          sx={{ backgroundColor: "primary", color: "white" }}
          variant="contained"
          type="submit"
        >
          Create Campaign
        </Button>
      </Stack>
    </Box>
  );
}

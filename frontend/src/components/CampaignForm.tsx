import { useState } from "react";
import { CampaignStatus } from "@campaigns/shared-types";

export default function CampaignForm({ onCreated }: { onCreated: () => void }) {
  const [formdata, setFormData] = useState({
    title: "",
    description: "",
    podcast: "",
    contact: "",
    startDate: "",
    endDate: "",
    status: "planned" as CampaignStatus,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("http://localhost:4000/api/campaigns", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    })
    onCreated();
  }

  return (
    <form onSubmit={handleSubmit} className="campaign-form">
      <input name="title" placeholder="Title" onChange={handleChange} value={formdata.title} required />
      <input name="description" placeholder="Description" onChange={handleChange} value={formdata.description} required />
      <input name="podcast" placeholder="Podcast" onChange={handleChange} value={formdata.podcast} required />
      <input name="contact" placeholder="Contact" onChange={handleChange} value={formdata.contact} required />
      <input name="startDate" type="date" onChange={handleChange} value={formdata.startDate} required />
      <input name="endDate" type="date" onChange={handleChange} value={formdata.endDate} required />
      <select name="status" onChange={handleChange} value={formdata.status}>
        <option value="Planned">Planned</option>
        <option value="Active">Active</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit">Create Campaign</button>
    </form>
  )
}
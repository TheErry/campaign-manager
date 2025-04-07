import { Campaign } from "@campaigns/shared-types";

export default function CampaignList({ campaigns, onDelete }: { 
  campaigns: Campaign[]; 
  onDelete: () => void 
}) {
  const handleDelete = async (id: string) => {
    await fetch(`http://localhost:4000/api/campaigns/${id}`, {
      method: "DELETE",
    });
    onDelete();
  }

  return (
    <ul>
      {campaigns.map((campaign) => (
        <li key={campaign.id}>
          <h3>{campaign.title}</h3>
          <p>{campaign.description}</p>
          <p>Podcast: {campaign.podcast}</p>
          <p>Contact: {campaign.contact}</p>
          <p>Status: {campaign.status}</p>
          <button onClick={() => handleDelete(campaign.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}
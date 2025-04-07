export type CampaignStatus = "planned" | "active" | "completed";

export interface Campaign {
  id: string;
  title: string;
  description: string;
  podcast: string;
  contact: string;
  startDate: string;
  endDate: string;
  status: CampaignStatus;
}

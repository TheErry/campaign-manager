import { Router } from "express";
import { Campaign } from "@campaigns/shared-types";

let campaigns: Campaign[] = [];

export const campaignsRouter = Router();

campaignsRouter.get("/", (_, res) => {
  res.json(campaigns);
});

campaignsRouter.post("/", (req, res) => {
  const newCampaign: Campaign = { ...req.body, id: Date.now().toString() };
  campaigns.push(newCampaign);
  res.status(201).json(newCampaign);
});

campaignsRouter.delete("/:id", (req, res) => {
  campaigns = campaigns.filter((c) => c.id !== req.params.id);
  res.status(204).send();
});

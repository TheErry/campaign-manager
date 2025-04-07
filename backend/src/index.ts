import express from "express";
import cors from "cors";
import { campaignsRouter } from "./routes/campaigns";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/campaigns", campaignsRouter);

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});

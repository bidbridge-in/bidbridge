import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { prisma } from "@bidbridge/db";
import { signupSchema } from "@bidbridge/shared";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "http-backend" });
});

app.listen(PORT, () => {
  console.log(`HTTP Backend listening on http://localhost:${PORT}`);
});

import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import menuRoutes from "./routes/menuRoutes.js";
import tableRoutes from "./routes/tableRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/tables", tableRoutes);

// Route gốc để test nhanh trên browser
app.get("/", (req, res) => {
  res.send("✅ Backend test đang chạy. Dùng /api/... để gọi API.");
});

// Hoặc thêm route health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend hoạt động 🚀" });
});


app.listen(3000, () => {
  console.log("✅ Backend test chạy tại http://localhost:3000");
});

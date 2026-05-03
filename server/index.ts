import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "..", "public");

const app = express();

app.use(express.static(publicDir, { extensions: ["html"] }));

app.get("*", (_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

const port = parseInt(process.env.PORT || "5000", 10);
app.listen({ port, host: "0.0.0.0", reusePort: true }, () => {
  console.log(`serving on port ${port}`);
});

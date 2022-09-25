import express from "express";

import home from "./routes/home";
import images from "./routes/images";
export const input_dir = "src//images//";
export const output_dir = "src/thumbnails/";
export const rootDir = __dirname;
const app = express();

const port = 3000;
app.use("/", home);
app.use("/images", images);

app.listen(port, () => {
  console.log(`server started :${port}`);
});

export default app;

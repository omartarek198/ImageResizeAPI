import express from "express";
const home = express.Router();

home.get("/", (req: express.Request, res: express.Response): void => {
  res.send("Go to /images?width=100&height=300&name=fjord.jpg for an example");

  return;
});

export default home;

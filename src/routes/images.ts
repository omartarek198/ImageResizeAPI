import express from "express";
import { DoesImageExist } from "../utilits";
import { resize } from "../utilits";
import { input_dir } from "..";
import { output_dir } from "..";
import { rootDir } from "..";
const images = express.Router();

images.get("/", async (req:express.Request, res:express.Response) => {
  let W = 0;

  let H = 0;

  let name = "";
  // parsing input from query url

  W = Number(req.query.width);
  H = Number(req.query.height);
  name = req.query.name as string;
  //validating input
  if (isNaN(W) || isNaN(H) || name == undefined || W < 0 || H < 0) {
    res.send("error in input");
  } else {
    //Is image name not valid in input dir
    if (!DoesImageExist(input_dir + name)) {
      res.send("Image does not exist");
    } else {
      //creating file name based on image name and dimensions

      const out_name: string = W + "_" + H + "_" + name;

      //Is image in output dir (resized before)

      if (DoesImageExist(output_dir + out_name)) {
        //use cached image
        res.sendFile("thumbnails/" + out_name, { root: rootDir });
        console.log(rootDir);
      } else {
        //resize image
        await resize(W, H, name);

        //if image in output dir
        if (DoesImageExist(output_dir + out_name)) {
          //return resized image
          res.sendFile("thumbnails/" + out_name, { root: rootDir });
          console.log(rootDir);
        } else {
          res.send("image not found");
        }
      }
    }
  }
});

export default images;

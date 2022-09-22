import express from "express";


export const input_dir = "src//images//";
export const output_dir = "src/thumbnails/";
import fs from 'fs'
import sharp from 'sharp'
const app = express();

const port = 3000;
app.get("/", (req, res) => {

    res.send("Go to /images?width=100&height=300&name=fjord.jpg for an example")

});
    
    
app.get("/images", async (req, res) => {
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
  } else
  {
      //Is image name not valid in input dir
    if (!DoesImageExist(input_dir + name)) {
      res.send("Image does not exist");
    } else {

        //creating file name based on image name and dimensions 

        const out_name: string = W + "_" + H + "_" + name;
        
        //Is image in output dir (resized before)

      if (DoesImageExist(output_dir + out_name)) {
        //use cached image
          res.sendFile("thumbnails/" + out_name, { root: __dirname });
                  console.log(__dirname)
      } else {
        //resize image  
        await resize(W, H, name);
        
        //if image in output dir
        if (DoesImageExist(output_dir + out_name)) {

          //return resized image  
            res.sendFile("thumbnails/" + out_name, { root: __dirname });
            console.log(__dirname)
        } else {
          res.send("image not found");
        }
      }
    }
  }
});

app.listen(port, () => {
  console.log(`server started :${port}`);
});


//waitng function
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
 
async function resize(
  width: number,
  height: number,

  name: string
) {

    //creating file name using image dimensions 
    const out_name: string = width + "_" + height + "_" + name;
    // resizing image
  await sharp(input_dir + name)
    .resize(width, height)
    .toFile(output_dir + out_name);
    //waiting until image is processed 
  await sleep(1000);
}



//checking if image exists in path provided
export function DoesImageExist(path: string): boolean {
  try {
    if (fs.existsSync(path)) {
      return true;
    }
  } catch (err) {
    return false;
  }
  return false;
}

export default app;

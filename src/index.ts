import express from "express";

// or

export const input_dir = "src//images//";
export const output_dir = "src/thumbnails/";
const fs = require("fs");
const sharp = require("sharp");
const app = express();

const port = 3000;

app.get("/api", async (req, res) => {
  let W = 0;

  let H = 0;

  let name = "";

  W = Number(req.query.width);
  H = Number(req.query.height);

    name = req.query.name as string;
    
  if (isNaN(W) || isNaN(H) || name == undefined || W < 0 || H < 0) {
    res.send("error in input");
  } else {
      
      
    if (!DoesImageExist(input_dir + name)) {
      res.send("Image does not exist");
    } else {
        console.log("here")
        let out_name: string =  W + "_" + H + "_" +name;   
      if (DoesImageExist(output_dir+out_name)) {
        //use cached images
          
                       res.sendFile("thumbnails/" + out_name, { root: __dirname })


          
      } else {
          await resize(W, H, name);
          
          if (DoesImageExist(output_dir + out_name))
          {
            
              res.sendFile("thumbnails/" + out_name, { root: __dirname })
          }  
          else {
            res.send("image not found")  
              
          }
          
         
         
      }
    }
  }
});

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function getImg(path: string) {
    console.log("waiting")
    var img = await fs.readFile("D:\\backend\\ImageResize\\src\\thumbnails\\1.jpg", function (err: string, data: string) {
        // console.log(data);
        

    })
    
        //   res.send(W + " " + H + " " + name);
        //  res.sendFile("thumbnails/"+out_name, { root: __dirname })
          console.log(img)
         return img
}
async function  resize(
  width: number,
  height: number,

  name: string
) {


    let out_name: string =  width + "_" + height + "_" +name;  
 await sharp(input_dir + name)
    .resize(width, height)
     .toFile(output_dir + out_name, function (): void { 
         
            }
     );
    
    await sleep(1000)

}

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

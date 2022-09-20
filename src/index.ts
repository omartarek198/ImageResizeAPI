import express from "express";


const sharp = require('sharp');
const app = express();

const port = 3000;

app.get("/api", (req, res) => {
    var W = 0;
    
    var H = 0;
    
    var name = "";

    W = Number(req.query.width)
    H = Number(req.query.height)
    name = req.query.name as string
    if (W == NaN || H == NaN || name == undefined || W < 0 || H < 0)
    {
        res.send("error in input")
    }
    else
    {
         resize(W, H, name)
    res.send(W+" " + H+ " " + name);
    }



   
});

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});


function resize(width:number, height:number,name:string) {
  sharp('D:\\backend\\ImageResize\\src\\1.jpg')
  .resize(width, height)
  .toFile('output.jpg', function() {
    // output.jpg is a 300 pixels wide and 200 pixels high image
    // containing a scaled and cropped version of input.jpg
  });
}
 

export default app;

export const input_dir = "src//images//";
export const output_dir = "src/thumbnails/";
import fs from "fs";
import sharp from "sharp";

 

export async function resize(
  width: number,
  height: number,

  name: string
): Promise<void> {
  //validating path is correct

  //creating file name using image dimensions
  const out_name: string = width + "_" + height + "_" + name;


  try {
    await sharp(input_dir + name)
      .resize(width, height)
      .toFile(output_dir + out_name)
      .then();
    //waiting until image is processed
  }
  catch
  {
  throw new Error('test')
  }

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

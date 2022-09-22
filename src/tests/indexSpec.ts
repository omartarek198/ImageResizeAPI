import supertest from "supertest";
import app, { output_dir } from "../index";
import { DoesImageExist } from "../index";
import { input_dir } from "../index";

const request = supertest(app);
describe("Test endpoint (/images) is running", () => {
  it("gets api status", async () => {
    const response = await request.get("/images");
    expect(response.status).toBe(200);
    console.log(response.status);
  });
});



describe("Tests endpoint response to input", () => {
  it("tests on incorrect input format", async () => {
    const response = await request.get("/images?width=b&height=300a");
    expect(response.text).toBe("error in input");
    console.log(response.text);
  });
});

describe("Tests endpoint response to input", () => {
  it("tests on negative values", async () => {
    const response = await request.get("/images?width=-300&height=300");
    expect(response.text).toBe("error in input");
    console.log(response.text);
  });
});

describe("Testing DoesImageExist function", () => {
  it("Passing an existent image", () => {
    expect(DoesImageExist(input_dir + "1.jpg")).toBe(true);
  });
});

describe("Testing DoesImageExist function", () => {
  it("Passing a nonexistent image", () => {
    expect(DoesImageExist(input_dir + "randomfilename")).toBe(false);
  });
});



describe("Testing thumbnail creation", () => {
  it("testing new image", async () => {
      const response = await request.get("/images?width=300&height=300&name=1.jpg");

      expect(DoesImageExist(output_dir +"300_300_1.jpg" )).toBe(true);
  });
});

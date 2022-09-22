import supertest from "supertest";
import app from "../index";
import { DoesImageExist } from "../index";
import { input_dir } from "../index";

const request = supertest(app);
describe("Test endpoint (/api) is running", () => {
  it("gets api status", async () => {
    const response = await request.get("/api");
    expect(response.status).toBe(200);
    console.log(response.status);
  });
});

describe("Tests endpoint response to input", () => {
  it("tests on correct input format", async () => {
    const response = await request.get("/api?width=100&height=300&name=1.jpg");
    expect(response.text).toBe("100 300 1.jpg");
    console.log(response.text);
  });
});

describe("Tests endpoint response to input", () => {
  it("tests on incorrect input format", async () => {
    const response = await request.get("/api?width=b&height=300a");
    expect(response.text).toBe("error in input");
    console.log(response.text);
  });
});

describe("Tests endpoint response to input", () => {
  it("tests on negative values", async () => {
    const response = await request.get("/api?width=-300&height=300");
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

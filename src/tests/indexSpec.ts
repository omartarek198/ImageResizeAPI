import supertest from "supertest";
import app from "../index";

 
const request = supertest(app);
describe("Tests endpoint responses", () => {
  it("gets the api endpoint", async () => {
    const response = await request.get("/api");
    expect(response.status).toBe(200);
    console.log(response.status);
  });
});

import app from "../src/app.js";
import connectDB, { disconnectDB } from "../src/config/db.js";

beforeAll(async () => {
  process.env.NODE_ENV = "test";
  await connectDB();
});

afterAll(async () => {
  await disconnectDB();
});

export default app;
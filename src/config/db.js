import mongoose from "mongoose";

// helper for running an in‑memory server when Jest is executing
let memoryServer;

const connectDB = async () => {
  let uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/taskmanager";

  if (process.env.NODE_ENV === "test") {
    // start an in‑memory MongoDB instance if not already running
    if (!memoryServer) {
      const { MongoMemoryServer } = await import("mongodb-memory-server");
      memoryServer = await MongoMemoryServer.create();
      uri = memoryServer.getUri();
      console.log("Using in-memory MongoDB for tests at", uri);
    }
  } else if (!process.env.MONGO_URI) {
    console.warn("MONGO_URI not set, falling back to local MongoDB at", uri);
  }

  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected");
  } catch (error) {
    // log the actual error so it's easier to diagnose why the link failed
    console.error("Database connection failed:", error.message);
    // during tests we want the exception to propagate rather than killing the process
    if (process.env.NODE_ENV !== "test") {
      process.exit(1);
    }
    throw error; // allow caller/tests to handle it
  }
};

// Jest will ask to disconnect when tests finish
export const disconnectDB = async () => {
  await mongoose.disconnect();
  if (memoryServer) {
    await memoryServer.stop();
  }
};

export default connectDB;
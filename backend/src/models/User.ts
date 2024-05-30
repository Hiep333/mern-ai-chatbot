import mongoose from "mongoose";
import { randomUUID } from "crypto";

// Define chat schema
const chatSchema = new mongoose.Schema({
  id: {
    type: "string",
    default: randomUUID(),
  },
  role: { 
    type: String ,
    required: true,
  },
  content :{
    type: String,
    required: true,
  }
});

// Define user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  chats: [chatSchema]// Embedding chat schema in user schema
});

export default mongoose.model("User",userSchema);
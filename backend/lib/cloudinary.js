import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDNIARY_CLOUD_NAME,
  api_key: process.env.CLOUDNIARY_KEY,
  api_secret: process.env.CLOUDNIARY_SECRET,
});

export default cloudinary
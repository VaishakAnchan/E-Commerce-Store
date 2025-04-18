import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

// key-value store
 export const redis =  new Redis(process.env.UPSTASH_REDIS_URL);


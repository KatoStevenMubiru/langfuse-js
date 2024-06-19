import dotenv from 'dotenv';

dotenv.config();

export const env = {
  langfuseSecretKey: process.env.LANGFUSE_SECRET_KEY,
  langfusePublicKey: process.env.LANGFUSE_PUBLIC_KEY,
  langfuseBaseUrl: process.env.LANGFUSE_BASEURL,
  unifyApiKey: process.env.UNIFY_API_KEY,
};

import { config } from 'dotenv';

config({ path: 'secret_data.env' });

export const JWT_CONSTANTS = {
  secret: process.env.JWT_KEY as string,
};

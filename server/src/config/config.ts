import * as dotenv from 'dotenv';
dotenv.config();

const SERVER_PORT = process.env.PORT || 5000;
const POSTGRES_URI = process.env.POSTGRES_URI;
export { SERVER_PORT, POSTGRES_URI };

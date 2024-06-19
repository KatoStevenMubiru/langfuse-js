import dotenv from 'dotenv';
import express from 'express';
import unifyRoutes from '../routes/unifyRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api', unifyRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export const config = {
  unifyApiKey: process.env.UNIFY_API_KEY
};

console.log('Config loaded:', config);

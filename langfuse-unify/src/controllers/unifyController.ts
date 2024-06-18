import { Request, Response } from 'express';
import { queryEndpoint } from '../api/unifyServices';

export const handleQuery = async (req: Request, res: Response) => {
  const { modelId, providerId, prompt } = req.body;
  try {
    const result = await queryEndpoint(modelId, providerId, prompt);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Failed to query Unify API', error });
  }
};

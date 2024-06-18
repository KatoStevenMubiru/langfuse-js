import { Router } from 'express';
import { handleQuery } from '../controllers/unifyController';

const router = Router();

router.post('/query', handleQuery);

export default router;

import express from 'express';
import { getYears } from '../controllers/year.js';

const router = express.Router();

/**
 * GET /
 * -------------------------
 * Meaning:
 * When user opens:
 *   GET /api/years
 * This function runs getYears()
 */
router.get('/getall', getYears);

export default router;

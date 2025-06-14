import express from 'express';
import { submitForm } from '../controllers/contact.js';

const router = express.Router();
router.post('/', submitForm);

export default router;

import express from 'express';
import { submitForm } from '../controllers/contact.js';

const router = express.Router();
router.post('/contact', submitForm);

export default router;

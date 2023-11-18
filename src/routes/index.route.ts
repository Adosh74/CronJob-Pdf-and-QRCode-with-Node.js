import { Router } from 'express';
import pdfRoutes from './APIs/pdf.route';

const router = Router();

router.use('/pdf', pdfRoutes);

export default router;

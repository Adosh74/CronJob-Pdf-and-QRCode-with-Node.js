import { Router } from 'express';
import pdfService from '../../services/pdf.service';

const router = Router();

router.get('/', (req, res) => {
	const stream = res.writeHead(200, {
		'Content-Type': 'application/pdf',
		'Content-Disposition': 'attachment; filename=mohamedshebl.pdf',
	});

	pdfService(
		(chunk: any) => {
			stream.write(chunk);
		},
		() => {
			stream.end();
		}
	);
});

export default router;

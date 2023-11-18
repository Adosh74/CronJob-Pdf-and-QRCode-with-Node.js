import PDFDocument from 'pdfkit';

const buildPdf = (dataCallback: any, endCallback: any) => {
	const doc = new PDFDocument();

	doc.on('data', dataCallback);
	doc.on('end', endCallback);

	doc.fontSize(20).text('Mohamed Shebl, a Software Engineer', 100, 100);
	doc.fontSize(12).link(100, 100, 200, 27, 'https://mohamedshebl.me');
	doc.fontSize(16).text('More about me me at: https://mohamedshebl.me ', 100, 135);

	doc.image(`${process.cwd()}/public/me.jpg`, {
		fit: [250, 300],
		align: 'center',
		valign: 'center',
	});

	doc.end();
};

export default buildPdf;

// // api/pdf/[document].ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import { PDFDocument } from 'pdf-lib';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { annotations, signatures } = req.body;

//   const pdfDoc = await PDFDocument.load(req.body.document);
  
//   // Apply annotations and signatures
//   // Add your code here for embedding annotations into the PDF document
  
//   const pdfBytes = await pdfDoc.save();
//   res.status(200).send(pdfBytes);
// }


const pdfDoc = await PDFDocument.load(req.body.document);

const pages = pdfDoc.getPages();
const firstPage = pages[0];

// Embed a text annotation
firstPage.drawText('This is an annotation', {
  x: 50,
  y: 700,
  size: 12,
});

const pdfBytes = await pdfDoc.save();
res.status(200).send(pdfBytes);

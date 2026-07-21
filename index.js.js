const PdfPrinter = require('pdfmake');
const fs = require('fs');

// Fuentes por defecto
const fonts = {
  Roboto: {
    normal: 'Helvetica',
    bold: 'Helvetica-Bold'
  }
};

const printer = new PdfPrinter(fonts);

// Estructura del reporte
const docDefinition = {
  content: [
    { text: 'Reporte de Investigación: pdfmake', fontSize: 18, bold: true },
    { text: 'Este es un reporte sencillo usando JavaScript y Node.js.\n\n' },
    {
      table: {
        body: [
          ['Tema', 'Librería', 'Estado'],
          ['PDFs dinámicos', 'pdfmake', 'Completado'],
          ['Repositorio', 'GitHub', 'Listo']
        ]
      }
    }
  ]
};

// Generar el archivo PDF
const pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream('reporte.pdf'));
pdfDoc.end();

console.log('¡Reporte generado con éxito!');
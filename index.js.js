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

      

const PdfPrinter = require('pdfmake');
const fs = require('fs');

// Configuración de fuentes
const fonts = {
  Roboto: {
    normal: 'Helvetica',
    bold: 'Helvetica-Bold'
  }
};

const printer = new PdfPrinter(fonts);

// 🎮 CONTENIDO DEL REPORTE DE VIDEOJUEGOS
const docDefinition = {
  content: [
    { text: '🎮 Reporte Gamer 2026', fontSize: 22, bold: true, alignment: 'center' },
    { text: 'Análisis de juegos y metas de gaming\n\n', fontSize: 12, alignment: 'center' },
    
    { text: 'Mis Juegos Principales:', fontSize: 14, bold: true },
    { text: 'A continuación muestro la lista de los juegos que más juego actualmente:\n\n' },

    // Tabla de videojuegos
    {
      table: {
        headerRows: 1,
        widths: ['*', '*', '*'],
        body: [
          ['Juego', 'Plataforma', 'Estado'],
          ['League of Legends', 'PC', 'Jugando'],
          ['Minecraft', 'PC / Consola', 'En progreso'],
          ['Genshin Impact', 'PC / Móvil', 'Completado']
        ]
      }
    },

    { text: '\n\nPróximas Metas Gamer:', fontSize: 14, bold: true },
    {
      ul: [
        'Subir de rango en mi juego favorito.',
        'Terminar el modo historia de mi juego pendiente.',
        'Aprender a programar un videojuego sencillo en JS.'
      ]
    }
  ]
};

// Generar el archivo PDF
const pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream('reporte.pdf'));
pdfDoc.end();

console.log('¡Reporte Gamer generado con éxito!');
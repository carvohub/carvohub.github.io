const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDF() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  // Set viewport
  await page.setViewport({ width: 1200, height: 800 });

  // Navigate to the print version of the report
  await page.goto('http://localhost:3000/sample-reports/KIASONKA52X7M4Q9R2C8A6FZ0WBTD-print', {
    waitUntil: 'domcontentloaded',
    timeout: 30000,
  });

  // Wait for images to load
  await new Promise(resolve => setTimeout(resolve, 5000));

  // Generate PDF
  const pdfPath = path.join(__dirname, '../public/KIASONKA52X7M4Q9R2C8A6FZ0WBTD.pdf');

  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '20mm',
      right: '15mm',
      bottom: '20mm',
      left: '15mm',
    },
  });

  console.log(`PDF generated at: ${pdfPath}`);

  await browser.close();
}

generatePDF().catch(console.error);

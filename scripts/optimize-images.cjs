const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const backupDir = path.join(__dirname, '../src/images/originals_backup');
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

async function optimizeImages() {
  const images = [
    { name: 'HR-4.webp', maxWidth: 1920, maxHeight: 1080, format: 'webp' },
    { name: 'newsPaper2.webp', maxWidth: 1800, maxHeight: 1800, format: 'webp' },
    { name: 'newsPaper3.webp', maxWidth: 1800, maxHeight: 1800, format: 'webp' },
    { name: 'newsPaper4.webp', maxWidth: 1800, maxHeight: 2000, format: 'webp' },
    { name: 'HR-4.jpg', maxWidth: 1920, maxHeight: 1080, format: 'jpeg' },
    { name: 'HR-2.jpg', maxWidth: 1920, maxHeight: 1080, format: 'jpeg' }
  ];

  for (const item of images) {
    const srcPath = path.join(__dirname, '../src/images', item.name);
    const backupPath = path.join(backupDir, item.name);
    
    if (fs.existsSync(srcPath)) {
      if (!fs.existsSync(backupPath)) {
        fs.copyFileSync(srcPath, backupPath);
        console.log('Backed up:', item.name);
      }
      
      const tmpPath = path.join(__dirname, '../src/images', 'tmp_' + item.name);
      let pipeline = sharp(backupPath).resize({
        width: item.maxWidth,
        height: item.maxHeight,
        fit: 'inside',
        withoutEnlargement: true
      });
      
      if (item.format === 'webp') {
        pipeline = pipeline.webp({ quality: 85, effort: 4 });
      } else {
        pipeline = pipeline.jpeg({ quality: 85, mozjpeg: true });
      }
      
      await pipeline.toFile(tmpPath);
      
      const oldSize = fs.statSync(backupPath).size;
      const newSize = fs.statSync(tmpPath).size;
      fs.renameSync(tmpPath, srcPath);
      
      const meta = await sharp(srcPath).metadata();
      console.log('Optimized ' + item.name + ': ' + (oldSize/1024/1024).toFixed(2) + 'MB -> ' + (newSize/1024).toFixed(1) + 'KB (' + meta.width + 'x' + meta.height + ')');
    }
  }
}

optimizeImages().catch(console.error);

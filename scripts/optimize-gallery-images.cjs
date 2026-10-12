const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function optimizeFolder(folderPath, backupPath) {
  if (!fs.existsSync(folderPath)) return;
  if (!fs.existsSync(backupPath)) fs.mkdirSync(backupPath, { recursive: true });

  const files = fs.readdirSync(folderPath);
  console.log(`\nOptimizing folder: ${folderPath} (${files.length} files)`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue;

    const srcFile = path.join(folderPath, file);
    const backupFile = path.join(backupPath, file);

    const stat = fs.statSync(srcFile);
    totalBefore += stat.size;

    // Backup if not already backed up
    if (!fs.existsSync(backupFile)) {
      fs.copyFileSync(srcFile, backupFile);
    }

    const tmpFile = path.join(folderPath, 'tmp_' + file);

    try {
      const meta = await sharp(backupFile).metadata();

      let pipeline = sharp(backupFile)
        .rotate() // auto-rotate based on EXIF orientation
        .resize({
          width: 1600,
          height: 1600,
          fit: 'inside',
          withoutEnlargement: true,
        });

      if (ext === '.webp') {
        pipeline = pipeline.webp({ quality: 82, effort: 4 });
      } else if (ext === '.png') {
        pipeline = pipeline.png({ quality: 82, compressionLevel: 8 });
      } else {
        pipeline = pipeline.jpeg({ quality: 82, mozjpeg: true });
      }

      await pipeline.toFile(tmpFile);

      const newStat = fs.statSync(tmpFile);
      totalAfter += newStat.size;

      fs.renameSync(tmpFile, srcFile);

      const ratio = ((1 - newStat.size / stat.size) * 100).toFixed(1);
      console.log(`  ✓ ${file}: ${(stat.size/1024/1024).toFixed(2)}MB -> ${(newStat.size/1024).toFixed(1)}KB (-${ratio}%)`);
    } catch (err) {
      console.error(`  ✗ Error optimizing ${file}:`, err.message);
      if (fs.existsSync(tmpFile)) fs.unlinkSync(tmpFile);
      totalAfter += stat.size;
    }
  }

  console.log(`Folder ${folderPath} complete: ${(totalBefore/1024/1024).toFixed(2)}MB -> ${(totalAfter/1024/1024).toFixed(2)}MB (saved ${((1 - totalAfter/totalBefore)*100).toFixed(1)}%)`);
}

async function run() {
  await optimizeFolder('src/images/galleryImages', 'src/images/galleryImages_backup');
  await optimizeFolder('src/components/Project_Images', 'src/components/Project_Images_backup');
  // sync to src/Project_Images as well if exists
  if (fs.existsSync('src/Project_Images')) {
    const files = fs.readdirSync('src/components/Project_Images');
    for (const f of files) {
      if (!f.startsWith('tmp_')) {
        fs.copyFileSync(path.join('src/components/Project_Images', f), path.join('src/Project_Images', f));
      }
    }
    console.log('Synchronized to src/Project_Images');
  }
}

run().catch(console.error);

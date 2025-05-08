const fs = require('fs');
const path = require('path');
const util = require('util');

const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);

async function findJsFiles(dirPath) {
  try {
    const files = await readdir(dirPath);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fullPath = path.join(dirPath, file);

      let fileInfo;
      try {
        fileInfo = await stat(fullPath);
      } catch (e) {
        console.error('stat error:', fullPath);
        continue;
      }

      if (fileInfo.isDirectory()) {
        await findJsFiles(fullPath);
      } else {
        const ext = path.extname(file);
        if (ext === '.js') {
          console.log(fullPath);
        }
      }
    }
  } catch (err) {
    console.error('read error at', dirPath, err.message);
  }
}

findJsFiles('test')

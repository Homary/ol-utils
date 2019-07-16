const path = require('path');
const fs = require('fs');

let filesPath = path.resolve(__dirname, '../../src/components/');
let srcPath = path.resolve(__dirname, '../../src/');

const readFilesPath = path => new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
        if(err) reject(err);

        resolve(files);
    })
})

const createInput = (path, data) => new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf8', err => {
        if(err) reject(err);

        console.log('入口文件已创建');
    })
})
readFilesPath(filesPath).then(data => {
    let str;

    data.map( file => {
        let name = file.split('.')[0];
        let iL = `import ${name} from '@/components/${file}`;
    })
})
// TODO: 
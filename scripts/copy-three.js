const fs = require('fs');
fs.mkdirSync('www', { recursive: true });
fs.copyFileSync('node_modules/three/build/three.min.js', 'www/three.min.js');
console.log('three.min.js kopiert');

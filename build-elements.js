const fsExtra = require('fs-extra');
const concat = require('concat');


(async function build() {
  const programName = process.argv.slice(2)[0];
  console.log(process.argv);
  if(programName === '' || programName === undefined) {
    return false;
  } else {
    const files = [
      './dist/' + programName + '/polyfill-webcomp-es5.js',
      './dist/' + programName + '/polyfill-webcomp.js',
      './dist/' + programName + '/polyfills.js',
    './dist/' + programName + '/scripts.js',
    './dist/' + programName + '/main.js'
  ];

  await fsExtra.ensureDir('./dist/' + programName + '/elements');
  await concat(files, './dist/'  + programName + '/elements' + '/elements.js');
  console.log('completed !!!!');
  }
})()

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

  await fsExtra.ensureDir('./completeApp/' + programName + '/elements');
  await fsExtra.ensureDir('./completeApp/' + programName + '/assets');
  await fsExtra.ensureDir('./dist/' + programName + '/assets');

  await concat(files, './completeApp/'  + programName + '/elements/' +programName + '-elements.js');
  console.log('completed !!!!');
  fsExtra.copy('./dist/'  + programName + '/assets', './completeApp/'  + programName + '/assets', function (err) {
    console.log('Copying Assets!!')
    if (err){
        console.log('An error occured while copying the folder.')
        return console.error(err)
    }
    console.log('Copy Assets completed!')
});
  }
})()

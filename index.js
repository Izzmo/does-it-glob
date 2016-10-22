let glob = require('glob');
let options = {
    cwd: getCwdParameter()
};

glob(getPatternParameter(), options, (er, files) => {
    console.log(files);
});


function getPatternParameter() {
    if (null != process.argv[2])
        return process.argv[2];
    else
        return null;
}

function getCwdParameter() {
    let cwd = process.cwd() + '/';

    if (null != process.argv[3])
        cwd += process.argv[3];
    
    return cwd;
}
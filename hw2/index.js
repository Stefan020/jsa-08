const fs = require('fs');

// fs.copyFile('../c03/data.txt', 'newText.txt', err => {
//     if(err){
//         return console.log(err);
//     }
//     console.log('Successfull copy!');
// });

const fileCopy = async(file,destination) => {
    return new Promise((success,fail) => {
        fs.copyFile(file,destination,err =>{
            if(err){
                return fail(err);
            }
            return success(file);
        });
    });
};


// fileCopy= ('../c03/data.txt', 'promisData.txt')
// .then(() => {
//     console.log('Promise copy!');
// })
// .catch(err => {
//     console.log(err);
// })

// fs.rename('newText.txt','eptenNovoIme.txt', (err) => {
//     if(err){
//         return console.log(err);
//     }
//     console.log("Renamed!");
// });

const renameFile = (file,newName) => {
    return new Promise((success,fail) => {
        fs.rename(file,newName,err =>{
            if(err){
                return fail(err);
            }
            return success(newName);
        });
    });
};

// renameFile('eptenNovoIme.txt','najnovo.txt')
// .then(() => {
//     console.log('Promis renamed!');
// })
// .catch(err => {
//     console.log(err);
// })

const combine = async() => {
    try {
        await fileCopy('../c03/data.txt', 'copyText.txt');
        await renameFile('copyText.txt', 'smenetoIme.txt');
    } catch (error) {
        console.log(error);
    };
};

combine();
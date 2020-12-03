const jsonf = require('../files');

const dataFile = './books.json';

const getAll = async () => {
    let data = await jsonf.readJSONFile(dataFile);
    return data;
};

const getOne = async (id) => {
    let data = await jsonf.readJSONFile(dataFile);
    let res = data.filter(b => b.id === Number(id));
    return res[0];
};

const save = async (booksData) => {
    let data = await jsonf.readJSONFile(dataFile);
    let id = data[data.length - 1].id + 1;
    booksData = {
        id,
        ...booksData
    };

    data = [
        ...data,
        booksData    
    ];
    await jsonf.writeJSONFile(dataFile, data);
    return booksData;
};

const update = async (id, booksData) => {
    let data = await jsonf.readJSONFile(dataFile);
    let changed = false;
    data = data.map(b => {
        if(b.id === Number(id)) {
            b = {...booksData, id: Number(id)};
            changed = true;
        }
        return b;
    });
    await jsonf.writeJSONFile(dataFile, data);
    return changed;
};

const updatePartial = async (id, booksData) => {
    let data = await jsonf.readJSONFile(dataFile);
    let changed = false;
    data = data.map(b => {
        if (b.id === Number(id)) {
            for(k in booksData) {
                b[k] = booksData[k];
            }
            changed = true;
        }
        return b;
    });
    await jsonf.writeJSONFile(dataFile, data);
    return changed;
};

const remove = async (id) => {
    let data = await jsonf.readJSONFile(dataFile);
    let changed = false;
    data = data.filter(b  => {
        if(b.id !== Number(id)) {
            changed = true;
            return true;
        }
        return false;
    });
    await jsonf.writeJSONFile(dataFile, data);
    return changed;
};

module.exports = {
    getAll,
    getOne,
    save,
    update,
    updatePartial,
    remove
};
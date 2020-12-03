const jsonf = require('../files');

const dataFile = './cars.json';

const getAll = async () => {
    let data = await jsonf.readJSONFile(dataFile);
    return data;
};

const getOne = async (id) => {
    let data = await jsonf.readJSONFile(dataFile);
    let res = data.filter(ca => ca.id === Number(id));
    return res[0];
};

const save = async (carsData) => {
    let data = await jsonf.readJSONFile(dataFile);
    let id = data[data.length - 1].id + 1;
    carsData = {
        id,
        ...carsData
    };

    data = [
        ...data,
        carsData    
    ];
    await jsonf.writeJSONFile(dataFile, data);
    return carsData;
};

const update = async (id, carsData) => {
    let data = await jsonf.readJSONFile(dataFile);
    let changed = false;
    data = data.map(ca => {
        if(ca.id === Number(id)) {
            ca = {...carsData, id: Number(id)};
            changed = true;
        }
        return ca;
    });
    await jsonf.writeJSONFile(dataFile, data);
    return changed;
};

const updatePartial = async (id, carsData) => {
    let data = await jsonf.readJSONFile(dataFile);
    let changed = false;
    data = data.map(ca => {
        if (ca.id === Number(id)) {
            for(k in carsData) {
                ca[k] = carsData[k];
            }
            changed = true;
        }
        return ca;
    });
    await jsonf.writeJSONFile(dataFile, data);
    return changed;
};

const remove = async (id) => {
    let data = await jsonf.readJSONFile(dataFile);
    let changed = false;
    data = data.filter(ca  => {
        if(ca.id !== Number(id)) {
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
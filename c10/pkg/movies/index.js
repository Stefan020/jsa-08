const mongoose = require('mongoose');

const Movies = mongoose.model(
    'movies',
    {
        name: String,
        year: Number,
        director: String,
        uid: String
    },
    'movies'
);

const save = async (data) => {
    let m = new Movies(data);
    return await m.save();
};

const getAll = async(uid) =>{
    let data = await Movies.find({ uid });
    return data;
};
module.exports = {
    save,
    getAll
};
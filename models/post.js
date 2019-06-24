const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema ({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
    }
}, {
    timestamps: true
});
schema.set('toJson',{
    virtual:true
});

module.exports = mongoose.model('Post',schema);
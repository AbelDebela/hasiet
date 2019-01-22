const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DesignationSchema = new Schema( 
    {
        ID: {
            type: String,
            required: false
        },
        FullName: {
            type: String,
            required: false
        },
        DateStart: {
            type: String,
            required: false
        },
        Active: {
            type: String,
            required: false
        },
        Story: {
            type: String,
            required: false
        },
        DOB: {
            type: String,
            required: false
        },
        LookupId: {
            type: String,
            required: false
        },
        DateAdded: {
            type: String,
            required: false
        },
        DateChanged: {
            type: String,
            required: false
        },
        AddedBy: {
            type: String,
            required: false
        },
        ChangedBy: {
            type: String,
            required: false
        },
    }
    );// The following line uses the above schema and create a table in Mongo Db 
    module.exports = designation = mongoose.model('designation', DesignationSchema);
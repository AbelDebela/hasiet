const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const AddressSchema = new Schema( 
    {
        ID: {
            type: String,
            required: false
        },
        SupporterId: {
            type: String,
            required: false
        },
        AddressBlock: {
            type: String,
            required: false
        },
        City: {
            type: String,
            required: false
        },
        State: {
            type: String,
            required: false
        },
        Country: {
            type: String,
            required: false
        },
        ZIPCode: {
            type: String,
            required: false
        },
        EmailAddress: {
            type: String,
            required: false
        },
        PhoneNumber: {
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
    module.exports = Address = mongoose.model('address', AddressSchema);
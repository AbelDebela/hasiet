const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SupporterSchema = new Schema( 
    {
        ID: {
            type: String,
            required: false
        },
        FullName: {
            type: String,
            required: false
        },
        Salutation: {
            type: String,
            required: false
        },
        LookupId: {
            type: String,
            required: false
        },
        IsDonor: {
            type: String,
            required: false
        },
        IsSponsor: {
            type: String,
            required: false
        },
        DesignationId: {
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
    module.exports = Supporter = mongoose.model('supporter', SupporterSchema);
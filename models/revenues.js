const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RevenueSchema = new Schema( 
    {
        ID: {
            type: String,
            required: false
        },
        SupporterId: {
            type: String,
            required: false
        },
        CollectionDate: {
            type: String,
            required: false
        },
        Amount: {
            type: String,
            required: false
        },
        TransactionType: {
            type: String,
            required: false
        },
        Description: {
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
    module.exports = Revenue = mongoose.model('revenue', RevenueSchema);
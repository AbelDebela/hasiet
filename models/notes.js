const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema( 
    {
        ID: {
            type: String,
            required: false
        },
        SupporterId: {
            type: String,
            required: false
        },
        StartDate: {
            type: String,
            required: false
        },
        NoteType: {
            type: String,
            required: false
        },
        Summary: {
            type: String,
            required: false
        },
        Comment: {
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
    module.exports = Note = mongoose.model('notes', NoteSchema);
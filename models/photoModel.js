import mongoose from "mongoose";
import validator from "validator";
mongoose.set('strictQuery',true);
var {Schema}= mongoose;
var photoSchema= new Schema({
    fileTitle:
    {
        type:String,
        required:[true,'Title is required'],
        // validate:[validator.isAlphanumeric,'Only alphanumeric character']
    },
    fileDescription:
    {
        type:String,
        required:[true,'Description is required'],
        // validate:[validator.isAlphanumeric,'Only alphanumeric character']
    },
    url:{
        type:String,
        // required:[true,'Title is required'],
    },
    imageID:{
        type:String,
    },
    createdTime:{
        type:String,
        default:Date.now
    },
    fileTempPath:{
        type:String
    }
});
var photoModel = mongoose.model('photoModel',photoSchema);
export default photoModel;
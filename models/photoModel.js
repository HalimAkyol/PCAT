import mongoose from "mongoose";
import validator from "validator";
mongoose.set('strictQuery',true);
var {Schema}= mongoose;
var photoSchema= new Schema({
    fileTitle:
    {
        type:String,
        required:[true,'Title is required'],
        validate:[validator.isAlphanumeric,'Only alphanumeric character']
    },
    fileDescription:
    {
        type:String,
        required:[true,'Description is required'],
        validate:[validator.isAlphanumeric,'Only alphanumeric character']
    },
    // fileTempPath:{
    //     type:String,
    //     require:true,
    //     trim:true,
    //     validate:[validator.isAlphanumeric,'is require']
    // },
    // url:{
    //     type:String
    // },
    // imageID:{
    //     type:String
    // }
});
var photoModel = mongoose.model('photoModel',photoSchema);
export default photoModel;
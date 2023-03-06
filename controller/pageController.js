import photoModel from "../models/photoModel.js";
import {v2 as cloudinary} from 'cloudinary';

var getIndex   = async (req,res)=>{
    var AllPhoto=await photoModel.find({}).sort('-createdTime');
    res.render('index',
    {
        AllPhoto,
        succeded:true
    });
}
var getAbout   = (req,res)=>{
    res.render('about');
}

var getContact = (req,res)=>{
    res.render('contact');
}

var getAddPhoto = async (req,res)=>{

    res.render('addPhoto');
} 

export { getIndex, getAbout, getContact,getAddPhoto}

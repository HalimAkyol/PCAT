import photoModel from "../models/photoModel.js";
import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

var createPhoto= async(req,res)=>{
               
    try {
        const photo = await photoModel.create({
            fileTitle: req.body.fileTitle,
            fileDescription: req.body.fileDescription,
        });
        photo.save();
        res.status(200).json({photo});
        res.redirect('/photos');
    } catch (err) {
        let errorMessage = {};
        if (err.name == 'ValidationError') {
            Object.keys(err.errors).forEach((key) => {
                errorMessage[key] = err.errors[key];
            });
            res.status(500).json({
                succeded: false,
                errorMessage
            })
        }
    }        
}

 var getAllPhoto =async (req,res)=>{
    var AllPhoto=await photoModel.find({});
    res.render('photos',
    {
        AllPhoto
    });
}

var readMore= async(req,res)=>{
    var photoId= req.query.id;
   var singlePhoto= await photoModel.findOne({_id:photoId});
   let AllPhoto = await photoModel.find({_id:{$ne:photoId}});

    res.render('read_more',
    {
        singlePhoto,
        AllPhoto
    });
    
}

var updatePhoto = async (req, res) => {

    if (req.files) {
        let singlePhoto = await photoModel.findById({ _id: req.body.hiddenId });
        await cloudinary.uploader.destroy(singlePhoto.imageID);
        let updateResult = await cloudinary.uploader.upload(
            req.files.image.tempFilePath,
            {
                use_filename: true,
                folder: 'PCAT'
            });
        fs.unlinkSync(singlePhoto.fileTempPath);

        singlePhoto.fileTitle = req.body.fileTitle;
        singlePhoto.fileDescription= req.body.fileDescription;
        singlePhoto.url = updateResult.secure_url;
        singlePhoto.fileTempPath = req.files.image.tempFilePath;
        singlePhoto.imageID = updateResult.public_id;
        singlePhoto.save();
        res.status(201).redirect(`/photos/read-more?id=${req.body.hiddenId}`);
    } else {
        let singlePhoto = await photoModel.findById({ _id: req.body.hiddenId });
        singlePhoto.fileTitle = req.body.fileTitle;
        singlePhoto.fileDescription= req.body.fileDescription;
        singlePhoto.save();
        res.status(201).redirect(`/photos/read-more?id=${req.body.hiddenId}`);
    }
}
var deletePhoto= async (req,res)=>{

//    let deleteCloud= await photoModel.findById({_id:req.query.id});
//     await cloudinary.uploader.destroy(deleteCloud.imageID);
    await photoModel.deleteOne({ _id:req.query.id}).then(() => {

        // fs.unlinkSync(deleteCloud.fileTempPath);
        console.log('deleted picture');
        res.redirect('/photos');

    }).catch((err) => {
        console.log(err.name);
    });
};


export {createPhoto,getAllPhoto,readMore,updatePhoto,deletePhoto};
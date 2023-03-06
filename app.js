import express from 'express';
var app = express();

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import routePage from './routes/routePage.js';
import routePhoto from'./routes/routePhoto.js';
import { v2 as cloudinary} from 'cloudinary';
import fileUpload from 'express-fileupload';

dotenv.config();
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_SECRET
});
mongoose.connect('mongodb://localhost:27017/PCAT',(err,db)=>{
    if (!err) {
        console.log('connect to PCAT');        
    }else{console.log('disconnect to PCAT');}
});
app.set('view engine','ejs');
app.use(express.static('public'));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(fileUpload({useTempFiles:true}));

app.use('/', routePage);
app.use('/photos',routePhoto);

app.listen(process.env.PORT || 3000);
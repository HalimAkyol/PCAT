import express from 'express';
import routePage from './routes/routePage.js';
import routePhoto from'./routes/routePhoto.js';
import mongoose from 'mongoose';
import { v2 as cloudinary} from 'cloudinary';
import fileUpload from 'express-fileupload';
import dotenv from 'dotenv';

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

var app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','ejs');
app.use(fileUpload({useTempFiles:true}));
app.use('/', routePage);
app.use('/photos',routePhoto);

app.listen(3000);
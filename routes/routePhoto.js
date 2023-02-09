import express from "express";
import * as photoController  from '../controller/photoController.js';
var Route = express.Router();
Route.route('/').get(photoController.getAllPhoto);
Route.route('/create').post(photoController.createPhoto);
Route.route('/read-more/').get(photoController.readMore);
Route.route('/update').post(photoController.updatePhoto);
Route.route('/deletePhoto').get(photoController.deletePhoto);

export default Route;
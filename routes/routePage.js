import express from 'express';
import * as pageController from '../controller/pageController.js';

var Router = express.Router();
Router.route('/').get(pageController.getIndex);
Router.route('/index').get(pageController.getIndex);
Router.route('/about').get(pageController.getAbout);
Router.route('/contact').get(pageController.getContact);

export default Router;
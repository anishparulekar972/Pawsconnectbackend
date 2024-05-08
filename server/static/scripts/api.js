const express = require('express');
const apiController = require('../controllers/api')

const router = express.Router();




router.post('/login', apiController.login);

router.post('/register', apiController.register);

router.post('/addPetProfile', apiController.addPetProfile);

router.delete('/removePetProfile', apiController.removePetProfile);

router.post('/createPost', apiController.createPost);

router.post('/user', apiController.getUserProfile);

router.post('/pet_profiles', apiController.getPetProfile);

router.post('/getPosts', apiController.getPosts);

router.post('/updateUserProfile', apiController.updateUserProfile);

router.post('/updatePetProfile', apiController.updatePetProfile);

router.post('/getPetProfile', apiController.getPetProfile);

router.post('/translateText', apiController.translateText);




module.exports = router;

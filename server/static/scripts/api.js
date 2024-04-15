const express = require('express');
const apiController = require('../controllers/api')

const router = express.Router();




router.post('/login', apiController.login);

router.post('/register', apiController.register);

router.post('/addPetProfile', apiController.addPetProfile);

router.delete('/removePetProfile', apiController.removePetProfile);

router.post('/createPost', apiController.createPost);



module.exports = router;

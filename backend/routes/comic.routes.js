const express = require('express');
const router = express.Router();
const {findAll, insert, deleteOne} = require ('../controllers/comic.controller');
const {isAuthenticated, isAdmin} =require ('../middlewares/auth.middleware'); 

router.get( '/', isAuthenticated, findAll);
router.post('/', isAdmin, insert);
router.delete('/:id', isAdmin, deleteOne);

module.exports = router;

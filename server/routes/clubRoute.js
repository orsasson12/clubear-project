const express = require('express');
const router = express.Router();
const AuthMid = require('../middleware/auth')
const { getClubs, postClub, getSingleClub, deleteClub, updateClub } = require('../controllers/clubController')

router.get('/clubs', getClubs)
router.get('/:clubId', getSingleClub)


router.post('/postClub', AuthMid, postClub)
router.patch('/:clubId', AuthMid, updateClub)
router.delete('/:clubId', AuthMid, deleteClub)
module.exports = router;


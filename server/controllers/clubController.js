const Club = require('../model/Club.model')
const mongoose = require('mongoose')

const getClubs = async (req, res) => {
    try {
        const Clubs = await Club.find();
        console.log(Clubs);
        res.json(Clubs)
    } catch (error) {
        console.log(error);
        res.json({ message: `from clubs ${error}` })
    }
}

const getSingleClub = async (req, res) => {
    try {
        const singleClub = await Club.findById(req.params.clubId)
        res.json(singleClub)
    } catch (error) {
        res.json({ message: error });
    }
}
const postClub = async (req, res) => {

    try {
        const newClub = new Club(req.body)
        // clubImg: req.file.path.replace('\\', '/'),
        const club = await newClub.save()
        res.json(club)
    } catch (error) {
        console.log(error, 'from postClub');
    }
}

const deleteClub = async (req, res) => {
    const { clubId: _id } = req.params;
    try {
        await Club.findByIdAndRemove(_id)
        res.json({
            message: 'post DELETED Successfully'
        })

    } catch (error) {
        res.json({ message: error });
    }
}

const updateClub = async (req, res) => {
    const { clubId: _id } = req.params;
    const club = req.body
    console.log(club);
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')
    // const updatedClub = await Club.findByIdAndUpdate(_id, { ...club, clubImg: req.file?.path.replace('\\', '/') }, { new: true })
    Club.findByIdAndUpdate(_id, club, (err, doc) => {
        if (err) {
            console.log(err);
            res.status(500).send('error')
        }
        console.log('club:', doc);
        res.json(doc)
    })
}

module.exports = { getClubs, getSingleClub, postClub, deleteClub, updateClub }
const Comic = require("../models/comic.model")


async function findAll (req, res){
    try {
        const  comics = await Comic.find()
        return res.json(comics);
    } catch (error) {
        console.log (error);
        return res.status(500).json({msg:"Error in displaying the comic collection!"});
    }
}

async function insert (req, res){
    try {
        const newComic = new Comic({
            title: req.body.title, 
            number: req.body.number, 
            published:req.body.published, 
            synopsis:req.body.synopsis,
            series:req.body.series,
            writer:req.body.writer,
            penciler:req.body.penciler,
            cover:req.body.cover
        });

        await newComic.save();
        return res.json({msg:"new comic added!"})
    } catch (error) {
        console.log (error);
        return res.status(500).json({msg:"Error to adding comic!"});
    }
}

async function deleteOne (req, res){
    try {
        await Comic.findByIdAndDelete(req.params.id);
        return res.json({msg: "Comic deleted"});
    } catch (error) {
        console.log (error);
        return res.status(500).json({msg:"Error to delete comic!"});
    }
}

module.exports = {
    findAll,
    insert,
    deleteOne,
}
import Saucer from "../Models/Saucer.js";

const getsSaucers = async(req, res) => {
    try {
        const saucers = await Saucer.find({}).catch((error) => {
            return res.status(400).json({success: false, message: "Error in the find of the saucers"})
        })
        if(!saucers || saucers==null) return res.status(404).json({success: false, message: "The Saucers not foun in the database"})
        return res.status(200).json({success: true, data: saucers})
    } catch (error) {
        console.log(`An error has ocurred in the server :( ${error}`)
    }
}


export default {
    getsSaucers
}
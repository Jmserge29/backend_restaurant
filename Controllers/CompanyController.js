import Company from "../Models/Company.js";

export const getCompanyInformation = async(req, res) => {
    try {
        const rest = await Company.findOne({})
        if(!rest) return res.status(400).json({success: false, message: "The company hasn't been created!"})
        return res.status(200).json({success: true, data: rest})
    } catch (error) {
        console.log("An error has ocurred in the server:(", error)
    }
}
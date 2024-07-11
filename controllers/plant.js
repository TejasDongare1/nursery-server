import Plant from "./../models/Plant.js"


const postPlant = async (req, res) => {
    const {
        name,
        category,
        image,
        price,
        description
    } = req.body



    const newPlant = new Plant({
        name: name,
        category: category,
        image: image,
        price: price,
        description: description
    })

    const savedPlant = await newPlant.save();



    res.json({
        success: true,
        message: "New Plant added successfully",
        data: savedPlant
    })
}

const getPlants = async (req, res) => {

    const allPlants = await Plant.find()

    res.json({
        success: true,
        message: "All Plants",
        data: allPlants
    })
}

const getPlantId = async (req, res) => {
    const { id } = req.params

    const plant = await Plant.findById(id)

    res.json({
        success: plant ? true : false,
        data: plant || null,
        message: plant ? "plant fetched successfully" : "plant not found"

    })
}

const putPlantId = async (req, res) => {
    // update plant
    const {
        name,
        category,
        image,
        price,
        description
    } = req.body




    const { id } = req.params

    const updateResult = await Plant.updateOne({_id:id},{
        $set:{
            name: name,
            category: category,
            image: image,
            price: price,
            description: description
        }
    })

    const updatedPlant = await Plant.findById(id)

    res.json({
        success: true,
        message: "Plant updated successfully",
        data: updatedPlant
    })

   
   
}

const deletePlantId = async (req, res) => {

    const { id } = req.params

    await Plant.deleteOne({
        _id:id
    })

    res.json({
            success: true,
            message: "Plant deleted successfully",
            data: null
        })
    }





export {
    postPlant,
    getPlants,
    getPlantId,
    putPlantId,
    deletePlantId
}

// this is temporary db
const plants = [
    {
        "id": 5,
        "name": "Bamboo",
        "category": "Flowering Plant",
        "image": "https://example.com/bamboo.jpg",
        "price": 50,
        "description": "Bamboo is a tropical plant native to China, Indonesia, and Taiwan."
    },
    {
        "id": 2,
        "name": "rose",
        "category": "Flowering Plant",
        "image": "https://example.com/bamboo.jpg",
        "price": 50,
        "description": "Bamboo is a tropical plant native to China, Indonesia, and Taiwan."
    },
    {
        "id": 8,
        "name": "marigold",
        "category": "Flowering Plant",
        "image": "https://example.com/bamboo.jpg",
        "price": 50,
        "description": "Bamboo is a tropical plant native to China, Indonesia, and Taiwan."
    }
]

const postPlant = (req, res) => {
    const {
        name,
        category,
        image,
        price,
        description
    } = req.body

    if (!name) {
        return res.json({
            success: false,
            data: null,
            message: "Name is required"
        })
    }

    if (!category) {
        return res.json({
            success: false,
            data: null,
            message: "category is required"
        })
    }

    if (!image) {
        return res.json({
            success: false,
            data: null,
            message: "image URL is required"
        })
    }

    if (!price) {
        return res.json({
            success: false,
            data: null,
            message: "price is required"
        })
    }

    if (!description) {
        return res.json({
            success: false,
            data: null,
            message: "description is required"
        })
    }

    const randomId = Math.round(Math.random() * 10000)

    const newPlant = {
        id: randomId,
        name: name,
        category: category,
        image: image,
        price: price,
        description: description
    }

    plants.push(newPlant)

    res.json({
        success: true,
        message: "New Plant added successfully",
        data: newPlant
    })
}

const getPlants =  (req, res) => {
    res.json({
        success: true,
        message: "All Plants",
        data: plants
    })
}

const getPlantId = (req, res) => {
    const { id } = req.params

    const plant = plants.find((p) => {
        return p.id == id
    })

    res.json({
        success: plant ? true : false,
        data: plant || null,
        message: plant ? "plant fetched successfully" : "plant not found"

    })
}

const putPlantId = (req, res) => {
    // update plant
    const {
        name,
        category,
        image,
        price,
        description
    } = req.body




    const { id } = req.params

    let index = -1

    plants.forEach((plant, i) => {
        if (plant.id == id) {
            index = i
        }
    })

    const newObj = {
        id: id,
        name: name,
        category: category,
        image: image,
        price: price,
        description: description
    }
    if (index == -1) {
        return res.json({
            success: false,
            data: null,
            message: `plant not found for id ${id}`
        })
    }
    else {
        plants[index] = newObj
        return res.json({
            success: true,
            message: "Plant updated successfully",
            data: newObj
        })
    }
}

const deletePlantId = (req, res) => {

    const {id} = req.params

    let index = -1

    plants.forEach((plant, i) => {
        if (plant.id == id) {
            index = i
        }
    })
    if (index == -1) {
        return res.json({
            success: false,
            data: null,
            message: `plant not found for id ${id}`
        })
    }
    else{
        plants.splice(index, 1)
        return res.json({
            success: true,
            message: "Plant deleted successfully",
            data: null
        })
    }
    

 
}

export {
    postPlant,
    getPlants,
    getPlantId,
    putPlantId,
    deletePlantId
 }

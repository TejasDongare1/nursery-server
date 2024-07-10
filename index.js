import express from "express"
import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose";

import { getHealth } from "./controllers/health.js";
import {
    postPlant,
    getPlants,
    getPlantId,
    putPlantId,
    deletePlantId
} from "./controllers/plant.js";
import { handlePageNotFound } from "./controllers/errors.js";

const app = express();
app.use(express.json())

const  dbConnection = async() => {
    const connected = await mongoose.connect(process.env.MONGO_URL)

    if(connected){
        console.log(`MongoDB Connected📦`)
    }
    else{
        console.log(`MongoDB connection failed ❌`)
    }
}

dbConnection()

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

app.get("/health", getHealth)

app.post("/plant", postPlant)

app.get("/plants", getPlants)

app.get("/plant/:id", getPlantId)

app.put("/plant/:id", putPlantId)

app.delete("/plant/:id", deletePlantId)

app.use("*", handlePageNotFound)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


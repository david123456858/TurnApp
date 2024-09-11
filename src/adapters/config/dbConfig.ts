import { MongoClient, ServerApiVersion } from "mongodb";

export const URI = "mongodb+srv://juandavidperaltafuentes:AOVwBcd4U2umAdKt@turnapp.rrizk.mongodb.net/?retryWrites=true&w=majority&appName=TurnApp";

export const client = new MongoClient(URI,{
    serverApi:{
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})
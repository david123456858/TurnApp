import { MongoClient,ServerApiVersion } from "mongodb"

const URI = "mongodb+srv://juandavidperaltafuentes:AOVwBcd4U2umAdKt@turnapp.rrizk.mongodb.net/?retryWrites=true&w=majority&appName=TurnApp";

const client = new MongoClient(URI,{
    serverApi:{
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

export const connection = async()=>{
    try {
        await client.connect()
        await client.db('TurnApp').command({ping:1})
    } catch (error) {
        console.log('Not connection'+error);
    }finally{
        await client.close()
    }
}
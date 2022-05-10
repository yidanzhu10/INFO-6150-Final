const { MongoClient } = require('mongodb');

async function main() {

    const uri = "mongodb+srv://Info6150Final:info6150final@cluster0.vwjsj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoClient(uri);
    try{
        await client.connect();

        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    
    

}

async function createListing(client, newListing){
    client.db("User").collection("information").insertone(newListing);
}

main().catch(console.error);

 async function listDatabases(client){
    const databaseList = await client.db().admin().listDatabases();

    console.log("Databases");
    databaseList.databases.forEach(db => {
        console.log(`- ${db.name}`)
    });
}
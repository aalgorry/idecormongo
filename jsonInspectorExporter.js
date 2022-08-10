async function insertMap(map) {
    try {
        const database = client.db("idecorMaps");
        const maps = database.collection("maps");
        // create a document to insert
        const result = await maps.insertOne(map);
        console.log(`A map was inserted with the _id: ${result.insertedId}`);
    } finally {

    }
}
import {
    getJsonInspectorConfig
} from './jsonInspectorConfig.js'
//Configuro vars globales para compatibilidad de Coconut
global.location = {
    protocol: "",
    hostname: ""
}
global.window = {}
window.location = location
const configObj = getJsonInspectorConfig()


//grabo
import {
    createRequire
} from 'module';
const require = createRequire(
    import.meta.url);

const {
    MongoClient
} = require("mongodb");
//Conexion database
//const uri="mongodb://idecor:QetAdg13@localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-256"
const uri = "mongodb://idecor:QetAdg13@172.16.0.200:27017/"
const client = new MongoClient(uri);
const mapNames = Object.keys(configObj)
var newConfig = []
var idCounter = 1
//console.log(mapNames)
mapNames.forEach((mapName) => {

    var map = configObj[mapName]
    //console.log(map)

    map["mapTitle"] = mapName
    map["id"] = idCounter
    //refactorizo las capas
    var layers = []
    const layerNames = Object.keys(map.layers)
    layerNames.forEach((layerName) => {
        var layer = map.layers[layerName]
        layer["name"] = layerName

        //refactorizo los filtros
        var filters = []
        if (layer["filters"]) {

            const filterNames = Object.keys(layer.filters)
            filterNames.forEach((filterName) => {
                var filter = layer.filters[filterName]
                filter["name"] = filterName
                filters.push(filter)
            })
            layer.filters = filters
        }

        if (layer["attributeDictionary"]) {
            //refactorizo los atributos
            var attrs = []
            const attrNames = Object.keys(layer.attributeDictionary)
            attrNames.forEach((attrName) => {
                var attr = layer.attributeDictionary[attrName]
                if (typeof attr === "string") {
                    var newattr = {}
                    newattr["label"] = attr
                    newattr["key"] = attrName
                    attrs.push(newattr)
                } else {
                    attr["key"] = attrName
                    attrs.push(attr)
                }
            })
            layer.attributeDictionary = attrs
        }
        layers.push(layer)
    })
    map.layers = layers
    idCounter++
    newConfig.push(map)
    insertMap(map).catch(console.dir);


});
const fs = require('fs');
//const configJSON = JSON.stringify(getJsonInspectorConfig())
try {
    fs.writeFileSync('jsoninspectorconfig.json', JSON.stringify(newConfig));
    // file written successfully
} catch (err) {
    console.log(err);
}
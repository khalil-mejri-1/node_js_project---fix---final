

const { Collection } = require("mongoose");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the user)
const dvoireSchema = new Schema({
  branche:String,
  semester:String,
  matiere:String,
 ds_examin:String,
 anner:Number,
 link_telecharger:String,
 
 
});
 
 
// Create a model based on that schema
const dvoire = mongoose.model("dvoire", dvoireSchema);
 
 
// export the model
module.exports = dvoire;

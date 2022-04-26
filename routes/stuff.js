const express = require("express");
const route = express.Router();
const stuffControllers = require("../controllers/stuff.js"); 

route.get("/",stuffControllers.get_Etat);
route.patch("/",stuffControllers.modifyEtat);
route.patch("/action" , stuffControllers.modifyEtatAction);
//route.get("/etat/:temp" , stuffControllers.modifyEtatParams);
module.exports = route;  
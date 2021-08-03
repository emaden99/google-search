
const express = require("express"),
router = express.Router() ,
routes =require('../controllers/controllers')

router.get("/",routes.controllers)

module.exports = router  
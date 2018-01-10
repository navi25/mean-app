var express = require('express');
var hotelsCntrl = require("../controllers/hotels.controller");

var router = express.Router();

router
    .route('/hotels')
    .get(hotelsCntrl.hotelsGetAll);

router
    .route('/hotels/:hotelId')
    .get(hotelsCntrl.hotelsGetOne);

router
    .route('/hotels/new')
    .post(hotelsCntrl.hotelsAddOne);




module.exports = router;


const express = require('express');
const { getBootcamp, getBootcamps, createBootcamp, updateBootcamp, deleteBootcamp } = require('../controllers/bootcamps');
const router = express.Router();

router
    .route('/bootcamps')
    .get(getBootcamps)
    .post(createBootcamp);

router
    .route('/bootcamps/:id')
    .get(getBootcamp)
    .put(updateBootcamp)
    .delete(deleteBootcamp);

module.exports = router;

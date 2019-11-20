const express = require('express');
const router = express.Router();

router.get('/bootcamps', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Show all bootcamps'
    });
});

router.get('/bootcamps/:id', (req, res) => {
    res.status(200).json({
        success: true,
        message: `bootcamp with id ${req.params.id}`
    });
});

router.post('/bootcamps', (req, res) => {
    res.status(201).json({
        success: true,
        message: 'Create bootcamp'
    });
});

router.put('/bootcamps/:id', (req, res) => {
    res.status(201).json({
        success: true,
        message: `Update bootcamp with id ${req.params.id}`
    });
});

router.delete('/bootcamps/:id', (req, res) => {
    res.status(200).json({
        success: true,
        message: `Delete bootcamp with id ${req.params.id}`
    });
});
module.exports = router;

const Bootcamp = require('../models/Bootcamp');

exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();

        res.status(200).json({
            success: true,
            data: bootcamps
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error
        });
    }
};

exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);

        if (!bootcamp) {
            return res.status(400).json({
                success: false
            });
        }

        res.status(200).json({
            success: true,
            data: bootcamp
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error
        });
    }
};

exports.createBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);
        res.status(201).json({
            success: true,
            message: 'Created bootcamp successfully',
            data: bootcamp
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error
        });
    }
};

exports.updateBootcamp = (req, res, next) => {
    res.status(201).json({
        success: true,
        message: `Update bootcamp with id ${req.params.id}`
    });
}

exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Delete bootcamp with id ${req.params.id}`
    });
}
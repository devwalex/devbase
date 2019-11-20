
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'Show all bootcamps'
    });
};

exports.getBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `bootcamp with id ${req.params.id}`
    });
};

exports.createBootcamp = (req, res, next) => {
    res.status(201).json({
        success: true,
        message: 'Create bootcamp'
    });
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
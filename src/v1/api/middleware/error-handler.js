const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err);
    res.status(500).json({ msg: 'their was an error' });
};

export default errorHandlerMiddleware;
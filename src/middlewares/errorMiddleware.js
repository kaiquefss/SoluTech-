const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Erro interno do servidor.";

    return res.status(statusCode).json({
        status: "error",
        statusCode,
        message
    });
};

export default errorMiddleware;
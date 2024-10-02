import { ErrorRequestHandler, RequestHandler } from "express";

// Aqui passamos o type RequestHandler
// Em seguida usamos o res apontamos o status e criamos um JSON
export const notFoundRequest: RequestHandler = (req, res) => {
    res.status(404).json({ error: 'Pagina Não encontrada' })
}

// Aqui passamos o type ErrorRequestHandler
// Em seguida usamos o res apontamos o status e criamos um JSON
export const errorhandler: ErrorRequestHandler = (err, req, res, next) => {
    console.log("🚀 ~ err:", err)
    res.status(500).json({ error: 'Ocorreu um erro, volte mais tarde' })
}
import { Request, Response, NextFunction } from 'express';

// Aqui passamos o type RequestHandler
// Em seguida usamos o res apontamos o status e criamos um JSON
// export const notFoundRequest: RequestHandler = (req, res) => {
//     res.status(404).json({ error: 'Pagina Não encontrada' })
// }

// Aqui passamos o type ErrorRequestHandler
// Em seguida usamos o res apontamos o status e criamos um JSON
export const errorhandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Erro interno do servidor' });
};


export const notFoundRequest = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ error: 'Rota não encontrada' });
};
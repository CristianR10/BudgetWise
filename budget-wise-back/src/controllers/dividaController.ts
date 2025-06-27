import { Request, Response } from 'express';
import { db, Divida } from '../server';

// Interface para tipar os parâmetros da rota
interface DividaParams {
  id: string;
}

export const getDividas = (req: Request, res: Response) => {
  db.all('SELECT * FROM dividas', [], (err: Error | null, rows: Divida[]) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
};

export const createDivida = (req: Request, res: Response) => {
  const { nome, valor_total, parcelas }: Divida = req.body;
  if (!nome || !valor_total || !parcelas) {
    res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    return;
  }
  db.run(
    'INSERT INTO dividas (nome, valor_total, parcelas, parcelas_pagas) VALUES (?, ?, ?, ?)',
    [nome, valor_total, parcelas, 0],
    function (err: Error | null) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID });
    }
  );
};

export const updateDivida = (req: Request<DividaParams>, res: Response) => {
  const { parcelas_pagas }: { parcelas_pagas: number } = req.body;
  const { id } = req.params;
  db.run(
    'UPDATE dividas SET parcelas_pagas = ? WHERE id = ?',
    [parcelas_pagas, id],
    function (err: Error | null) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: 'Dívida atualizada com sucesso' });
    }
  );
};
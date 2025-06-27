import express, { Express, Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import path from 'path';
import sqlite3 from 'sqlite3';
import router from './routes';
import { errorhandler, notFoundRequest } from './routes/errorhandler';

// Usar process.cwd() para definir __dirname
const __dirname: string = process.cwd();

// Interface para tipagem
interface Divida {
  id?: number;
  nome: string;
  valor_total: number;
  parcelas: number;
  parcelas_pagas: number;
}

const server: Express = express();

// Helmet para segurança
server.use(helmet());

// Middlewares para parsing
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos
server.use(express.static(path.join(__dirname, 'public')));

// Conectar ao banco de dados SQLite
const db: sqlite3.Database = new sqlite3.Database(':memory:', (err: Error | null) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite.');
  }
});

// Criar tabela de dívidas
db.run(`
  CREATE TABLE IF NOT EXISTS dividas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    valor_total REAL NOT NULL,
    parcelas INTEGER NOT NULL,
    parcelas_pagas INTEGER DEFAULT 0
  )
`);

// Rotas
server.use('/', router);

// Handlers de erro
server.use(notFoundRequest);
server.use(errorhandler);

// Iniciar o servidor
server.listen(3002, '0.0.0.0', () => {
  console.log('Servidor rodando em http://localhost:3002');
  console.log('Acesse pelo IP da máquina na rede local, ex: http://192.168.1.x:3002');
});

export { db, Divida };
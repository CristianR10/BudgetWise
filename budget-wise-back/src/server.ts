import express from "express";
import helmet from "helmet";
import path from "path";
import router from "./routes";
import { errorhandler, notFoundRequest } from "./routes/errorhandler";


const server = express()
// Helmet ajuda a prevenir ataques baseados em cabeçalhos HTTP, como ataques XSS e cliques em links maliciosos
server.use(helmet())
// o express.json diz para o cliente como ele ira visualizar os dados
server.use(express.json())
// Aqui colocamos os tipos de requisição GET, PUT, POST
server.use(express.urlencoded({ extended: true }))
// Aqui liberamos a pasta public
server.use(express.static(path.join(__dirname, '../public')))

server.use('/', router)

server.use(notFoundRequest)
server.use(errorhandler)

server.listen(3002, () => {
    console.log('esta funcionando http://localhost:3002')
})
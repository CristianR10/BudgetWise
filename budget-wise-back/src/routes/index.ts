import express from 'express'

const router = express.Router();

// Como criar uma rota estatica
// router.get('/teste', (req, res) => {    
//     res.json({ cristian: true })
// })


router.get('/', (req, res) => {
    let name = "cris"
    let age = 31

    res.json({ name, age })
})

export default router;
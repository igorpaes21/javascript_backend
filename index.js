import express from "express";

const app = express()
const port = 3000

app.get('/api', (req, res) => {
    const nome  = req.query.nome
    res.json({message:`Você passou uma query ${nome}`});
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta porta ${port}`)
})
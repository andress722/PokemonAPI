const express = require('express')
const app = express()
const port = process.env.PORT  || 3000

const pokemons = require('./src/pokemons/pokemons.json')

app.get('/pokemons', (req,res)=> {
    return res.json(pokemons)
})

app.listen(port, ()=> {
        console.log('servidor rodando')
})
const PORT = 9001
const URLDB = 'mongodb://127.0.0.1:27017/'

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('./models/User')
const Product = require('./models/Product')

const app = express()
 
app.use(cors())
app.use(express.json())


app.post('/registration', async (req, res) => {
    console.log(req.body)
    const {login, password, email} = req.body
    const user = new User({login, password, email})
    await user.save()
    res.json({
        message:'Вы успешно зарегистрированы!'
    })
})


app.post('/login',async (req, res) => {
    console.log(req.body)
    const {login, password} = req.body
    const user = await User.findOne({login})
    if(!user){
        return res.status(400).json({message: 'Неверный логин или пароль'})
    }
    if( !user.password !== password){
        return res.status(400).json({message: 'Неверный логин или пароль'})
    }
    res.json({
        message:'Вы успешно авторизованы!'
    })
})

app.get('/products', (req, res) => {

    const products = [
        {id: 1, header: 'Товар1', price: 120},
        {id: 2, header: 'Товар2', price: 1240},
        {id: 3, header: 'Товар3', price: 2120},
        {id: 4, header: 'Товар4', price: 12670},
        {id: 5, header: 'Товар5', price: 1240},
        {id: 6, header: 'Товар6', price: 1400},
      ]

   
    res.json({
        data: products
    
    })
})



const start = async () => {
    try{
        await mongoose.connect(URLDB, { authSource: "admin"})
       app.listen(PORT, () => console.log(`Сервер запущен на порте ${PORT}` ))
    } catch (e) {
        console.log(e)
    }
}

start()
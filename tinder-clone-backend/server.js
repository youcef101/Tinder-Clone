import express from 'express'
import mongoose from 'mongoose'
import cards from './DBCards.js'
import Cors from 'cors'
import dotenv from 'dotenv'
//app config
dotenv.config()
const app = express();
const port = process.env.PORT || 8001
const MONGO_URL = process.env.CONNECTION_URL
//Middlewares
app.use(express.json());
app.use(Cors());
//DB config
mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})
    .then(console.log('connected to mongoDB !!!'))
    .catch(err => console.log(err))

//API Endpoints
app.get('/', (req, res) => {
    res.status(200).send('HELLO YOUCEF ARE YOU OK!!!');
})
app.post('/tinder/card', (req, res) => {
    const DBCard = req.body;
    cards.create(DBCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })

})

app.get('/tinder/card', (red, res) => {

    cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})
//Listener
app.listen(port, () => {
    console.log(`listening on localhost:${port}`);
})
import express from 'express';
import dotenv from 'dotenv';
import db from './config/db.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import Get from './modules/getter.js';
import postDB from './modules/postInfo.js';
import deleteDB from './modules/deleteInfo.js';
import PutUserDB from './modules/put.js';
dotenv.config({path:'./config/.env'})
const app = express();
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', Get)
app.post('/post', postDB)
app.patch('/update', PutUserDB)
app.delete('/:id', deleteDB)
db()
























const PORT = process.env.PORT || 8000
app.listen(PORT , (err) => err ? console.error(err) : console.log(`http://localhost${PORT}`))
export default app;
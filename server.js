import express from 'express';
import { APP_PORT } from './config'
const app = express();




app.get('/',(req, res) => {
    res.send("Hi this is server ehy");
    res.end();
})




app.listen(APP_PORT,()=> console.log(`listening on port ${APP_PORT}`));
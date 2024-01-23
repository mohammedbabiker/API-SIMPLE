import express from "express";
import { StatusCodes } from 'http-status-codes';

const app = express();
const port = 3000;

// localhost:3000/
app.get('/', (req, res) => {
    res.status(StatusCodes.CREATED);
    res.send('hello, You!');
});

app.listen(port, () => {
    console.log(`hey, go to http://localhost:${port}`);
})


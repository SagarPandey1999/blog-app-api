import express from 'express';

const app = express();

const port = 5000;

app.listen(port, () => {
    console.log('App is now running at port ', port)
})
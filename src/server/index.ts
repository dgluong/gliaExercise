import express from 'express';
import { json } from 'body-parser';
import { boredRouter } from './routes/bored'

const app = express();
app.use(json());
app.use(boredRouter);

app.listen(3000, () => {
    console.log("server listening on port 3000")
});


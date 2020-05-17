const express = require('express');

const app = express();

const petRouter = require('./routes/petRouter');
const userRouter = require('./routes/userRouter');

app.use(express.json());
app.use('/user', userRouter);
app.use('/pet', petRouter);

app.listen(3000);

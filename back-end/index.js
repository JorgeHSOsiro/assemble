const express = require('express');
const cors = require('cors');

const userRouter = require('./routers/userRouters');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/', userRouter);

app.listen(port, () => console.log(`API rodando na porta ${port}`));

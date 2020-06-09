const express = require('express');
const route = require('./routes');

const { host, port } = require('./config');

const app = express();

app.use(express.json());
app.use(route);

app.listen(port, () => {
    console.log(`Listening on  ${host}:${port}`)
});

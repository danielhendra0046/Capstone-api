const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes')

app.use(cors({
    origin: '*'
}));

app.use(routes);
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening to ${port} ...`))




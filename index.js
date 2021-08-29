const express = require('express');
const app = express();


app.use(express.json());

require('./routes/dialogFlowRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
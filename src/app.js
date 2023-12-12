const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/routes');
const errorHandlers = require('./middlewares/errorHandlers');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/products', router);

// Error handling middleware
app.use(errorHandlers.handleNotFound);
app.use(errorHandlers.handleErrors);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

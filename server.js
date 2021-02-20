const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}!`);
});
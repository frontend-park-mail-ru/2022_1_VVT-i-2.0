'use strict';

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'public')));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server listening port ${port}`));

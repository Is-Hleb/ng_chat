const express = require('express');
const api = express.Router();

import {UserRouter} from './routes/user.routes'

api.use('/user', UserRouter);

export {api};

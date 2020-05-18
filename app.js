const logger = require('./logger');
const path = require('path');

let pathObj = path.parse(__filename);

logger.readpath(pathObj);
logger.dir;
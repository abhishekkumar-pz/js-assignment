const express = require('express');
const helper = require("./src/lib/helper");
const config = require('./config/config');
const bodyParser = require('body-parser');
const app = express();

const port = config.server.port;

jsonParser = bodyParser.json({limit: "200kb"});
app.use(jsonParser);
//Register routes
helper
    .fileList('./src/routes')
    .forEach(filePath => require(`./${filePath.toString()}`)(app));

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = {
  app: app
}
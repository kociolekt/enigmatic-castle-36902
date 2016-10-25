var server = require('fast-http'),
  port = (process.env.PORT || 5000),
  root = __dirname,
  wordy = true;

server(port, root, wordy);

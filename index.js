var server = require('fast-http'),
  port = 80,
  root = __dirname,
  wordy = true;

server(port, root, wordy);

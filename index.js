const app = require ('./app');
const server = require('http').Server(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

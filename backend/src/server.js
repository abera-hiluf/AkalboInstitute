const app = require('./app');
const { env } = require('./config');

app.listen(env.port, () => {
  console.log(`AQALBO backend listening on port ${env.port}`);
});


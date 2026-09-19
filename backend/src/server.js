import app from './app.js';
import { env } from './config/index.js';

app.listen(env.port, () => {
  console.log(`AQALBO backend listening on port ${env.port}`);
});

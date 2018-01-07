// ============================================================
// Import packages
import console from 'better-console';
import express from 'express';
import path from 'path';

// ============================================================
// Module constants and variables
const app = express();

const SERVER_PORT = 3000;
const LOCALE_PATH = path.join(__dirname, '..', 'locales');

// ============================================================
// Routes
app.get('/', (req, res) => res.send(LOCALE_PATH));
app.get('/config', (req, res) => res.send({ port: SERVER_PORT }));

app.use('/i18n/locales', express.static(LOCALE_PATH));

// ============================================================
// Starting server
app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`));

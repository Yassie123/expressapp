import express from 'express';

const router = express.Router();

// Nieuwe JSON route
router.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>New route</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <h1>Wa to the jo!</h1>
        <div class="noice">
        <img src="/images/noice.gif" alt="Leuke foto" width="300" />
        <button onclick="window.location.href='/'">
          Ga naar home 
        </button>
        </div>
      </body>
    </html>
  `);
});

export default router;

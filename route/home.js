import express from 'express';

const router = express.Router();

// Home route with a button
router.get('/', (req, res) => {
  res.send(`
    <html >
      <head>
        <title>Home</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <h1>Je mama!</h1>
        <div class="noice">
        <img src="/images/noice.png" alt="Leuke foto" width="300" />
        <button onclick="window.location.href='/api/hello'">
          NOICE 
        </button>
        </div>
      </body>
    </html>
  `);
});

export default router;

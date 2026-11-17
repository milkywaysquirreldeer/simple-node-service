const express = require('express');
const app = express();
const port = 3000;

function return403(req, res) {
  res.status(403).json({ error: "Forbidden" });
}

app.get('/', (req, res) => {
  res.json({ message: "Hello, world!" });
});

app.get('/secret', return403);

app.all(/.*/, return403); 

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

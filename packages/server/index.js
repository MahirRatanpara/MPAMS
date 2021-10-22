const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (request, response) => {
  response.send(`Server listening on ${PORT}`);
});

app.listen(PORT, (error) => {
  if (error) console.log(`error logged : ${error.message}`);
  else console.log(`Server listening on ${PORT}`);
});

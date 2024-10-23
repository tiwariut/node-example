const express = require('express');

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

const PORT = 3000;

const checkAuth = (req, res, next) => {
  const { name, password } = req.body;
  console.log('name', name);
  console.log('password', password);

  // Check the db to see if a user exists with that name
  // If the user exists, use a library like jwt and crypto to verify the password
  const validUser = true;

  // If the password is correct
  if (validUser) {
    next();
  } else {
    res.status(401).send('Invalid user');
  }
};

app.post('/', checkAuth, (req, res) => {
  res.status(200).send('User logged in!');
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

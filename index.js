const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//  POST /signup
app.post('/signup', (req, res) => {
  const { username, email, password, dateofbirth } = req.body;

  // Validation
  if (!username) {
    return res.status(400).json({ error: 'Username cannot be empty' });
  }
  if (!email) {
    return res.status(400).json({ error: 'Email cannot be empty' });
  }
  if (password < 8 , password > 16) {
    return res.status(400).json({ error: 'Password length should be greater than 8 or less than 16' });
  }
  if (!dateofbirth) {
    return res.status(400).json({ error: 'Date Of Birth cannot be empty' });
  }


  const users = users.find(u => u.email === email && u.password === password && u.dateofbirth === dateofbirth);

  if (user) {
    res.status(200).json({
      message: 'Signup successful',
    });
    } else {
    res.status(401).json({ error: 'Invalid email or password' });
  }
});

//  GET all the users
app.get('/users', (req, res) => {
  res.status(200).json({ users });
});

app.get('/', (req, res) => {
  res.send('Welcome to Backend CA-2 and Server is running Very Fast');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
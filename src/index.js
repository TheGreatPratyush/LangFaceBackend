const express = require('express');
const prisma = require('./prismaClient');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Express server is running!');
});

app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
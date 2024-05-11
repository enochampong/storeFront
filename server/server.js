const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());

// Array to store items
let items = [
  "Spanner",
  "Allen Key",
  "rebiike Tape",
  "Printing Paper",
  "Wrap",
  "Stickers",
  "Box size 1(400psc)",
  "Box size 2(400 psc)",
  "Box size 3(400 psc)",
  "Box size 4(400 psc)"
];

// Get all items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// Add a new item
app.post('/api/items', (req, res) => {
  const newItem = req.body.item;
  if (newItem.trim() !== "") {
    items.push(newItem);
    res.status(201).json({ message: 'Item added successfully' });
  } else {
    res.status(400).json({ message: 'Item name cannot be empty' });
  }
});

// Delete an item
app.delete('/api/items/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < items.length) {
    items.splice(index, 1);
    res.status(200).json({ message: 'Item deleted successfully' });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

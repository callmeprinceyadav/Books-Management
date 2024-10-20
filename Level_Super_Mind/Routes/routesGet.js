const express = require('express');
const Book = require('../model/Book');
const router = express.Router();

router.get('/', async (req, res) => {
  const { publishedYear, genre } = req.query;
  const query = {};
  
  if (publishedYear) {
    query.publishedYear = publishedYear;
  }
  if (genre) {
    query.genre = genre;
  }

  try {
    const books = await Book.find(query); 
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).send('Book not found');
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

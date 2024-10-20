const express = require('express');
const Book = require('../model/Book');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
